'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import ClientLayout from './ClientLayout'
import NavItem from './NavItem'
import { Locale } from '@/app/i18n.config'
import { usePathname } from 'next/navigation'

interface RootLayoutClientProps {
  children: React.ReactNode
  lang: Locale
  dict: any
}

export default function RootLayoutClient({ children, lang, dict }: RootLayoutClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const pathname = usePathname()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const renderNav = () => (
    <nav className="flex flex-col md:flex-row md:items-center md:space-x-8">
      <NavItem
        name="about"
        label={dict.nav.about}
        mainHref="/about"
        items={[
          { href: '/about/story', title: dict.about.story.title },
          { href: '/about/leadership', title: dict.about.leadership.title },
          { href: '/about/mission', title: dict.about.mission.title }
        ]}
        isActive={activeDropdown === 'about'}
        onToggle={toggleDropdown}
        lang={lang}
      />
      <NavItem
        name="culture"
        label={dict.nav.culture}
        mainHref="/culture"
        items={[
          { href: '/culture/values', title: dict.culture.values.title },
          { href: '/culture/work-life', title: dict.culture.workLife.title },
          { href: '/culture/benefits', title: dict.culture.benefits.title }
        ]}
        isActive={activeDropdown === 'culture'}
        onToggle={toggleDropdown}
        lang={lang}
      />
      <NavItem
        name="pluralism"
        label={dict.nav.pluralism}
        mainHref="/pluralism"
        items={[
          { href: '/pluralism/diversity', title: dict.pluralism.diversity.title },
          { href: '/pluralism/inclusion', title: dict.pluralism.inclusion.title },
          { href: '/pluralism/community', title: dict.pluralism.community.title }
        ]}
        isActive={activeDropdown === 'pluralism'}
        onToggle={toggleDropdown}
        lang={lang}
      />

      {/* Join Button */}
      <div className="py-2 md:py-0">
        <Link 
          href={`/${lang}/join`}
          className="block w-full md:w-auto text-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {dict.nav.join}
        </Link>
      </div>
    </nav>
  )

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
        <div className="mx-auto">
          <div className="px-4 md:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link 
                  href={`/${lang}`} 
                  className="text-xl font-bold text-gray-900 no-underline hover:no-underline"
                >
                  CSiL.ai
                </Link>
              </div>
              <div className="hidden md:flex items-center flex-1">
                <div className="flex justify-end items-center pr-8 lg:pr-16 w-full">
                  {renderNav()}
                  <div className="ml-8 lg:ml-16 flex items-center">
                    <LanguageSwitcher currentLang={lang} />
                  </div>
                </div>
              </div>
              <div className="flex items-center md:hidden">
                <div className="mr-4">
                  <LanguageSwitcher currentLang={lang} />
                </div>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isMenuOpen ? (
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <div className="px-4 py-2">
                {renderNav()}
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="min-h-screen pt-16 bg-gray-50">
        <ClientLayout>
          {children}
        </ClientLayout>
      </main>
    </>
  )
} 