import { Metadata } from 'next'
import { getDictionary } from '@/app/dictionaries/get-dictionary'
import { Locale } from '@/i18n.config'
import PositionsButton from '@/components/PositionsButton'

export default async function Join({
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
              {dict.join.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl text-center">
              {dict.join.subtitle}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Team
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We're always looking for talented individuals who share our values and vision.
              </p>
              <PositionsButton />
            </div>

            <div className="flex-1 flex flex-col gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Join Us?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-500">✓</span>
                    <span className="text-gray-600">Innovative work environment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-500">✓</span>
                    <span className="text-gray-600">Professional growth opportunities</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-500">✓</span>
                    <span className="text-gray-600">Competitive compensation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-500">✓</span>
                    <span className="text-gray-600">Great team culture</span>
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

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(lang)
  
  return {
    title: dict.join.title,
    description: dict.join.subtitle,
    openGraph: {
      title: dict.join.title,
      description: dict.join.subtitle,
      siteName: 'Company Name',
      locale: lang,
      type: 'website',
    },
  }
} 