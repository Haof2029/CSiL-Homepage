import { Metadata } from 'next'
import { getDictionary } from '@/app/dictionaries/get-dictionary'
import { Locale } from '@/i18n.config'
import PageWrapper from '@/app/components/PageWrapper'

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(lang)
  
  return {
    title: dict.culture.benefits.title,
    description: dict.culture.benefits.subtitle,
  }
}

export default async function BenefitsPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)

  return (
    <PageWrapper>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col items-center justify-center py-24 sm:py-32">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6 text-center">
                {dict.culture.benefits.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl text-center">
                {dict.culture.benefits.subtitle}
              </p>
            </div>
            
            {/* 添加示例内容 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">健康保险</h3>
                <p className="text-gray-600">全面的医疗保险计划，覆盖员工及家属</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">弹性工作</h3>
                <p className="text-gray-600">支持远程办公和弹性工作时间安排</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
} 