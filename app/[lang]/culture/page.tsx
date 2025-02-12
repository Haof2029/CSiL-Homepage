import { Metadata } from 'next'
import { getDictionary } from '@/app/dictionaries/get-dictionary'
import { Locale } from '@/i18n.config'

export default async function Culture({
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
              {dict.culture.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl text-center">
              {dict.culture.subtitle}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 flex flex-col gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {dict.culture.values.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {dict.culture.values.subtitle}
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {dict.culture.workLife.title}
                </h3>
                <p className="text-gray-600">
                  {dict.culture.workLife.subtitle}
                </p>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {dict.culture.benefits.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {dict.culture.benefits.subtitle}
                </p>
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
    title: dict.culture.title,
    description: dict.culture.subtitle,
    openGraph: {
      title: dict.culture.title,
      description: dict.culture.subtitle,
      siteName: 'Company Name',
      locale: lang,
      type: 'website',
    },
  }
}