import { Metadata } from 'next'
import { getDictionary } from '@/app/dictionaries/get-dictionary'
import { Locale } from '@/i18n.config'
import PageWrapper from '@/app/components/PageWrapper'

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(lang)
  
  return {
    title: dict.culture.values.title,
    description: dict.culture.values.subtitle,
    openGraph: {
      title: dict.culture.values.title,
      description: dict.culture.values.subtitle,
      siteName: 'Company Name',
      locale: lang,
      type: 'website',
    },
  }
}

export default async function Values({
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
            {dict.culture.values.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl text-center">
            {dict.culture.values.subtitle}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">💡</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Pushing boundaries and embracing new ideas</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">Working together to achieve more</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our Principles
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    ⭐
                  </div>
                  <div>
                    <p className="text-gray-600">Excellence in everything we do</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    🌱
                  </div>
                  <div>
                    <p className="text-gray-600">Continuous growth and learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <PageWrapper>
      {content}
    </PageWrapper>
  )
}