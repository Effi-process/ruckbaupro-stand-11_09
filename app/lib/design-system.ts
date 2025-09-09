/**
 * Design System for Asbest Removal Platform
 * Billion-Euro Revenue Optimization Design Guidelines
 */

// Primary Brand Colors - Consistent Blue System
export const COLORS = {
  primary: {
    50: '#EBF5FF',
    100: '#E1EFFE', 
    200: '#C3DDFD',
    300: '#A4CAFE',
    400: '#76A9FA',
    500: '#0066CC', // Main brand color
    600: '#0052A3',
    700: '#003D7A',
    800: '#002851',
    900: '#001329',
  },
  secondary: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
  accent: {
    50: '#FFF7ED',
    100: '#FFEDD5',
    200: '#FED7AA',
    300: '#FDBA74',
    400: '#FB923C',
    500: '#F97316',
    600: '#EA580C',
    700: '#C2410C',
    800: '#9A3412',
    900: '#7C2D12',
  },
  success: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
  },
  warning: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
  },
  danger: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
  },
} as const;

// Typography Scale for Premium Design
export const TYPOGRAPHY = {
  sizes: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
  },
  weights: {
    thin: 'font-thin',
    extralight: 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black',
  },
  families: {
    sans: 'font-sans',
    display: 'font-display',
  },
} as const;

// Spacing System - 8pt Grid
export const SPACING = {
  px: 'px',
  0: '0',
  0.5: '0.5',
  1: '1',
  1.5: '1.5',
  2: '2',
  2.5: '2.5',
  3: '3',
  3.5: '3.5',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
  11: '11',
  12: '12',
  14: '14',
  16: '16',
  18: '18',
  20: '20',
  24: '24',
  28: '28',
  32: '32',
  36: '36',
  40: '40',
  44: '44',
  48: '48',
  52: '52',
  56: '56',
  60: '60',
  64: '64',
  72: '72',
  80: '80',
  88: '88',
  96: '96',
  128: '128',
} as const;

// Shadow System for Premium Feel
export const SHADOWS = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  '3xl': 'shadow-3xl',
  premium: {
    sm: 'shadow-premium-sm',
    md: 'shadow-premium-md',
    lg: 'shadow-premium-lg',
    xl: 'shadow-premium-xl',
  },
} as const;

// Border Radius for Modern Design
export const BORDER_RADIUS = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  '4xl': 'rounded-4xl',
  full: 'rounded-full',
} as const;

// Component Classes for Consistency
export const COMPONENT_CLASSES = {
  button: {
    primary: `
      bg-primary-500 hover:bg-primary-600 focus:bg-primary-700 
      text-white font-semibold px-6 py-3 rounded-xl 
      transition-all duration-200 ease-in-out
      hover:scale-105 focus:scale-105
      shadow-premium-md hover:shadow-premium-lg
      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
    `,
    secondary: `
      bg-secondary-100 hover:bg-secondary-200 focus:bg-secondary-300
      text-secondary-900 font-semibold px-6 py-3 rounded-xl
      transition-all duration-200 ease-in-out
      hover:scale-105 focus:scale-105
      shadow-premium-sm hover:shadow-premium-md
      focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2
    `,
    accent: `
      bg-accent-500 hover:bg-accent-600 focus:bg-accent-700
      text-white font-semibold px-6 py-3 rounded-xl
      transition-all duration-200 ease-in-out
      hover:scale-105 focus:scale-105
      shadow-premium-md hover:shadow-premium-lg
      focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2
    `,
    emergency: `
      bg-danger-500 hover:bg-danger-600 focus:bg-danger-700
      text-white font-bold px-8 py-4 rounded-full
      transition-all duration-200 ease-in-out
      animate-urgent-pulse
      shadow-premium-lg hover:shadow-premium-xl
      focus:outline-none focus:ring-2 focus:ring-danger-500 focus:ring-offset-2
    `,
    million: `
      bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
      text-yellow-900 font-black text-xl px-8 py-4 rounded-full
      shadow-2xl transform hover:scale-110 transition-all duration-300
      animate-revenue-glow
      focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2
    `,
  },
  card: {
    primary: `
      bg-off-white rounded-2xl shadow-premium-md hover:shadow-premium-lg
      border border-secondary-200 p-6
      transition-all duration-300 ease-in-out
      hover:scale-105
    `,
    elevated: `
      bg-off-white rounded-3xl shadow-premium-lg hover:shadow-premium-xl
      border border-secondary-100 p-8
      transition-all duration-300 ease-in-out
      hover:scale-105 hover:-translate-y-2
    `,
    glass: `
      bg-off-white/10 backdrop-blur-premium rounded-2xl
      border border-white/20 p-6
      transition-all duration-300 ease-in-out
      hover:bg-white/20 hover:scale-105
    `,
  },
  input: {
    primary: `
      w-full px-4 py-3 rounded-xl border border-secondary-300
      focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
      placeholder-secondary-400 text-secondary-900
      transition-all duration-200 ease-in-out
      bg-off-white
    `,
    error: `
      w-full px-4 py-3 rounded-xl border border-danger-300
      focus:border-danger-500 focus:ring-2 focus:ring-danger-500 focus:ring-offset-2
      placeholder-danger-400 text-secondary-900
      transition-all duration-200 ease-in-out
      bg-danger-50
    `,
  },
  text: {
    heading: {
      h1: 'text-5xl md:text-6xl lg:text-7xl font-black text-secondary-900 leading-tight',
      h2: 'text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-900 leading-tight',
      h3: 'text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight',
      h4: 'text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-900 leading-snug',
      h5: 'text-xl md:text-2xl lg:text-3xl font-semibold text-secondary-900 leading-snug',
      h6: 'text-lg md:text-xl lg:text-2xl font-semibold text-secondary-900 leading-snug',
    },
    body: {
      large: 'text-lg md:text-xl text-secondary-700 leading-relaxed',
      medium: 'text-base md:text-lg text-secondary-700 leading-relaxed',
      small: 'text-sm md:text-base text-secondary-600 leading-relaxed',
    },
    accent: 'text-primary-500 font-semibold',
    muted: 'text-secondary-500',
  },
} as const;

// Animation Classes for Premium Experience
export const ANIMATIONS = {
  entrance: {
    fadeIn: 'animate-fade-in',
    fadeInUp: 'animate-fade-in-up',
    scaleIn: 'animate-scale-in',
    slideInLeft: 'animate-slide-in-left',
    slideInRight: 'animate-slide-in-right',
  },
  interactive: {
    float: 'animate-float',
    urgentPulse: 'animate-urgent-pulse',
    revenueGlow: 'animate-revenue-glow',
    slideUpFade: 'animate-slide-up-fade',
  },
  hover: {
    lift: 'hover-lift',
    premium: 'transition-premium',
    microInteraction: 'micro-interaction',
  },
} as const;

// Responsive Breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Utility Functions for Dynamic Classes
export const getButtonClass = (variant: keyof typeof COMPONENT_CLASSES.button = 'primary'): string => {
  return COMPONENT_CLASSES.button[variant].replace(/\s+/g, ' ').trim();
};

export const getCardClass = (variant: keyof typeof COMPONENT_CLASSES.card = 'primary'): string => {
  return COMPONENT_CLASSES.card[variant].replace(/\s+/g, ' ').trim();
};

export const getInputClass = (variant: keyof typeof COMPONENT_CLASSES.input = 'primary'): string => {
  return COMPONENT_CLASSES.input[variant].replace(/\s+/g, ' ').trim();
};

export const getTextClass = (type: 'heading' | 'body', variant: string): string => {
  const textClasses = COMPONENT_CLASSES.text[type] as Record<string, string>;
  return textClasses[variant] || '';
};

// Theme Configuration for Dynamic Theming
export const THEME_CONFIG = {
  primary: COLORS.primary[500],
  primaryDark: COLORS.primary[600],
  primaryDarker: COLORS.primary[700],
  secondary: COLORS.secondary[500],
  accent: COLORS.accent[500],
  success: COLORS.success[500],
  warning: COLORS.warning[500],
  danger: COLORS.danger[500],
} as const;

// Export everything for easy access
const DesignSystem = {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  SHADOWS,
  BORDER_RADIUS,
  COMPONENT_CLASSES,
  ANIMATIONS,
  BREAKPOINTS,
  getButtonClass,
  getCardClass,
  getInputClass,
  getTextClass,
  THEME_CONFIG,
};

export default DesignSystem;