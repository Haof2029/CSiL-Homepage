import ProductClientComponent from '@/components/ProductClientComponent'

export const dynamicParams = true // 启用动态参数

export async function generateStaticParams() {
  return fetchTopProducts().map(product => ({
    id: product.id.toString(),
    lang: 'en' // 预生成英文版本
  }))
}

export async function generateMetadata() { /* ... */ }

export default async function ProductPage({
  params: { id, lang }
}: {
  params: { id: string; lang: Locale }
}) {
  const product = await fetchProduct(id)
  const dict = await getDictionary(lang)
  
  return (
    <PageWrapper>
      <h1>{product.name}</h1>
      <p>{dict.product.description}</p>
      {/* ... */}
      <ProductClientComponent product={product} />
    </PageWrapper>
  )
} 