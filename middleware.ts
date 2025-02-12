import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './app/i18n.config'

// 扩展静态文件匹配规则
const PUBLIC_FILE = /\.(?:ico|png|svg|jpg|jpeg|gif|webp|mp4|webm|woff|woff2|eot|ttf|otf)$/

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // 排除静态文件和特定路径
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/_next/') ||
    pathname.includes('/api/') ||
    pathname === '/favicon.ico' ||
    pathname === '/icon.svg' ||
    pathname === '/apple-touch-icon.png'
  ) {
    return NextResponse.next()
  }

  // 检查路径是否缺少语言前缀
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = request.headers.get('accept-language')?.split(',')[0].split('-')[0] || i18n.defaultLocale
    const finalLocale = i18n.locales.includes(locale as any) ? locale : i18n.defaultLocale
    
    return NextResponse.redirect(
      new URL(`/${finalLocale}${pathname === '/' ? '' : pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    // 排除所有静态文件和API路由
    '/((?!api|_next/static|_next/image|assets|favicon.ico|icon.svg|apple-touch-icon.png|manifest.json).*)',
  ],
} 