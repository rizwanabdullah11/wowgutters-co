import process from "node:process";

function req(name) {
  const v = (process.env[name] || "").trim();
  return { name, value: v, ok: v.length > 0 };
}

const checks = [
  req("NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY"),
  req("NEXT_PUBLIC_GA4_MEASUREMENT_ID"),
  req("NEXT_PUBLIC_GTM_ID"),
  req("NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION"),
];

const missing = checks.filter(
  (c) => !c.ok && c.name !== "NEXT_PUBLIC_GTM_ID"
);

console.log(
  JSON.stringify(
    {
      ok: missing.length === 0,
      checks: checks.map((c) => ({ name: c.name, ok: c.ok })),
      notes: [
        "GTM is optional.",
        "For static export, set env vars in `.env.production` before `npm run build`.",
        "GSC: prefer a Domain property (wowgutters.co.uk) verified via DNS or NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION HTML tag.",
        "Meta Events Manager: map conversions to Lead (quote submit), not PageView.",
        "UTM templates: /citations/#utm-links and lib/utmLinks.ts",
      ],
    },
    null,
    2
  )
);

process.exit(missing.length === 0 ? 0 : 1);
