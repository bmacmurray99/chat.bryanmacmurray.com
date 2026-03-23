'use client'

import SchemaLD from '@/components/SchemaLD'
import Chatbot from '@/components/Chatbot'

export default function Page() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Bryan MacMurray',
    'url': 'https://bryanmacmurray.com',
    'description': 'Software Developer and Specialist in Agentic Workflows.',
    'jobTitle': 'Software Developer'
  }

  return (
    <div>
      <SchemaLD data={schemaData} />
      <section className="fade-in" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', background: 'linear-gradient(to right, var(--accent), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          About Bryan MacMurray
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '700px', margin: '0 auto' }}>
          I am a developer specializing in AEO/GEO, agentic workflows and Model Context Protocols. 
          Use the assistant below to learn more about my work or schedule a meeting.
        </p>
      </section>

      <Chatbot />

      <section style={{ marginTop: '5rem', textAlign: 'center' }} className="fade-in">
        <h2 style={{ marginBottom: '2rem' }}>Get in touch</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', textAlign: 'left' }}>
          <div className="card">
            <h3>Resume</h3>
            <p style={{ margin: '1rem 0', opacity: 0.7 }}>View my professional background, skills, and experience.</p>
            <a href="/resume" style={{ color: 'var(--accent)', fontWeight: 600 }}>View Resume →</a>
          </div>
          <div className="card">
            <h3>Schedule Meeting</h3>
            <p style={{ margin: '1rem 0', opacity: 0.7 }}>Book a time to chat about collaboration or technical projects.</p>
            <a 
              href="https://calendar.app.google/4RPKuwADFN3LxK6U7"
              target="_blank"
              rel="noopener noreferrer"
              className="button" 
              style={{ width: '100%', textAlign: 'center' }}
            >
              Book via Google Calendar
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
