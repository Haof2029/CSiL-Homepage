// 全局组件类型放在根类型目录
import type { Locale } from "@/app/i18n.config";

declare module "@/app/components/PageWrapper" {
  export interface PageWrapperProps {
    lang: Locale;
    children: React.ReactNode;
    className?: string;
  }
}

declare module '@/components/LanguageSwitcher' {
  export interface LanguageSwitcherProps {
    currentLang: Locale
  }
} 