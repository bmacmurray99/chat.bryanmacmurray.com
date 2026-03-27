import SchemaLD from '@/components/SchemaLD'

export default function ChatbotDetails() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'About This Chatbot | Bryan MacMurray',
    'description': 'Technical details and data processing information for Bryan MacMurray\'s AI Assistant.'
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 0' }}>
      <SchemaLD data={schemaData} />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>About This Chatbot</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <p style={{ marginBottom: '1rem', fontSize: '1.1rem', opacity: 0.9 }}>
          This chatbot is a sophisticated, interactive interface designed to provide information about Bryan MacMurray's professional background, skills, and experience.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Architecture & Technology</h2>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
          The application follows a decoupled architecture for high performance and security:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', opacity: 0.9 }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Frontend:</strong> A modern, static web application built with Next.js 14.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Automation Backend:</strong> A specialized n8n workflow engine that handles logic, AI interactions, and data processing.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Data Management:</strong> Secure data integrations for retention and project tracking.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Technical Implementation</h2>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
          The chatbot serves as an interactive bridge between users and the site's content, utilizing real-time intent analysis and response generation handled by backend AI agents.
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', opacity: 0.9 }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Rendering:</strong> Full support for Markdown and responsive media content.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Interface:</strong> Custom-built React components designed for low-latency feedback and a seamless user experience.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Security & Privacy</h2>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
          We prioritize the security and privacy of your interactions:
        </p>
        <ul style={{ paddingLeft: '1.5rem', opacity: 0.9 }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Encrypted Communication:</strong> All data transfer is conducted over secure HTTPS connections.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Gated Access:</strong> Lead capture is handled through a secure validation process before data is committed to persistent storage.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Static Security:</strong> The static nature of the frontend minimizes the attack surface.</li>
        </ul>
      </section>

      <div style={{ marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid var(--border)' }}>
        <a href="/" style={{ color: 'var(--accent)', fontWeight: 600 }}>← Back to Assistant</a>
      </div>
    </div>
  )
}
