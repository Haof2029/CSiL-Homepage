import './globals.css'
import type { Metadata } from 'next'
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import LanguageSwitcher from '@/components/LanguageSwitcher'

export const metadata: Metadata = {
  title: 'Company',
  description: 'Building the future through innovation and collaboration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 