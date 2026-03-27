import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/Providers'
import Header from '@/components/Header'

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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  return (
    <html lang="en">
      <head>
        {gtmId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
        )}
        <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
        <script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
      </head>
      <body className={inter.className}>
        {gtmId && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        )}
        <Providers>
          <Header />
          <main className="container">
            {children}
          </main>
          <footer className="container" style={{ marginTop: '5rem', padding: '2rem 0', borderTop: '1px solid var(--border)', textAlign: 'center', opacity: 0.6 }}>
            <p>&copy; 2026 Bryan MacMurray</p>
            <nav style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <a href="/privacy" style={{ fontSize: '0.8rem', textDecoration: 'underline' }}>Privacy Policy</a>
              <a href="/terms" style={{ fontSize: '0.8rem', textDecoration: 'underline' }}>Terms & Conditions</a>
            </nav>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
