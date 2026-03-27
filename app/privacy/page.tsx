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
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Privacy Policy</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>Last Updated: March 26, 2026</p>
        <p style={{ marginBottom: '1rem' }}>
          This policy explains how data is handled on bryanmacmurray.com. By using our chatbot assistant, you acknowledge and agree to the data processing described below.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Chatbot Data Processing</h2>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
          The chatbot on this website is an automated interface. Any information, text, or files you provide during your interaction are processed by the chatbot system.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Purpose of Collection</h2>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
          The primary purpose of collecting and processing this information is to facilitate the scheduling of meetings with <strong>Bryan MacMurray</strong>. 
        </p>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
          Information provided to the chatbot may be used to create events and appointments in <strong>Google Calendar</strong>. By providing your details, you consent to this data being used for scheduling purposes.
        </p>
      </section>
      
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>First Party Data Collection</h2>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
          As part of the function of this website, we collect the following data:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', opacity: 0.9 }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Name</strong></li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Email Address</strong></li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Company Name</strong></li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Chat Logs</strong></li>
        </ul>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
          These details and chat logs are transmitted to the operators of this website for the purpose of analysis, quality assurance, and product improvement. 
        </p>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
          Please see our <a href="/terms" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Terms & Conditions</a> for more details on website usage.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Third-Party Services</h2>
        <p style={{ opacity: 0.9 }}>
          We use third-party services to enable analytics data. We do not provide absolute guarantees regarding the security or storage of data processed by these third-party systems. These third-party systems include the following:
        </p>
        <ul style={{ paddingLeft: '1.5rem', opacity: 0.9 }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Google:</strong> This website uses Google Analytics, Google Tag Manager, and Gemini LLM models</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Microsoft:</strong> Microsoft Clarity is used for UX analytics and session playback</li>
        </ul>
      </section>

      <div style={{ marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid var(--border)' }}>
        <a href="/" style={{ color: 'var(--accent)', fontWeight: 600 }}>← Back to Assistant</a>
      </div>
    </div>
  )
}
