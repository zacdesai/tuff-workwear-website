import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        // Brand
        brand: {
          charcoal: "var(--brand-charcoal)",
          orange: "var(--brand-orange)",
          white: "var(--brand-white)",
          grey: "var(--brand-grey)",
          black: "var(--brand-black)",
        },
        // Neutral ramp
        neutral: {
          50: "var(--neutral-50)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
          600: "var(--neutral-600)",
          700: "var(--neutral-700)",
          800: "var(--neutral-800)",
          900: "var(--neutral-900)",
        },
        // Orange ramp
        orange: {
          50: "var(--orange-50)",
          100: "var(--orange-100)",
          300: "var(--orange-300)",
          500: "var(--orange-500)",
          600: "var(--orange-600)",
          700: "var(--orange-700)",
          800: "var(--orange-800)",
        },
        // Semantic
        success: {
          DEFAULT: "var(--success-500)",
          50: "var(--success-50)",
        },
        warning: {
          DEFAULT: "var(--warning-500)",
          50: "var(--warning-50)",
        },
        danger: {
          DEFAULT: "var(--danger-500)",
          50: "var(--danger-50)",
        },
        info: {
          DEFAULT: "var(--info-500)",
        },
        hiviz: {
          yellow: "var(--hiviz-yellow)",
        },
        // Roles (used by shadcn components)
        background: "var(--surface-page)",
        foreground: "var(--text-primary)",
        muted: {
          DEFAULT: "var(--neutral-100)",
          foreground: "var(--text-secondary)",
        },
        primary: {
          DEFAULT: "var(--brand-orange)",
          foreground: "var(--text-on-orange)",
        },
        secondary: {
          DEFAULT: "var(--brand-white)",
          foreground: "var(--brand-charcoal)",
        },
        destructive: {
          DEFAULT: "var(--danger-500)",
          foreground: "var(--brand-white)",
        },
        border: "var(--border-subtle)",
        input: "var(--border-subtle)",
        ring: "var(--ring-focus)",
        card: {
          DEFAULT: "var(--surface-raised)",
          foreground: "var(--text-primary)",
        },
        popover: {
          DEFAULT: "var(--surface-raised)",
          foreground: "var(--text-primary)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
        xs: ["0.75rem", { lineHeight: "1.125rem" }],
        sm: ["0.875rem", { lineHeight: "1.3125rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        md: ["1.125rem", { lineHeight: "1.75rem" }],
        lg: ["1.25rem", { lineHeight: "1.875rem" }],
        xl: ["1.5rem", { lineHeight: "2rem" }],
        "2xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "3xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "4xl": ["3rem", { lineHeight: "3.25rem" }],
        "5xl": ["3.75rem", { lineHeight: "4rem" }],
        display: ["4.5rem", { lineHeight: "1.05" }],
        "display-xl": ["6rem", { lineHeight: "1.05" }],
      },
      letterSpacing: {
        display: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.05em",
        wider: "0.1em",
      },
      lineHeight: {
        tight: "1.05",
        snug: "1.2",
        normal: "1.5",
        relaxed: "1.65",
      },
      borderRadius: {
        none: "0",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        pill: "var(--radius-pill)",
      },
      borderWidth: {
        DEFAULT: "1px",
        2: "2px",
        4: "4px",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        "glow-orange": "var(--shadow-glow-orange)",
      },
      transitionDuration: {
        fast: "120ms",
        base: "200ms",
        slow: "360ms",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.2, 0, 0, 1)",
        emphasis: "cubic-bezier(0.4, 0, 0.2, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
      },
      zIndex: {
        base: "0",
        raised: "10",
        sticky: "30",
        overlay: "40",
        modal: "50",
        toast: "60",
        tooltip: "70",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 360ms cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-in": "fade-in 200ms cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
