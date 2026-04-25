'use client';

/**
 * QuoteModal — React renders the HTML shell ONLY.
 *
 * All form logic (state, step navigation, selection, button enabling) is
 * handled by /public/wow-quote-form-init.js — a plain <script> tag loaded
 * in <head> that is completely outside Next.js bundling.
 *
 * This guarantees the form works in static-export production builds on
 * Hostinger where React chunk loading or useEffect timing can be unreliable.
 */

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { colors } from '@/constants/colors';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  align?: 'left' | 'center' | 'right';
  mode?: 'overlay' | 'inline';
  showClose?: boolean;
  embed?: boolean;
}

const propertyTypes = ['House', 'Flat', 'Bungalow', 'Garage or outbuilding', 'Office', 'Commercial premises', 'Other'];
const storeyOptions = ['1 storey', '2 storeys', '3 storeys', '4 or more storeys', "I don't know", 'Other'];
const workOptions = [
  'Clean gutters as part of routine maintenance',
  'Clean gutters due to blockage',
  'Clear down-pipe',
  'Re-attach fallen or detached gutters',
  'Patch leaking gutters',
  'Roof cleaning',
  'Gutter installation',
  'Gutter repair',
  'Other',
];

export default function QuoteModal({
  isOpen,
  onClose,
  align = 'left',
  mode = 'overlay',
  showClose = true,
  embed = false,
}: QuoteModalProps) {
  const [mounted, setMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => { setMounted(true); }, []);

  /* Lock body scroll for overlay mode */
  useEffect(() => {
    if (mode !== 'overlay') return;
    if (isOpen) { document.body.style.overflow = 'hidden'; }
    else { document.body.style.overflow = ''; }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, mode]);

  // Form logic is handled entirely by /public/wow-quote-form-init.js
  // which is loaded as a plain <script> tag and uses MutationObserver
  // to detect [data-quote-card] and attach event listeners directly.

  if (!isOpen) return null;
  if (mode === 'overlay' && !mounted) return null;

  const cardCls = `relative w-full max-w-full bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden ${
    embed ? '' : 'animate-slideInScale'
  } ${
    mode === 'inline' ? '' : align === 'left' ? 'ml-0 mr-auto' : align === 'right' ? 'mr-0 ml-auto' : 'mx-auto'
  }`;

  /* ── JSX: ALL steps rendered at once; JS shows/hides via display ── */
  const modalCard = (
    <div
      ref={cardRef}
      data-quote-card
      className={cardCls}
      style={{
        maxWidth: mode === 'inline' ? '100%' : '460px',
        maxHeight: mode === 'inline' ? undefined : 'min(96dvh, 900px)',
      }}
    >
      {/* ── Header ────────────────────────────────────────────────── */}
      <div className="w-full min-w-0 px-5 pt-4 pb-2 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              data-progress-bar
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: '25%', background: 'linear-gradient(90deg,#22C55E 0%,#10B981 100%)', boxShadow: '0 0 8px rgba(16,185,129,0.35)' }}
            />
          </div>
          {showClose && (
            <button type="button" data-action="close" aria-label="Close modal"
              className="h-8 w-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <div className="mt-2 text-xs text-gray-500" data-step-label>Step 1 of 4</div>
      </div>

      {/* ── Scrollable content (min-h-0 so footer Next/Submit stays visible on long steps 3–4) ── */}
      <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden w-full min-w-0 px-4 pt-5 pb-4 sm:px-5 space-y-4">

        {/* SUCCESS SCREEN */}
        <div data-success style={{ display: 'none' }}>
          <div className="text-center py-8">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h2>
            <p className="text-lg text-gray-600 mb-8">Your quote request has been submitted successfully.</p>
            <div className="space-y-3 mb-8">
              <a href="https://wa.me/447421433910?text=Hi%2C%20I%20just%20submitted%20a%20quote%20request%20on%20your%20website"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors shadow-md">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
              <a href="tel:+447421433910"
                className="flex items-center justify-center gap-3 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors shadow-md">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Call Directly
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <h3 className="font-bold text-gray-900 mb-4 text-center">What Happens Next?</h3>
              <div className="space-y-3">
                {["We'll review your quote request within 24 hours","Our team will contact you to discuss details","We'll provide a detailed quote and schedule your service"].map((t, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</div>
                    <p className="text-sm text-gray-700">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* STEP 1 — Property type */}
        <div data-step-content="1" className="w-full min-w-0">
          <div className="mb-1 flex w-full min-w-0 items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1h-5v-7h-6v7H4a1 1 0 01-1-1v-10.5z" />
              </svg>
            </div>
            <h3 className="min-w-0 flex-1 font-bold text-gray-900 text-2xl sm:text-[1.65rem] leading-[1.2] tracking-tight">
              What is the type of property?
            </h3>
          </div>
          <div className="w-full min-w-0 border border-gray-200 rounded-lg overflow-hidden bg-white">
            {propertyTypes.map(opt => (
              <label key={opt} data-option-group="propertyType" data-option-value={opt}
                className="flex w-full min-w-0 items-center gap-3 px-3 py-2 border-b border-gray-200 last:border-b-0 cursor-pointer select-none transition-colors hover:bg-gray-50">
                <input type="radio" name="propertyType" value={opt} className="h-4 w-4 shrink-0" style={{ accentColor: colors.primary }} />
                <span className="flex-1 min-w-0 text-sm text-gray-700">{opt}</span>
              </label>
            ))}
            <div data-other-field="propertyType" style={{ display: 'none' }} className="p-3 border-t border-gray-200 bg-gray-50">
              <input type="text" name="propertyTypeOther" placeholder="Please describe…"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2"
                style={{ outlineColor: colors.primary }} />
            </div>
          </div>
        </div>

        {/* STEP 2 — Storeys */}
        <div data-step-content="2" style={{ display: 'none' }} className="w-full min-w-0">
          <div className="">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 21V5a1 1 0 011-1h6v17H5a1 1 0 01-1-1zM13 3h6a1 1 0 011 1v17h-7V3z" />
              </svg>
            </div>
            <h3 className="min-w-0 flex-1 font-bold text-gray-900 text-2xl sm:text-[1.65rem] leading-[1.2] tracking-tight">
              How many storeys does your property have?
            </h3>
          </div>
          <div className="w-full min-w-0 border border-gray-200 rounded-lg overflow-hidden bg-white">
            {storeyOptions.map(opt => (
              <label key={opt} data-option-group="storeys" data-option-value={opt}
                className="flex w-full min-w-0 items-center gap-3 px-3 py-2 border-b border-gray-200 last:border-b-0 cursor-pointer select-none transition-colors hover:bg-gray-50">
                <input type="radio" name="storeys" value={opt} className="h-4 w-4 shrink-0" style={{ accentColor: colors.primary }} />
                <span className="flex-1 min-w-0 text-sm text-gray-700">{opt}</span>
              </label>
            ))}
            <div data-other-field="storeys" style={{ display: 'none' }} className="p-3 border-t border-gray-200 bg-gray-50">
              <input type="text" name="storeysOther" placeholder="Please describe…"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2"
                style={{ outlineColor: colors.primary }} />
            </div>
          </div>
        </div>

        {/* STEP 3 — Work needed */}
        <div data-step-content="3" style={{ display: 'none' }} className="w-full min-w-0">
          <div className="mb-1 flex w-full min-w-0 items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.7 6.3a4 4 0 01-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.2 2.2-2.8-2.8 2-2.4z" />
              </svg>
            </div>
            <h3 className="min-w-0 flex-1 font-bold text-gray-900 text-2xl sm:text-[1.65rem] leading-[1.2] tracking-tight">
              What type of work is needed?
            </h3>
          </div>
          <div className="w-full min-w-0 border border-gray-200 rounded-lg overflow-hidden bg-white">
            {workOptions.map(opt => (
              <label key={opt} data-option-group="workNeeded" data-option-value={opt}
                className="flex w-full min-w-0 items-center gap-3 px-3 py-2 border-b border-gray-200 last:border-b-0 cursor-pointer select-none transition-colors hover:bg-gray-50">
                <input type="checkbox" name="workNeeded" value={opt} className="h-4 w-4 shrink-0 rounded-sm" style={{ accentColor: colors.primary }} />
                <span className="flex-1 min-w-0 text-sm leading-snug text-gray-700">{opt}</span>
              </label>
            ))}
            <div data-other-field="workNeeded" style={{ display: 'none' }} className="p-3 border-t border-gray-200 bg-gray-50">
              <input type="text" name="workOther" placeholder="Please describe…"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2"
                style={{ outlineColor: colors.primary }} />
            </div>
          </div>
        </div>

        {/* STEP 4 — Contact info */}
        <div data-step-content="4" style={{ display: 'none' }} className="w-full min-w-0">
          <div className="mb-1 flex w-full min-w-0 items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A8.97 8.97 0 0112 15c2.5 0 4.76 1.02 6.379 2.664M15 8a3 3 0 11-6 0 3 3 0 016 0z" />
                <circle cx="12" cy="12" r="9" strokeWidth={2} />
              </svg>
            </div>
            <h3 className="min-w-0 flex-1 font-bold text-gray-900 text-2xl leading-tight">Contact information</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">Get a <strong>FREE Professional Quote in 60 Seconds.</strong></p>
          <div className="w-full min-w-0 rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-4 sm:p-5 shadow-sm space-y-3.5">
            {[
              { label: 'Full name',       name: 'fullName',      type: 'text',  ph: 'Enter your full name' },
              { label: 'Phone number',    name: 'phone',         type: 'tel',   ph: 'Enter your phone number' },
              { label: 'Email',           name: 'email',         type: 'email', ph: 'Enter your email address', required: true },
              { label: 'Street address',  name: 'streetAddress', type: 'text',  ph: 'Enter your street address' },
              { label: 'Post code',       name: 'postCode',      type: 'text',  ph: 'Enter your post code' },
            ].map(f => (
              <div key={f.name} className="w-full min-w-0">
                <label className="block text-xs font-semibold tracking-wide text-gray-600 uppercase mb-1">{f.label}</label>
                <input
                  type={f.type as 'text' | 'tel' | 'email'}
                  data-field={f.name}
                  placeholder={f.ph}
                  required={'required' in f ? f.required : false}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-1 px-1 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                  style={{ boxShadow: '0 1px 2px rgba(16,24,40,0.05)', outlineColor: colors.primary }}
                />
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-gray-500">Your details are secure and only used for your quote.</p>
        </div>

      </div>

      {/* ── Footer (shrink-0 keeps Back / Continue above the fold) ── */}
      <div data-footer className="shrink-0 w-full min-w-0 border-t border-gray-100 bg-white px-4 py-3.5 sm:px-5 flex items-center gap-3">
        <button type="button" data-action="back" style={{ display: 'none' }}
          className="min-w-[92px] min-h-[48px] rounded-lg border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          Back
        </button>
        <button type="button" data-action="continue" disabled
          className="ml-auto min-h-[48px] rounded-lg px-6 py-3 text-sm font-semibold text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:opacity-95 transition-all shadow-sm hover:shadow">
          Continue
        </button>
      </div>
    </div>
  );

  if (mode === 'inline') {
    return <div className="w-full min-w-0">{modalCard}</div>;
  }

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[10000] flex items-center p-3 sm:p-4 ${
        align === 'left' ? 'justify-start' : align === 'right' ? 'justify-end' : 'justify-center'
      }`}
      style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {modalCard}
    </div>,
    document.body
  );
}
