'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Locale } from '@/app/i18n.config'
import { NavItemConfig } from '@/types'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

interface NavItemProps extends NavItemConfig {
  lang: Locale
  dict: any
  isActive: boolean
  onToggle: (name: string) => void
}

const DROPDOWN_STYLES = cn(
  'md:absolute left-0 mt-2 w-48 py-2 bg-white rounded-lg border',
  'origin-top shadow-lg',
  'animate-dropdown-open'
)

const DROPDOWN_VISIBILITY = (isActive: boolean) =>
  cn(
    isActive ? 'block' : 'hidden',
    'md:hidden md:group-hover:block',
    'md:group-hover:animate-fade-in-up'
  )

export function NavItem({
  name,
  mainHref,
  subItems,
  lang,
  dict,
  isActive,
  onToggle
}: NavItemProps) {
  const router = useRouter()
  const pathname = usePathname()
  const isActiveRoute = pathname.startsWith(`/${lang}${mainHref}`)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onToggle(name)
      e.preventDefault()
    }
    if (e.key === 'ArrowDown' && !isActive) {
      onToggle(name)
    }
    if (e.key === 'Escape' && isActive) {
      onToggle(name)
    }
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    
    onToggle(name)
    
    router.push(href)
  }

  return (
    <div className="relative py-2 md:py-0 group">
      {isActiveRoute && (
        <div className="hidden md:block absolute -bottom-1 left-0 right-0 h-1 bg-blue-600 rounded-full transform transition-all duration-300" />
      )}
      <div className="flex items-center">
        <Link
          href={`/${lang}${mainHref}`}
          className={cn(
            'text-sm font-medium mr-2 transition-colors duration-200 no-underline',
            isActiveRoute 
              ? 'text-blue-600 font-semibold' 
              : 'text-gray-600 hover:text-blue-600'
          )}
        >
          {dict.nav[name]}
        </Link>
        <button
          onClick={() => onToggle(name)}
          onKeyDown={handleKeyDown}
          className="p-1 outline-none transition-transform duration-200 hover:scale-110 focus:ring-2 focus:ring-blue-500 rounded"
          aria-label={`${dict.nav[name]} 菜单，按回车键展开`}
          aria-expanded={isActive}
          aria-controls={`dropdown-${name}`}
        >
          <ChevronDown className="w-4 h-4 transition-transform duration-300 md:group-hover:rotate-180" />
        </button>
      </div>
      <div className={cn(DROPDOWN_STYLES, DROPDOWN_VISIBILITY(isActive))}>
        <div className="hidden md:block absolute -top-2 left-0 right-0 h-2" />
        <div className="relative">
          {subItems.map((item) => (
            <Link
              key={item.href}
              href={`/${lang}${item.href}`}
              onClick={handleLinkClick}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 no-underline"
            >
              {getNestedValue(dict, item.titleKey)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// 辅助函数获取嵌套字典值
function getNestedValue(obj: any, path: string) {
  return path.split('.').reduce((acc, part) => acc?.[part], obj)
} 