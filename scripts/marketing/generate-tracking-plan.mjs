const events = [
  {
    name: "quote_open",
    description: "Quote dialog opened (from any CTA trigger).",
    props: ["source", "utm_*", "gclid"],
    trigger: "Click on any element that opens the quote dialog",
  },
  {
    name: "cta_clicked",
    description: "CTA click on quote trigger elements.",
    props: ["cta_label", "cta_location", "utm_*", "gclid"],
    trigger: "Click on quote CTA (hero/footer/etc.)",
  },
  {
    name: "quote_step_completed",
    description: "User progressed through quote steps.",
    props: ["step", "next_step", "utm_*", "gclid"],
    trigger: "Click Continue inside quote form",
  },
  {
    name: "quote_submitted",
    description: "Quote form successfully submitted.",
    props: ["property_type", "storeys", "work_needed", "utm_*", "gclid"],
    trigger: "Web3Forms success",
  },
];

function mdEscape(s) {
  return String(s).replace(/\|/g, "\\|");
}

console.log("# WOW Gutters Tracking Plan\n");
console.log("- Tools: GA4 (optional)\n- Last updated: 2026-04-28\n");
console.log("## Events\n");
console.log("| Event Name | Description | Properties | Trigger |");
console.log("|------------|-------------|------------|---------|");
for (const e of events) {
  console.log(
    `| ${mdEscape(e.name)} | ${mdEscape(e.description)} | ${mdEscape(
      e.props.join(", ")
    )} | ${mdEscape(e.trigger)} |`
  );
}
console.log("\n## Conversions\n");
console.log("| Conversion | Event | Counting |");
console.log("|------------|-------|----------|");
console.log("| Quote submitted | quote_submitted | Once per session |");

