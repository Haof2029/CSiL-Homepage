import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'sans-serif'
        ]
      },
      spacing: {
        page: 'var(--page-padding)',
        switcher: 'var(--switcher-gap, 0.5rem)'
      }
    },
  },
  plugins: [],
} satisfies Config;

export default config;
