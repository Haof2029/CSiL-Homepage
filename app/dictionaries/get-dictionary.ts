import type { Locale } from '@/i18n.config'

const dictionaries = {
  en: () => import('./en.json').then(module => module.default),
  zh: () => import('./zh.json').then(module => module.default),
}

export const getDictionary = async (locale: Locale) => {
  // 确保 locale 是有效的语言代码
  if (!Object.keys(dictionaries).includes(locale)) {
    console.warn(`Invalid locale "${locale}", falling back to English`)
    return dictionaries.en()
  }

  try {
    return await dictionaries[locale]()
  } catch (error) {
    console.warn(`Error loading dictionary for locale "${locale}", falling back to English`)
    return dictionaries.en()
  }
} 