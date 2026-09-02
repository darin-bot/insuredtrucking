import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1e3a8a',
          dark: '#1e293b',
          light: '#3b82f6',
        },
        steel: {
          DEFAULT: '#64748b',
          light: '#94a3b8',
          dark: '#475569',
        },
        orange: {
          DEFAULT: '#ea580c',
        },
      },
    },
  },
  plugins: [],
}
export default config
