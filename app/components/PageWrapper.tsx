'use client'

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-page-enter will-change-transform">
      {children}
    </div>
  )
} 