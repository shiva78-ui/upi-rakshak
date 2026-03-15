import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans"
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: 'UPI Rakshak - AI-Powered Phishing & UPI Scam Detector',
  description: 'Protect yourself from phishing and UPI scams with AI-powered detection. Analyze suspicious SMS, WhatsApp messages, emails, and links instantly.',
  keywords: ['UPI scam detection', 'phishing detector', 'cyber security', 'India', 'fraud prevention', 'AI security'],
  authors: [{ name: 'UPI Rakshak Team' }],
  openGraph: {
    title: 'UPI Rakshak - AI-Powered Phishing & UPI Scam Detector',
    description: 'Protect yourself from phishing and UPI scams with AI-powered detection.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
