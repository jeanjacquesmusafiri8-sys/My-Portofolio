import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Musafiri Jean Jacques — Développeur Full-Stack Junior & Marchine Learing',
  description:
    'Portfolio de Musafiri Jean Jacques, développeur Full-Stack Junior &   basé à Bukavu (RDC). Applications robustes, innovantes et optimisées low-data.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/IMG_5769@-1096110404.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/IMG_7888@-1221830784.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/PXL_20260607_145626617.PORTRAIT@2047215652.jpg',
        type: 'image/jpg+xml',
      },
    ],
    apple: '/IMG_5769@-1096110404.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`dark ${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
