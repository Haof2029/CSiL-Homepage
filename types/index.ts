export interface NavItemConfig {
  name: string
  mainHref: string
  subItems: {
    href: string
    titleKey: string
  }[]
} 