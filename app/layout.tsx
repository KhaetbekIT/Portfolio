import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Khaetbek | Фронтенд-разработчик и ментор',
  description: 'Персональное портфолио Khaetbek — Фронтенд-разработчик, ментор и создатель продуктов. Специализация: React, TypeScript и современные веб-технологии.',
  generator: 'v0.app',
  keywords: ['Фронтенд-разработчик', 'React', 'TypeScript', 'Ментор', 'Веб-разработка', 'Khaetbek'],
  authors: [{ name: 'Khaetbek' }],
  creator: 'Khaetbek',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://khaetbek.dev',
    siteName: 'Khaetbek',
    title: 'Khaetbek | Фронтенд-разработчик и ментор',
    description: 'Персональное портфолио Khaetbek — Фронтенд-разработчик, ментор и создатель продуктов.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khaetbek | Фронтенд-разработчик и ментор',
    description: 'Персональное портфолио Khaetbek — Фронтенд-разработчик, ментор и создатель продуктов.',
    creator: '@khaetbek',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1419' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
