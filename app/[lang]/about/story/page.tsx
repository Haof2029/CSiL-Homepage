import { Metadata } from 'next'
import { getDictionary } from '@/app/dictionaries/get-dictionary'
import type { Locale } from '@i18n.config'
import PageWrapper from '@/app/components/PageWrapper'

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(lang)
  return {
    title: dict.about.story.title,
    description: dict.about.story.subtitle,
    openGraph: {
      title: dict.about.story.title,
      description: dict.about.story.subtitle,
      siteName: 'Company Name',
      locale: lang,
      type: 'website',
    },
  }
}

export default async function Story({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  const content = (
    <div className="flex-1 flex flex-col items-center justify-center py-24 sm:py-32">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6 text-center">
            {dict.about.story.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl text-center">
            {dict.about.story.subtitle}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {dict.about.story.beginning.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {dict.about.story.beginning.content}
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our Journey
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    🚀
                  </div>
                  <div>
                    <p className="text-gray-600">Founded with a vision to transform the industry</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    🌱
                  </div>
                  <div>
                    <p className="text-gray-600">Grew from a small team to a global company</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    🎯
                  </div>
                  <div>
                    <p className="text-gray-600">Continuously innovating and expanding our impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return <PageWrapper>{content}</PageWrapper>
} 