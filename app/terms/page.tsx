import SchemaLD from '@/components/SchemaLD'

export default function TermsAndConditions() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Terms and Conditions | Bryan MacMurray',
    'description': 'Terms and conditions for using Bryan MacMurray\'s AI Assistant and website services.'
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 0' }}>
      <SchemaLD data={schemaData} />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Terms and Conditions</h1>
      
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Acceptance of Terms</h2>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
          By accessing this website and using the AI Assistant, you agree to comply with and be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use the services provided.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>AI Assistant Usage</h2>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
          The AI Assistant is provided for informational purposes to answer questions about Bryan MacMurray's professional experience and to facilitate meeting scheduling.
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', opacity: 0.9 }}>
          <li style={{ marginBottom: '0.5rem' }}>The assistant uses artificial intelligence to generate responses; while we strive for accuracy, information should be verified independently.</li>
          <li style={{ marginBottom: '0.5rem' }}>Users are responsible for the information they provide to the assistant.</li>
          <li style={{ marginBottom: '0.5rem' }}>The service may be modified or discontinued at any time without notice.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Data Use & Privacy</h2>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
          Information provided through the chatbot, including lead capture forms, is used to facilitate professional communication and scheduling. 
        </p>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
          Please review our <a href="/privacy" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Privacy Policy</a> for more details on how we handle your data.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Limitation of Liability</h2>
        <p style={{ opacity: 0.9 }}>
          Bryan MacMurray shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the website or AI Assistant.
        </p>
      </section>

      <div style={{ marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid var(--border)' }}>
        <a href="/" style={{ color: 'var(--accent)', fontWeight: 600 }}>← Back to Assistant</a>
      </div>
    </div>
  )
}
