import SchemaMarkup from '@/components/seo/SchemaMarkup';

/** Homepage FAQPage schema - separate from business schema for better rich results */
export default function HomepageFAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does gutter cleaning cost in Birmingham?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WOW Gutters offers gutter cleaning from £50. Prices vary by property size. Call 07421 433910 for a free no-obligation quote."
        }
      },
      {
        "@type": "Question",
        "name": "Do you use ladders to clean gutters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We use a ground-level high-reach vacuum system reaching up to 4 storeys — no ladders needed, zero risk to your fascia or property."
        }
      },
      {
        "@type": "Question",
        "name": "How often should gutters be cleaned?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Birmingham properties need cleaning once or twice a year. Late autumn (Oct-Nov) is most critical due to leaf fall."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide before and after photos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — we photograph gutters before and after every clean and send images directly to you."
        }
      }
    ]
  };

  return <SchemaMarkup id="homepage-faq-schema" data={faqSchema} />;
}
