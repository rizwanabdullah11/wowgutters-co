const events = [
  {
    name: "quote_open",
    description: "Quote dialog opened (from any CTA trigger).",
    props: ["source", "utm_*", "gclid"],
    trigger: "Click on any element that opens the quote dialog",
    ga4KeyEvent: false,
    metaEvent: null,
  },
  {
    name: "cta_clicked",
    description: "CTA click on quote trigger elements.",
    props: ["cta_label", "cta_location", "utm_*", "gclid"],
    trigger: "Click on quote CTA (hero/footer/etc.)",
    ga4KeyEvent: false,
    metaEvent: null,
  },
  {
    name: "quote_step_completed",
    description: "User progressed through quote steps.",
    props: ["step", "next_step", "utm_*", "gclid"],
    trigger: "Click Continue inside quote form",
    ga4KeyEvent: false,
    metaEvent: null,
  },
  {
    name: "quote_submitted",
    description: "Quote / contact form successfully submitted (Web3Forms).",
    props: ["property_type", "storeys", "work_needed", "form_name", "utm_*", "gclid"],
    trigger: "Web3Forms success",
    ga4KeyEvent: true,
    metaEvent: "Lead (conversion only — not PageView)",
  },
  {
    name: "generate_lead",
    description: "GA4 recommended event mirrored from quote_submitted.",
    props: ["lead_type", "form_name", "utm_*"],
    trigger: "Web3Forms success (auto-fired by wow-analytics.js)",
    ga4KeyEvent: true,
    metaEvent: null,
  },
  {
    name: "phone_click",
    description: "User clicked a tel: link to call WOW Gutters Ltd.",
    props: ["phone_href", "phone_number", "link_text", "utm_*"],
    trigger: "Any tel: link click site-wide",
    ga4KeyEvent: true,
    metaEvent: null,
  },
  {
    name: "whatsapp_click",
    description: "User opened WhatsApp chat link.",
    props: ["link_url", "utm_*"],
    trigger: "wa.me link click",
    ga4KeyEvent: false,
    metaEvent: null,
  },
];

function mdEscape(s) {
  return String(s).replace(/\|/g, "\\|");
}

console.log("# WOW Gutters Ltd Tracking Plan\n");
console.log("- Tools: GA4 (G-X0YK1TD470), Meta Pixel (Lead on submit only)\n- Last updated: 2026-06-02\n");
console.log("## Events\n");
console.log("| Event Name | Description | GA4 key event | Meta | Trigger |");
console.log("|------------|-------------|---------------|------|---------|");
for (const e of events) {
  console.log(
    `| ${mdEscape(e.name)} | ${mdEscape(e.description)} | ${e.ga4KeyEvent ? "Yes" : "No"} | ${mdEscape(e.metaEvent || "—")} | ${mdEscape(e.trigger)} |`
  );
}
console.log("\n## Conversions\n");
console.log("| Conversion | Event | Counting |");
console.log("|------------|-------|----------|");
console.log("| Quote / contact form submitted | quote_submitted + generate_lead | Once per session |");
console.log("| Phone call intent | phone_click | Every click |");
console.log("\n## Post-deploy (dashboard)\n");
console.log("- GSC: add **Domain** property wowgutters.co.uk (DNS or HTML tag via NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION)");
console.log("- GA4: mark `generate_lead`, `phone_click`, and `quote_submitted` as key events");
console.log("- Meta: ensure custom conversion uses **Lead** event, not PageView");
