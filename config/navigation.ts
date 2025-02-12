import { NavItemConfig } from '@/types'

export const NAV_ITEMS: NavItemConfig[] = [
  {
    name: 'about',
    mainHref: '/about',
    subItems: [
      { href: '/about/story', titleKey: 'about.story.title' },
      { href: '/about/leadership', titleKey: 'about.leadership.title' },
      { href: '/about/mission', titleKey: 'about.mission.title' }
    ]
  },
  {
    name: 'culture',
    mainHref: '/culture',
    subItems: [
      { href: '/culture/values', titleKey: 'culture.values.title' },
      { href: '/culture/work-life', titleKey: 'culture.workLife.title' },
      { href: '/culture/benefits', titleKey: 'culture.benefits.title' }
    ]
  },
  {
    name: 'pluralism',
    mainHref: '/pluralism',
    subItems: [
      { href: '/pluralism/diversity', titleKey: 'pluralism.diversity.title' },
      { href: '/pluralism/inclusion', titleKey: 'pluralism.inclusion.title' },
      { href: '/pluralism/community', titleKey: 'pluralism.community.title' }
    ]
  }
] 