/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					navy: '#0B1F3A',
					blue: '#123B6D',
					steel: '#334155',
					slate: '#0F172A',
					mist: '#E2E8F0',
					safety: '#F59E0B',
					signal: '#38BDF8',
					white: '#FFFFFF',
				},
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			boxShadow: {
				freight: '0 24px 80px -40px rgb(15 23 42 / 0.65)',
			},
		},
	},
};