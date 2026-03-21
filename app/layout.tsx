import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rayan Halabi — Cloud & Cybersecurity Engineer',
  description: 'Cybersecurity Engineer at AWS. Building with AI. Cloud security, incident response, DevSecOps, and AI entrepreneurship.',
  keywords: ['Rayan Halabi', 'AWS', 'Cybersecurity Engineer', 'Cloud Security', 'Dublin', 'DevSecOps', 'Velvox'],
  authors: [{ name: 'Rayan Halabi' }],
  creator: 'Rayan Halabi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rayanhalabi.com',
    title: 'Rayan Halabi — Cloud & Cybersecurity Engineer',
    description: 'Cybersecurity Engineer at AWS. Building with AI.',
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
    title: 'Rayan Halabi — Cloud & Cybersecurity Engineer',
    description: 'Cybersecurity Engineer at AWS. Building with AI.',
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
