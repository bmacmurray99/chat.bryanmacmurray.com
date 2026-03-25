'use client'

import React from 'react'
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
    <div className="home-page-container">
      <SchemaLD data={schemaData} />
      <section className="fade-in hero-section">
        <h1 className="hero-heading">
          About Bryan MacMurray
        </h1>
        <p className="hero-text">
          Technical SEO and AI developer with experience in automating workflows, prompt engineering and web development.
        </p>
      </section>

      <Chatbot />

      <section className="fade-in additional-content">
        <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Get in touch</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', textAlign: 'left' }}>
          <div className="card">
            <h3>Resume</h3>
            <p style={{ margin: '1rem 0', opacity: 0.7 }}>View my professional background, skills, and experience.</p>
            <a href="/resume" style={{ color: 'var(--accent)', fontWeight: 600 }}>View Resume →</a>
          </div>
          <div className="card">
            <h3>Schedule Meeting</h3>
            <p style={{ margin: '1rem 0', opacity: 0.7 }}>Book a time to chat about collaboration or technical projects.</p>
            <div dangerouslySetInnerHTML={{ __html: `
              <!-- Google Calendar Appointment Scheduling begin -->
              <div id="permanent-calendar-card-target"></div>
              <script>
              (function() {
                var loadBtn = function() {
                  var target = document.getElementById('permanent-calendar-card-target');
                  if (window.calendar && window.calendar.schedulingButton && target) {
                    if (target.innerHTML === '') {
                      window.calendar.schedulingButton.load({
                        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1SGRFwk0XvGBbjqTSEtyayCHKJenkGu4ipaHsDBMbGjKtIrlhTxgs_WcgIgpWjd5TW3GDYMRLu?gv=true',
                        color: '#039BE5',
                        label: 'Book an appointment',
                        target,
                      });
                    }
                  } else {
                    setTimeout(loadBtn, 200);
                  }
                };
                loadBtn();
              })();
              </script>
              <!-- end Google Calendar Appointment Scheduling -->
            ` }} />
          </div>
        </div>

        <div className="card" style={{ marginTop: '5rem', textAlign: 'center' }}>
          <h3>How does this chatbot work?</h3>
          <p style={{ margin: '1rem 0', opacity: 0.7 }}>This chatbot was built with n8n, Gemini using RAG. The frontend is created using NextJS.</p>
          <a href="/chatbot-details" style={{ color: 'var(--accent)', fontWeight: 600 }}>Making The Chatbot →</a>
        </div>
      </section>
    </div>
  )
}
