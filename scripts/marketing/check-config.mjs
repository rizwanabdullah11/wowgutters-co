import process from "node:process";

function req(name) {
  const v = (process.env[name] || "").trim();
  return { name, value: v, ok: v.length > 0 };
}

const checks = [
  req("NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY"),
  req("NEXT_PUBLIC_GA4_MEASUREMENT_ID"),
  req("NEXT_PUBLIC_GTM_ID"),
];

const missing = checks.filter((c) => !c.ok && (c.name !== "NEXT_PUBLIC_GTM_ID"));

console.log(
  JSON.stringify(
    {
      ok: missing.length === 0,
      checks: checks.map((c) => ({ name: c.name, ok: c.ok })),
      notes: [
        "GTM is optional.",
        "For static export, set env vars in `.env.production` before `npm run build`.",
      ],
    },
    null,
    2
  )
);

process.exit(missing.length === 0 ? 0 : 1);

