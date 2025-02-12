import { Metadata } from 'next'
import { getDictionary } from '@/app/dictionaries/get-dictionary'
import { Locale } from '@/i18n.config'

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(lang)
  
  return {
    title: dict.about.leadership.title,
    description: dict.about.leadership.subtitle,
    openGraph: {
      title: dict.about.leadership.title,
      description: dict.about.leadership.subtitle,
      siteName: 'Company Name',
      locale: lang,
      type: 'website',
    },
  }
}

export default async function Leadership({
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
              {dict.about.leadership.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl text-center">
              {dict.about.leadership.subtitle}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Executive Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
                  <h3 className="text-lg font-semibold text-gray-900">CEO</h3>
                  <p className="text-gray-600 text-center">Leading our vision and strategy</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
                  <h3 className="text-lg font-semibold text-gray-900">CTO</h3>
                  <p className="text-gray-600 text-center">Driving technological innovation</p>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Leadership Principles
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-500">✓</span>
                    <span className="text-gray-600">Innovation-driven mindset</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-500">✓</span>
                    <span className="text-gray-600">Inclusive decision-making</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-500">✓</span>
                    <span className="text-gray-600">Transparent communication</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 