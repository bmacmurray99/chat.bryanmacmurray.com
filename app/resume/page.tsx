import SchemaLD from '@/components/SchemaLD'

export default function ResumePage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Resume | Bryan MacMurray',
    'description': 'Professional resume and background of Bryan MacMurray, SEO, web developer and AI Integration Specialist.'
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 0', color: '#e0e0e0' }}>
      <SchemaLD data={schemaData} />
      
      <header style={{ textAlign: 'center', marginBottom: '3rem', borderBottom: '1px solid var(--border)', paddingBottom: '2rem' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, var(--accent), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Bryan MacMurray
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', opacity: 0.8 }}>
          <span>(978)-654-3722</span>
          <span>|</span>
          <a href="mailto:b.macmur@gmail.com" style={{ color: 'var(--accent)' }}>b.macmur@gmail.com</a>
          <span>|</span>
          <a href="https://www.linkedin.com/in/bryan-mac-murray/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>LinkedIn Profile</a>
          <span>|</span>
          <a href="https://bryanmacmurray.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>bryanmacmurray.com</a>
        </div>
      </header>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent)', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Skills</h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem', opacity: 0.9 }}>
          n8n • Python • Prompt Engineering • OpenAI API / LLMs (ChatGPT, Gemini, Claude) • Agile Development (Azure DevOps) • JavaScript / NodeJS • MCP (Model Context Protocol) • API & Webhook Integration • Healthcare Workflows • SQL / BigQuery
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent)', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Relevant Experience</h2>
        
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#fff' }}>AI Integration, Agent Development And GEO</h3>
          <ul style={{ paddingLeft: '1.5rem', opacity: 0.9, lineHeight: '1.7' }}>
            <li style={{ marginBottom: '0.75rem' }}>Developed and deployed AI-powered SEO tools using Python and API libraries at Overdrive Interactive, automating complex content analysis and deliverable generation.</li>
            <li style={{ marginBottom: '0.75rem' }}>Promoted best-practices for web content accessiblity for LLMs and AI Agents to maximize citations, brand mentions and conversion opportunities.  </li>
            <li style={{ marginBottom: '0.75rem' }}>Engineered task-specific LLM prompts for text classification and summarization, streamlining high-volume data processing tasks.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#fff' }}>Workflow Automation & Python Development</h3>
          <ul style={{ paddingLeft: '1.5rem', opacity: 0.9, lineHeight: '1.7' }}>
            <li style={{ marginBottom: '0.75rem' }}>Effectively leveraged Python and BigQuery to migrate a decade's worth of Google Analytics data from 10 properties to BigQuery at Wellstar.</li>
            <li style={{ marginBottom: '0.75rem' }}>Developed a custom crawling and auditing platform using Screaming Frog API, Python, and KNIME for large-scale enterprise site analysis (1M+ URLs).</li>
            <li style={{ marginBottom: '0.75rem' }}>Automated standard document deliverables (XML sitemaps, audit templates) using NodeJS and PowerShell, significantly reducing manual overhead.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#fff' }}>Agile Delivery & Healthcare Space</h3>
          <ul style={{ paddingLeft: '1.5rem', opacity: 0.9, lineHeight: '1.7' }}>
            <li style={{ marginBottom: '0.75rem' }}>Delivered production-ready features and bug fixes in an Agile development environment at Wellstar Health System, utilizing Azure DevOps for sprint planning and tracking.</li>
            <li style={{ marginBottom: '0.75rem' }}>Partnered with product and engineering leads to define technical requirements and translate business needs into functional AI-enhanced features.</li>
            <li style={{ marginBottom: '0.75rem' }}>Navigated complex healthcare data environments, ensuring all automation and AI implementations met rigorous institutional standards for accuracy and reliability.</li>
            <li style={{ marginBottom: '0.75rem' }}>Communicated technical designs and project limitations clearly to both technical and non-technical stakeholders to ensure project alignment.</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent)', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Work History</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.9 }}>
          <p><strong>SEO Analyst (Agile/Data Ops Focus)</strong> | Wellstar Health System | 06/2023 – 08/2025</p>
          <p><strong>Senior SEO Analyst (AI Tool Development)</strong> | Overdrive Interactive | 10/2022 – 06/2023</p>
          <p><strong>SEO Manager</strong> | Genuine | 08/2021 – 03/2022</p>
          <p><strong>Senior SEO Strategist</strong> | Charles River Interactive | 04/2019 – 07/2021</p>
          <p><strong>SEO Specialist</strong> | ESM Digital | 03/2018 – 02/2019</p>
        </div>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent)', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Certifications</h2>
          <ul style={{ paddingLeft: '1.2rem', opacity: 0.9, lineHeight: '1.8' }}>
            <li>Google AI Essentials | May 2025</li>
            <li>Prompt Essentials In Vertex AI | June 2025</li>
            <li>Google Analytics Certification | Feb 2026</li>
          </ul>
        </section>

      </div>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent)', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Education</h2>
        <p style={{ opacity: 0.9 }}>
          <strong>University of Massachusetts</strong>, Lowell, MA — Bachelor's of Liberal Arts
        </p>
      </section>

      <footer style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
        <a href="/" className="button">Back to Assistant</a>
      </footer>
    </div>
  )
}
