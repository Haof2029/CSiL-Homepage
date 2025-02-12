'use client'

import Link from 'next/link'
import { Locale } from '@/i18n.config'

const DROPDOWN_STYLES = `
  md:absolute left-0 mt-2 w-48 py-2 bg-white rounded-lg border border-gray-100
  transition-all duration-300 ease-in-out
  transform md:origin-top
  md:shadow-lg
`

const DROPDOWN_VISIBILITY = (isActive: boolean) => `
  ${isActive ? 'block' : 'hidden'}
  md:hidden md:group-hover:block
  md:group-hover:opacity-100 md:group-hover:translate-y-0
  md:opacity-0 md:translate-y-[-10px]
  md:group-hover:delay-100
`

interface NavItemProps {
  name: string
  label: string
  mainHref: string
  items: { href: string; title: string }[]
  isActive: boolean
  onToggle: (name: string) => void
  lang: Locale
}

export default function NavItem({ name, label, mainHref, items, isActive, onToggle, lang }: NavItemProps) {
  return (
    <div className="relative py-2 md:py-0 group">
      <div className="hidden md:block absolute -top-2 left-0 right-0 h-2" />
      <div className="flex items-center">
        <Link
          href={`/${lang}${mainHref}`}
          className="text-sm font-medium text-gray-800 hover:text-blue-600 mr-2"
        >
          {label}
        </Link>
        <button
          onClick={() => onToggle(name)}
          className="p-1"
        >
          <svg className="w-4 h-4 md:group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <div className={`${DROPDOWN_STYLES} ${DROPDOWN_VISIBILITY(isActive)}`}>
        <div className="hidden md:block absolute -top-2 left-0 right-0 h-2" />
        <div className="relative">
          {items.map(item => (
            <Link
              key={item.href}
              href={`/${lang}${item.href}`}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 