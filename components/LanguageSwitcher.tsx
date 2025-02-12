'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n,Locale} from '@/app/i18n.config'

interface LanguageSwitcherProps {
  currentLang: Locale
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="relative group">
      <button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-800 border-2 border-gray-800 hover:bg-gray-100 transition-all duration-200">
        <span>{currentLang === 'en' ? 'EN' : '中'}</span>
      </button>
      <div className="absolute right-0 mt-2 w-20 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible md:group-hover:block transition-all duration-200">
        {i18n.locales.map(locale => (
          <Link
            key={locale}
            href={redirectedPathName(locale)}
            className={`block py-2.5 text-sm text-center ${locale === currentLang ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
          >
            {locale === 'en' ? 'English' : '中文'}
          </Link>
        ))}
      </div>
    </div>
  )
} 