import { Metadata } from 'next'
import { getDictionary } from '@/app/dictionaries/get-dictionary'
import { Locale } from '@/i18n.config'

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(lang)
  
  return {
    title: dict.about.mission.title,
    description: dict.about.mission.subtitle,
    openGraph: {
      title: dict.about.mission.title,
      description: dict.about.mission.subtitle,
      siteName: 'Company Name',
      locale: lang,
      type: 'website',
    },
  }
}

export default async function Mission({
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
              {dict.about.mission.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl text-center">
              {dict.about.mission.subtitle}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Building a future where technology empowers and connects people in meaningful ways.
              </p>
            </div>

            <div className="flex-1 flex flex-col gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Core Values
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 h-8 w-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      💡
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Innovation</h4>
                      <p className="text-sm text-gray-600">Pushing boundaries</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 h-8 w-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      🤝
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Collaboration</h4>
                      <p className="text-sm text-gray-600">Working together</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 h-8 w-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      ⚡
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Impact</h4>
                      <p className="text-sm text-gray-600">Making a difference</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 h-8 w-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      🎯
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Excellence</h4>
                      <p className="text-sm text-gray-600">Pursuing quality</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 