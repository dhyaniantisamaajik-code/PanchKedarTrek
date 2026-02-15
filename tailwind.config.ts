import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Himalayan-inspired deep mountain blues */
        primary: {
          50: "#e8f3fc",
          100: "#c7e3f5",
          200: "#9eccf0",
          300: "#7aafdb",
          400: "#5a8dd8",
          500: "#3b6fb9",
          600: "#2a5a99",
          700: "#1a3456",
          800: "#0f1b3a",
          900: "#0a1428",
          950: "#050a15",
        },
        /* Golden hour accent */
        accent: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          warm: "#f4b860",
          warm_dark: "#d49620",
          warm_light: "#fac795",
        },
        /* Status colors */
        success: "#10b981",
        warning: "#f59e0b",
        danger: "#ef4444",
        /* Neutral grays */
        neutral: {
          50: "#fafafa",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#0a0f18",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.4" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.6" }],
        lg: ["1.125rem", { lineHeight: "1.7" }],
        xl: ["1.25rem", { lineHeight: "1.7" }],
        "2xl": ["1.5rem", { lineHeight: "1.5" }],
        "3xl": ["1.875rem", { lineHeight: "1.4" }],
        "4xl": ["2.5rem", { lineHeight: "1.3" }],
        "5xl": ["3.5rem", { lineHeight: "1.2" }],
        "6xl": ["4.5rem", { lineHeight: "1.1" }],
      },
      spacing: {
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
      },
      borderRadius: {
        none: "0",
        sm: "4px",
        DEFAULT: "8px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        full: "9999px",
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in-out",
        fadeInUp: "fadeInUp 0.8s ease-out",
        slideUp: "slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        slideDown: "slideDown 0.6s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1.5s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        sm: "0 2px 8px rgba(0, 0, 0, 0.1)",
        DEFAULT: "0 10px 25px rgba(0, 0, 0, 0.15)",
        md: "0 15px 35px rgba(0, 0, 0, 0.2)",
        lg: "0 20px 40px rgba(0, 0, 0, 0.3)",
        xl: "0 25px 50px rgba(0, 0, 0, 0.4)",
        glow: "0 10px 30px rgba(244, 184, 96, 0.3)",
        "glow-lg": "0 20px 50px rgba(244, 184, 96, 0.5)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;
