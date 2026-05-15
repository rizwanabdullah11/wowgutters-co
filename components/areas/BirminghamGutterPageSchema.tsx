'use client'

import { JsonLdClient } from '@/components/JsonLdClient'
import {
  getBirminghamLocalBusinessSchema,
  getBirminghamFAQSchema,
  getBirminghamBreadcrumbSchema
} from '@/lib/birminghamJsonLd'

export default function BirminghamGutterPageSchema() {
  return (
    <>
      <JsonLdClient
        id="schema-local-business"
        data={getBirminghamLocalBusinessSchema()}
      />
      <JsonLdClient
        id="schema-faq"
        data={getBirminghamFAQSchema()}
      />
      <JsonLdClient
        id="schema-breadcrumb"
        data={getBirminghamBreadcrumbSchema()}
      />
    </>
  )
}
