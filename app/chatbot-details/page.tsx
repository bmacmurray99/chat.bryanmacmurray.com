import SchemaLD from '@/components/SchemaLD'

export default function PrivacyPolicy() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Privacy Policy | Bryan MacMurray',
    'description': 'Information about data processing for meeting scheduling via bryanmacmurray.com.'
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 0' }}>
      <SchemaLD data={schemaData} />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>About This Chatbot</h1>
      
      <section style={{ marginBottom: '2rem' }}>

        <p style={{ marginBottom: '1rem' }}>
          This chatbot is based on the following technologies:
        </p>
        
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Chatbot Data Processing</h2>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
          The chatbot on this website is an automated interface. PLACEHOLDER TEXT
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>PPLACEHOLDER</h2>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
       PLACEHOLDER TEXT
        </p>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
         PLACEHOLDER
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Third-Party Services</h2>
        <p style={{ opacity: 0.9 }}>
         PLACEHGOOLDER</p>
      </section>

      <div style={{ marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid var(--border)' }}>
        <a href="/" style={{ color: 'var(--accent)', fontWeight: 600 }}>← Back to Assistant</a>
      </div>
    </div>
  )
}
