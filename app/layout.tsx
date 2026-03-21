import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rayan Halabi — Senior Security Engineer',
  description: 'Senior Infrastructure Security Engineer at Beyond ONE, Dubai. Building AI-powered products through Velvox.',
  keywords: ['Rayan Halabi', 'Beyond ONE', 'Cybersecurity Engineer', 'Cloud Security', 'Dubai', 'DevSecOps', 'Velvox'],
  authors: [{ name: 'Rayan Halabi' }],
  creator: 'Rayan Halabi',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rayanhalabi.com',
    title: 'Rayan Halabi — Senior Security Engineer',
    description: 'Senior Infrastructure Security Engineer at Beyond ONE, Dubai. Building AI-powered products through Velvox.',
    siteName: 'Rayan Halabi',
    images: [
      {
        url: '/rayan.jpg',
        width: 1200,
        height: 630,
        alt: 'Rayan Halabi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rayan Halabi — Senior Security Engineer',
    description: 'Senior Infrastructure Security Engineer at Beyond ONE, Dubai.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
