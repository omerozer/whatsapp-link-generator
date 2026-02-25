import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'WhatsApp Link Oluşturucu',
  description:
    'Telefon numarası ile tıklanabilir WhatsApp sohbet başlatma linki ve siteye eklenebilir buton kodu oluşturun.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="tr">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
