/**
 * wow-quote-form-init.js
 *
 * Pure vanilla JS form engine for the WOW Gutters quote modal.
 * Loaded as a plain <script> tag in <head> — completely outside
 * React / Next.js bundling so it always runs in production builds.
 *
 * Strategy:
 *   1. React renders the HTML shell (QuoteModal.tsx) with data-* attributes.
 *   2. A MutationObserver detects when [data-quote-card] appears in the DOM.
 *   3. initCard() attaches event listeners directly to the card element and
 *      manages all state / UI via plain DOM manipulation.
 *   4. Each remount (formKey change in StaticQuoteDialog) creates a fresh
 *      card element — the old one's _wqfInit flag is gone so it re-inits.
 */
(function () {
  'use strict';

  var GREEN_BG = 'linear-gradient(135deg,#22C55E 0%,#10B981 100%)';
  var TOTAL    = 4;
  var QUOTE_EMAIL_SUBJECT = 'New quote request - WOW Gutters';

  /**
   * Static export (Hostinger): there is no PHP/Node API on your server.
   * The form uses one public POST API from the browser:
   *   POST https://api.web3forms.com/submit  (JSON body, access_key from Web3Forms)
   * Set the key at build time: NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.production
   * (injected in app/layout.tsx) or edit public/wow-quote-config.js after upload.
   */
  function getWeb3FormsAccessKey() {
    var C = (typeof window !== 'undefined' && window.__WOW_QUOTE__) || {};
    return String(C.web3formsAccessKey || '').trim();
  }

  /* ─────────────────────────────────────────────────────────────────
     initCard — called once per card element instance
  ──────────────────────────────────────────────────────────────── */
  function initCard(card) {
    if (card._wqfInit) return;
    card._wqfInit = true;

    /* form state (plain JS variables, fresh each init) */
    var step          = 1;
    var propertyType  = '';
    var propTypeOther = '';
    var storeys       = '';
    var storeysOther  = '';
    var workNeeded    = [];
    var workOther     = '';

    /* helpers */
    function q(sel)  { return card.querySelector(sel); }
    function qa(sel) { return Array.prototype.slice.call(card.querySelectorAll(sel)); }
    function safeText(s) { return (s == null ? '' : String(s)).trim(); }
    function fieldVal(name) {
      var el = q('[data-field="' + name + '"]');
      return el ? safeText(el.value) : '';
    }

    function buildQuoteMessage() {
      var chosenPropertyType = propertyType === 'Other' ? safeText(propTypeOther) : safeText(propertyType);
      var chosenStoreys = storeys === 'Other' ? safeText(storeysOther) : safeText(storeys);
      var chosenWorkNeeded = (workNeeded || []).slice();
      var otherWork = safeText(workOther);
      if (chosenWorkNeeded.indexOf('Other') !== -1 && otherWork) {
        chosenWorkNeeded = chosenWorkNeeded.filter(function (x) { return x !== 'Other'; });
        chosenWorkNeeded.push('Other: ' + otherWork);
      }

      var lines = [];
      lines.push('New quote request');
      lines.push('-----------------');
      lines.push('Property type: ' + (chosenPropertyType || '-'));
      lines.push('Storeys: ' + (chosenStoreys || '-'));
      lines.push('Work needed: ' + (chosenWorkNeeded.length ? chosenWorkNeeded.join(', ') : '-'));
      lines.push('');
      lines.push('Contact details');
      lines.push('--------------');
      lines.push('Full name: ' + (fieldVal('fullName') || '-'));
      lines.push('Phone: ' + (fieldVal('phone') || '-'));
      lines.push('Email: ' + (fieldVal('email') || '-'));
      lines.push('Street address: ' + (fieldVal('streetAddress') || '-'));
      lines.push('Post code: ' + (fieldVal('postCode') || '-'));
      lines.push('');
      if (typeof window !== 'undefined') {
        lines.push('Page: ' + (window.location && window.location.href ? window.location.href : '-'));
        lines.push('Submitted: ' + new Date().toISOString());
      }
      return lines.join('\n');
    }

    /** Values for Web3Forms columns (same logic as buildQuoteMessage). */
    function getStepFieldValues() {
      var chosenPropertyType = propertyType === 'Other' ? safeText(propTypeOther) : safeText(propertyType);
      var chosenStoreys = storeys === 'Other' ? safeText(storeysOther) : safeText(storeys);
      var chosenWorkNeeded = (workNeeded || []).slice();
      var otherWork = safeText(workOther);
      if (chosenWorkNeeded.indexOf('Other') !== -1 && otherWork) {
        chosenWorkNeeded = chosenWorkNeeded.filter(function (x) { return x !== 'Other'; });
        chosenWorkNeeded.push('Other: ' + otherWork);
      }
      return {
        property_type: chosenPropertyType || '-',
        storeys: chosenStoreys || '-',
        work_needed: chosenWorkNeeded.length ? chosenWorkNeeded.join(', ') : '-',
      };
    }

    /**
     * POST https://api.web3forms.com/submit
     * Extra keys (property_type, storeys, work_needed, street_address, post_code) become columns in the dashboard.
     */
    function submitViaWeb3Forms(accessKey, message, subject) {
      var msgText = String(message || '').trim();
      if (!msgText) return Promise.reject(new Error('empty-message'));
      var visitorEmail = fieldVal('email');
      if (!visitorEmail) return Promise.reject(new Error('missing-email'));

      var steps = getStepFieldValues();
      var payload = {
        access_key: accessKey,
        subject: String(subject || QUOTE_EMAIL_SUBJECT),
        name: fieldVal('fullName') || 'Quote request',
        email: visitorEmail,
        phone: fieldVal('phone') || '',
        /* Step 1–3 — separate columns in Web3Forms Submissions */
        property_type: steps.property_type,
        storeys: steps.storeys,
        work_needed: steps.work_needed,
        /* Step 4 — address as its own columns (name/email/phone are above) */
        street_address: fieldVal('streetAddress') || '',
        post_code: fieldVal('postCode') || '',
        /* Full text backup in email / Message column */
        message: msgText,
      };

      return fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
        .then(function (res) {
          return res.json().then(function (data) {
            return { res: res, data: data };
          });
        })
        .then(function (r) {
          var data = r.data;
          if (r.res.ok && data && (data.success === true || data.success === 'true')) return data;
          var msg = (data && (data.message || data.error)) || 'Request failed (' + r.res.status + ')';
          throw new Error(msg);
        });
    }

    /** Fallback for hosts that block fetch/CORS: hidden form POST into an iframe (no navigation). */
    function submitViaWeb3FormsFormPost(accessKey, message, subject) {
      var msgText = String(message || '').trim();
      if (!msgText) return Promise.reject(new Error('empty-message'));
      var visitorEmail = fieldVal('email');
      if (!visitorEmail) return Promise.reject(new Error('missing-email'));

      var steps = getStepFieldValues();
      var payload = {
        access_key: accessKey,
        subject: String(subject || QUOTE_EMAIL_SUBJECT),
        name: fieldVal('fullName') || 'Quote request',
        email: visitorEmail,
        phone: fieldVal('phone') || '',
        property_type: steps.property_type,
        storeys: steps.storeys,
        work_needed: steps.work_needed,
        street_address: fieldVal('streetAddress') || '',
        post_code: fieldVal('postCode') || '',
        message: msgText,
      };

      return new Promise(function (resolve, reject) {
        try {
          var iframeId = 'wqf_web3forms_iframe';
          var iframe = document.getElementById(iframeId);
          if (!iframe) {
            iframe = document.createElement('iframe');
            iframe.id = iframeId;
            iframe.name = iframeId;
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
          }

          var form = document.createElement('form');
          form.action = 'https://api.web3forms.com/submit';
          form.method = 'POST';
          form.target = iframeId;
          form.style.display = 'none';

          Object.keys(payload).forEach(function (k) {
            if (k === 'message') {
              var ta = document.createElement('textarea');
              ta.name = 'message';
              ta.value = String(payload.message || '');
              form.appendChild(ta);
              return;
            }
            var input = document.createElement('input');
            input.type = 'hidden';
            input.name = k;
            input.value = payload[k] == null ? '' : String(payload[k]);
            form.appendChild(input);
          });

          var done = false;
          var cleanup = function () {
            try { iframe.removeEventListener('load', onLoad); } catch (e) {}
            try { if (form && form.parentNode) form.parentNode.removeChild(form); } catch (e) {}
          };
          var onLoad = function () {
            if (done) return;
            done = true;
            cleanup();
            resolve({ success: true, via: 'form-post' });
          };

          iframe.addEventListener('load', onLoad);
          setTimeout(function () {
            if (done) return;
            done = true;
            cleanup();
            // Can't read cross-origin response; assume OK after timeout.
            resolve({ success: true, via: 'form-post-timeout' });
          }, 6000);

          document.body.appendChild(form);
          form.submit();
        } catch (e) {
          reject(e);
        }
      });
    }

    function submitQuote(msg, subj) {
      var key = getWeb3FormsAccessKey();
      if (!key) {
        return Promise.reject(new Error('missing-web3forms-key'));
      }
      return submitViaWeb3Forms(key, msg, subj).catch(function (err) {
        if (typeof console !== 'undefined' && console.warn) {
          console.warn('[WOW Quote] Web3Forms fetch failed, trying form-post fallback', err);
        }
        return submitViaWeb3FormsFormPost(key, msg, subj);
      });
    }

    /* ── canContinue ────────────────────────────────────────────── */
    function canContinue() {
      if (step === 1) {
        if (!propertyType) return false;
        return propertyType === 'Other' ? propTypeOther.trim() !== '' : true;
      }
      if (step === 2) {
        if (!storeys) return false;
        return storeys === 'Other' ? storeysOther.trim() !== '' : true;
      }
      if (step === 3) {
        if (workNeeded.length === 0) return false;
        return workNeeded.indexOf('Other') !== -1 ? workOther.trim() !== '' : true;
      }
      if (step === 4) {
        return fieldVal('fullName') !== '' && fieldVal('email') !== '' && fieldVal('phone') !== '' &&
               fieldVal('streetAddress') !== '' && fieldVal('postCode') !== '';
      }
      return true;
    }

    /* ── UI sync helpers ────────────────────────────────────────── */
    function syncContinueBtn() {
      var btn = q('[data-action="continue"]');
      if (!btn) return;
      var ok = canContinue();
      btn.disabled = !ok;
      btn.style.background = ok ? GREEN_BG : '';
    }

    function syncStep() {
      /* progress bar */
      var bar = q('[data-progress-bar]');
      if (bar) bar.style.width = ((step / TOTAL) * 100) + '%';

      /* step label */
      var lbl = q('[data-step-label]');
      if (lbl) lbl.textContent = 'Step ' + step + ' of ' + TOTAL;

      /* show/hide step panels */
      qa('[data-step-content]').forEach(function (el) {
        el.style.display = el.getAttribute('data-step-content') === String(step) ? '' : 'none';
      });

      /* back button */
      var back = q('[data-action="back"]');
      if (back) back.style.display = step > 1 ? '' : 'none';

      /* continue / submit label */
      var cont = q('[data-action="continue"]');
      if (cont) cont.textContent = step === TOTAL ? 'Submit' : 'Continue';

      syncContinueBtn();
    }

    function syncRowHighlight(group, value) {
      qa('[data-option-group="' + group + '"]').forEach(function (row) {
        var v   = row.getAttribute('data-option-value') || '';
        var sel = Array.isArray(value) ? value.indexOf(v) !== -1 : value === v;
        row.style.background = sel ? '#EFF6FF' : '';
      });
    }

    function syncOtherField(group, show) {
      var f = q('[data-other-field="' + group + '"]');
      if (f) f.style.display = show ? '' : 'none';
    }

    /* ── input / change handler ─────────────────────────────────── */
    function onInput(e) {
      var el = e.target;
      if (!el || !card.contains(el)) return;

      /* radio buttons */
      if (el.type === 'radio' && el.checked) {
        if (el.name === 'propertyType') {
          propertyType = el.value;
          syncRowHighlight('propertyType', propertyType);
          syncOtherField('propertyType', propertyType === 'Other');
        }
        if (el.name === 'storeys') {
          storeys = el.value;
          syncRowHighlight('storeys', storeys);
          syncOtherField('storeys', storeys === 'Other');
        }
        syncContinueBtn();
        return;
      }

      /* checkboxes */
      if (el.type === 'checkbox' && el.name === 'workNeeded') {
        var idx = workNeeded.indexOf(el.value);
        if (el.checked  && idx === -1) workNeeded.push(el.value);
        if (!el.checked && idx !== -1) workNeeded.splice(idx, 1);
        syncRowHighlight('workNeeded', workNeeded);
        syncOtherField('workNeeded', workNeeded.indexOf('Other') !== -1);
        syncContinueBtn();
        return;
      }

      /* "Other" free-text + step-4 contact fields */
      if (el.name === 'propertyTypeOther') { propTypeOther = el.value; syncContinueBtn(); }
      if (el.name === 'storeysOther')      { storeysOther  = el.value; syncContinueBtn(); }
      if (el.name === 'workOther')         { workOther     = el.value; syncContinueBtn(); }
      if (el.dataset && el.dataset.field)  { syncContinueBtn(); }
    }

    /* ── click handler (action buttons) ────────────────────────── */
    function onClick(e) {
      /* walk up the DOM tree to find a [data-action] button */
      var btn = e.target;
      while (btn && btn !== card) {
        if (btn.getAttribute && btn.getAttribute('data-action')) break;
        btn = btn.parentNode;
      }
      if (!btn || btn === card) return;
      if (btn.disabled) return;

      var action = btn.getAttribute('data-action');

      if (action === 'close') {
        var dialog = document.getElementById('wow-cta-dialog');
        if (dialog && typeof dialog.close === 'function') dialog.close();

      } else if (action === 'back') {
        if (step > 1) { step--; syncStep(); }

      } else if (action === 'continue') {
        if (step < TOTAL) {
          step++;
          syncStep();
          try {
            if (typeof window.wowTrack === 'function') {
              window.wowTrack('quote_step_completed', { step: step - 1, next_step: step });
            }
          } catch (_) {}
        } else {
          /* send (message format) */
          var msg = buildQuoteMessage();
          var fullNameForSubject = fieldVal('fullName');
          var emailForSubject = fieldVal('email');
          var timeTag = new Date().toISOString().replace(/[:.]/g, '-');
          var subj = 'New quote request - ' + (fullNameForSubject || 'WOW Gutters') + (emailForSubject ? (' (' + emailForSubject + ')') : '') + ' - ' + timeTag;
          var contBtn = q('[data-action="continue"]');
          var prevLabel = contBtn ? contBtn.textContent : '';
          if (contBtn) {
            contBtn.disabled = true;
            contBtn.textContent = 'Sending…';
            contBtn.style.background = GREEN_BG;
          }

          function showSuccess() {
            qa('[data-step-content]').forEach(function (el) { el.style.display = 'none'; });
            var success = q('[data-success]');
            if (success) success.style.display = '';
            var footer = q('[data-footer]');
            if (footer) footer.style.display = 'none';
          }

          function restoreButton() {
            if (!contBtn) return;
            contBtn.disabled = false;
            contBtn.textContent = prevLabel || 'Submit';
            syncContinueBtn();
          }

          submitQuote(msg, subj).then(function () {
            showSuccess();
            try {
              if (typeof window.wowTrack === 'function') {
                var steps = getStepFieldValues();
                window.wowTrack('quote_submitted', {
                  property_type: steps.property_type,
                  storeys: steps.storeys,
                  work_needed: steps.work_needed,
                });
              }
            } catch (_) {}
          }).catch(function (err) {
            restoreButton();
            if (typeof console !== 'undefined' && console.error) console.error('Quote submit failed', err);
            if (err && err.message === 'missing-web3forms-key') {
              alert(
                'Email is not configured for this build.\n\n' +
                  'Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.production (get a free key at web3forms.com), run npm run build, then upload the out/ folder.\n\n' +
                  'Or set window.__WOW_QUOTE__.web3formsAccessKey in public/wow-quote-config.js on the server.'
              );
            } else if (err && err.message === 'missing-email') {
              alert('Please enter your email address in the form.');
            } else {
              alert('Could not send your quote: ' + (err && err.message ? err.message : 'Please try again.'));
            }
          });
        }
      }
    }

    /* attach directly to the card — events from inputs/buttons bubble up */
    card.addEventListener('input',  onInput, false);
    card.addEventListener('change', onInput, false);
    card.addEventListener('click',  onClick, false);

    /* initialise UI state */
    syncStep();
  }

  /* ─────────────────────────────────────────────────────────────────
     Card discovery — runs on DOMContentLoaded and watches for
     React-mounted cards via MutationObserver
  ──────────────────────────────────────────────────────────────── */
  function checkCards() {
    var cards = document.querySelectorAll('[data-quote-card]');
    for (var i = 0; i < cards.length; i++) initCard(cards[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkCards);
  } else {
    checkCards();
  }

  /* Watch for React mounts / remounts */
  var mo = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      var added = mutations[i].addedNodes;
      for (var j = 0; j < added.length; j++) {
        var node = added[j];
        if (node.nodeType !== 1) continue; /* elements only */
        if (node.matches && node.matches('[data-quote-card]')) {
          initCard(node);
        } else if (node.querySelectorAll) {
          var found = node.querySelectorAll('[data-quote-card]');
          for (var k = 0; k < found.length; k++) initCard(found[k]);
        }
      }
    }
  });

  mo.observe(document.documentElement, { childList: true, subtree: true });

})();
