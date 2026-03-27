import SchemaLD from '@/components/SchemaLD'

export default function TermsAndConditions() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Terms and Conditions | Bryan MacMurray',
    'description': 'Terms and conditions for using Bryan MacMurray\'s AI Assistant and SMS services.'
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 0' }}>
      <SchemaLD data={schemaData} />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Terms and Conditions</h1>
      
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>SMS Program Details</h2>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
          <strong>Program Name:</strong> Bryan MacMurray AI Assistant
        </p>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
          <strong>Program Description:</strong> This program allows users to interact with Bryan MacMurray's AI Assistant to ask questions about his professional experience, resume, and to facilitate meeting scheduling. Users who provide their phone number may receive automated SMS/MMS messages regarding their inquiries or scheduled appointments.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>SMS Service Terms</h2>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', opacity: 0.9 }}>
          <li style={{ marginBottom: '1rem' }}>
            <strong>Message Frequency:</strong> Message frequency varies based on your interaction with the assistant and scheduling needs.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>Message & Data Rates:</strong> Standard message and data rates may apply from your wireless carrier.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>Opt-Out Instructions:</strong> You can cancel the SMS service at any time. Just text <strong>STOP</strong> to the number you received the message from. After you send the SMS message <strong>STOP</strong> to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>Support Instructions:</strong> If you are experiencing issues with the messaging program you can reply with the keyword <strong>HELP</strong> for more assistance, or you can get help directly at <a href="mailto:bryan@contextaware.xyz" style={{ color: 'var(--accent)' }}>bryan@contextaware.xyz</a>.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Data Use & Privacy</h2>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
          Your phone number and conversation data are used solely to provide the requested AI Assistant services. We do not sell or share your mobile information with third parties for marketing/promotional purposes.
        </p>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
          Please review our <a href="/privacy" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Privacy Policy</a> for more details on how we handle your data.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Carrier Liability</h2>
        <p style={{ opacity: 0.9 }}>
          Carriers are not liable for delayed or undelivered messages.
        </p>
      </section>

      <div style={{ marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid var(--border)' }}>
        <a href="/" style={{ color: 'var(--accent)', fontWeight: 600 }}>← Back to Assistant</a>
      </div>
    </div>
  )
}
