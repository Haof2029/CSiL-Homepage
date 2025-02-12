import { getDictionary } from '@/app/dictionaries/get-dictionary'
import { i18n } from '@/app/i18n.config'

export default async function WorkLife({
  params: { lang }
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang as 'en' | 'zh')

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {dict.culture.workLife.title}
          </h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {dict.culture.workLife.subtitle}
          </h2>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata() { /* ... */ } 