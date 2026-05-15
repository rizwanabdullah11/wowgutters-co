'use client'

import { useEffect } from 'react'

interface JsonLdClientProps {
  data: Record<string, unknown>
  id: string
}

export function JsonLdClient({ data, id }: JsonLdClientProps) {
  useEffect(() => {
    // Remove existing script with same id if present
    const existing = document.getElementById(id)
    if (existing) existing.remove()

    // Create new script tag
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = id
    script.text = JSON.stringify(data)
    document.head.appendChild(script)

    // Cleanup on unmount
    return () => {
      const el = document.getElementById(id)
      if (el) el.remove()
    }
  }, [data, id])

  return null
}
