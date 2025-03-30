
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#6366F1', // Indigo
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#0EA5E9', // Sky Blue
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#1E293B', // Darker muted for dark theme
					foreground: '#94A3B8' // Subtle gray text
				},
				accent: {
					DEFAULT: '#38BDF8', // Lighter blue accent
					foreground: '#FFFFFF'
				},
				popover: {
					DEFAULT: '#0F172A', // Dark popover background
					foreground: '#F8FAFC'
				},
				card: {
					DEFAULT: '#1E293B', // Dark card background
					foreground: '#F8FAFC'
				},
				success: {
					DEFAULT: '#10B981',
					foreground: '#FFFFFF'
				},
				warning: {
					DEFAULT: '#F59E0B',
					foreground: '#FFFFFF'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				"pulse-light": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.7" }
				},
				"shimmer": {
					"0%": { backgroundPosition: "-468px 0" },
					"100%": { backgroundPosition: "468px 0" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.3s ease-out",
				"pulse-light": "pulse-light 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				"shimmer": "shimmer 1.5s infinite linear"
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(to right, rgba(99, 102, 241, 0.1), rgba(14, 165, 233, 0.1))',
				'cta-gradient': 'linear-gradient(to right, #6366F1, #0EA5E9)',
				'card-gradient': 'linear-gradient(to bottom right, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9))'
			}
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
