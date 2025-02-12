import { Metadata } from 'next'
import { getDictionary } from '@/app/dictionaries/get-dictionary'
import { Locale } from '@/i18n.config'
import PageWrapper from '@/app/components/PageWrapper'
import Link from 'next/link'

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(lang)
  
  return {
    title: dict.about.title,
    description: dict.about.subtitle,
  }
}

export default async function About({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col items-center justify-center py-24 sm:py-32">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6 text-center">
              {dict.about.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl text-center">
              {dict.about.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Story Section */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {dict.about.story.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {dict.about.story.subtitle}
              </p>
              <Link 
                href={`/${lang}/about/story`}
                className="text-blue-600 hover:text-blue-700"
              >
                Learn more →
              </Link>
            </div>

            {/* Leadership Section */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {dict.about.leadership.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {dict.about.leadership.subtitle}
              </p>
              <Link 
                href={`/${lang}/about/leadership`}
                className="text-blue-600 hover:text-blue-700"
              >
                Learn more →
              </Link>
            </div>

            {/* Mission Section */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {dict.about.mission.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {dict.about.mission.subtitle}
              </p>
              <Link 
                href={`/${lang}/about/mission`}
                className="text-blue-600 hover:text-blue-700"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 