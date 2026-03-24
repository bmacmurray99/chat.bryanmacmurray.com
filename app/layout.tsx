import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bryan MacMurray | Chat With My Resume!',
  description: 'Chat with Bryan MacMurray\'s resume and schedule an appointment with him.',
  verification: {
    google: 'E8ngRUSWesKgEfcWMJogMUzV6Yx8F3cAxDGv72VymjU',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
        <script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
      </head>
      <body className={inter.className}>
        <Providers>
          <header className="header">
            <div className="container nav">
              <a href="/" className="logo">Bryan MacMurray</a>
              <nav>
                <a href="/resume" style={{ fontSize: '0.9rem' }}>Resume</a>
              </nav>
            </div>
          </header>
          <main className="container">
            {children}
          </main>
          <footer className="container" style={{ marginTop: '5rem', padding: '2rem 0', borderTop: '1px solid var(--border)', textAlign: 'center', opacity: 0.6 }}>
            <p>&copy; 2026 Bryan MacMurray</p>
            <nav style={{ marginTop: '1rem' }}>
              <a href="/privacy" style={{ fontSize: '0.8rem', textDecoration: 'underline' }}>Privacy Policy</a>
            </nav>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
