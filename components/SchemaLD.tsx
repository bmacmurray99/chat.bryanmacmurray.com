import Script from 'next/script'

interface SchemaLDProps {
  data: Record<string, any>
}

export default function SchemaLD({ data }: SchemaLDProps) {
  return (
    <Script
      id="schema-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
