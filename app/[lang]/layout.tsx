import type { Metadata, Viewport } from 'next'
import '../globals.css'
import { i18n,Locale} from '@/app/i18n.config'
import RootLayoutClient from '../components/RootLayoutClient'
import { getDictionary } from '../dictionaries/get-dictionary'

// 基础元数据
export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  
  // 网站标题
  title: {
    template: '%s | CSiL',
    default: 'CSiL',
  },
  
  // 网站描述
  description: 'Building the future through innovation and collaboration',
  
  // 关键词
  keywords: ['technology', 'innovation', 'collaboration'],
  
  // Open Graph 数据，用于社交媒体分享
  openGraph: {
    title: 'CSiL',
    description: 'Building the future through innovation and collaboration',
    url: 'https://your-domain.com',
    siteName: 'CSiL',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter 卡片数据
  twitter: {
    card: 'summary_large_image',
    title: 'CSiL',
    description: 'Building the future through innovation and collaboration',
    images: ['https://your-domain.com/twitter-image.jpg'],
  },
  
  alternates: {
    languages: {
      'en-US': '/en',
      'zh-CN': '/zh',
    }
  },
  
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ]
  },
}

// 视口配置
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <html lang={params.lang}>
      <body>
        <RootLayoutClient lang={params.lang as Locale} dict={dict}>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  )
} 