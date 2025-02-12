import { Metadata } from 'next'
import { getDictionary } from '@/app/dictionaries/get-dictionary'
import { i18n,Locale} from '@/app/i18n.config'
import PageWrapper from '@/app/components/PageWrapper'

export const revalidate = 3600 // 1小时重新验证

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)
  
  const content = (
    <div className="flex-1 flex flex-col items-center justify-center py-24 sm:py-32">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            {dict.home.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl text-center">
            {dict.home.subtitle}
          </p>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Section */}
          <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {dict.home.hero.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {dict.home.hero.content}
            </p>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col gap-8">
            {dict.home.hero.sections.map((section: { title: string; content: string }, index: number) => (
              <div 
                key={index}
                className="flex-1 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-600">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  return <PageWrapper>{content}</PageWrapper>
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(lang)
  
  return {
    title: dict.home.title,
    description: dict.meta?.description || dict.home.subtitle,
    keywords: dict.meta?.keywords || '',
    openGraph: {
      title: dict.home.title,
      description: dict.meta?.description || dict.home.subtitle,
      siteName: 'Company Name',
      locale: lang,
      type: 'website',
    },
  }
} 