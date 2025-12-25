import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,

  // Typography
  fonts: {
    // Russo One for large headings (H1, H2)
    heading: `'Russo One', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    // Montserrat for body text, navigation, buttons
    body: `'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
  },

  fontSizes: {
    xs: '0.75rem',    // 12px - captions, helper text
    sm: '0.875rem',   // 14px - small text, navigation
    md: '1rem',       // 16px - body text (default)
    lg: '1.125rem',   // 18px - large body text
    xl: '1.25rem',    // 20px - H6
    '2xl': '1.5rem',  // 24px - H5
    '3xl': '1.75rem', // 28px - H4
    '4xl': '2rem',    // 32px - H3
    '5xl': '2.5rem',  // 40px - H2
    '6xl': '3rem',    // 48px - H1
    '7xl': '4rem',    // 64px - Hero H1
  },

  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeights: {
    shorter: 1.2,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: 2,
  },

  colors: {
    // Brand colors - 60-30-10 rule applied
    brand: {
      // Primary color (30% usage) - #134074
      50: '#e8eff6',
      100: '#c5d7e8',
      200: '#9fbdd9',
      300: '#79a3ca',
      400: '#5c8fbe',
      500: '#134074',  // Primary - navigation, UI elements
      600: '#0f3566',
      700: '#0c2a56',
      800: '#092046',
      900: '#051128',
    },
    // Accent color (10% usage) - #13315C
    accent: {
      50: '#e8eef5',
      100: '#c6d4e5',
      200: '#a0b8d4',
      300: '#7a9cc3',
      400: '#5e86b6',
      500: '#13315C',  // Accent - buttons, links, CTAs
      600: '#0f2a4e',
      700: '#0c223e',
      800: '#081a2f',
      900: '#041119',
    },
    // Secondary color (borders, icons) - #8DA9C4
    secondary: {
      50: '#f4f7fa',
      100: '#e3ebf2',
      200: '#d1dfe9',
      300: '#bfd3e0',
      400: '#b0c8da',
      500: '#8DA9C4',  // Secondary - borders, icons, disabled states
      600: '#7a98b5',
      700: '#6585a3',
      800: '#517391',
      900: '#3d5670',
    },
    // Dark/Text color - #0B2545
    navy: {
      50: '#e7e9ed',
      100: '#c3c9d2',
      200: '#9ba5b5',
      300: '#738197',
      400: '#556781',
      500: '#0B2545',  // Dark mode background, dark text
      600: '#09203c',
      700: '#071a31',
      800: '#051427',
      900: '#030c16',
    },
  },

  // Layer styles for reusable style combinations
  layerStyles: {
    // Navigation link style for header (without underline - handled by animated indicator)
    indicator: {
      px: 4,
      py: 2,
      fontSize: 'sm',
      fontWeight: '500',
      cursor: 'pointer',
      position: 'relative',
      transition: 'color 0.2s ease',
      _hover: {
        color: 'accent.600',
        _dark: {
          color: 'accent.300',
        },
      },
    },
    // Menu item style for dropdowns (no underline)
    menuItem: {
      px: 4,
      py: 2,
      fontSize: 'sm',
      fontWeight: '500',
      transition: 'all 0.2s',
      cursor: 'pointer',
      _hover: {
        color: 'accent.600',
        transform: 'translateX(4px)',
        _dark: {
          color: 'accent.300',
        },
      },
    },
  },

  components: {
    // Heading components
    Heading: {
      baseStyle: {
        fontWeight: 'normal',
        lineHeight: 'shorter',
        // Color is now controlled per-component with useColorModeValue
      },
      sizes: {
        '4xl': {
          fontSize: ['6xl', null, '7xl'],
          fontFamily: 'heading',
        },
        '3xl': {
          fontSize: ['5xl', null, '6xl'],
          fontFamily: 'heading',
        },
        '2xl': {
          fontSize: '4xl',
          fontFamily: 'body',
          fontWeight: 'bold',
        },
        'xl': {
          fontSize: '3xl',
          fontFamily: 'body',
          fontWeight: 'semibold',
        },
        'lg': {
          fontSize: '2xl',
          fontFamily: 'body',
          fontWeight: 'semibold',
        },
        'md': {
          fontSize: 'xl',
          fontFamily: 'body',
          fontWeight: 'semibold',
        },
        'sm': {
          fontSize: 'lg',
          fontFamily: 'body',
          fontWeight: 'medium',
        },
        'xs': {
          fontSize: 'md',
          fontFamily: 'body',
          fontWeight: 'medium',
        },
      },
      defaultProps: {
        size: 'xl',
      },
    },

    // Text component
    Text: {
      baseStyle: {
        lineHeight: 'base',
      },
      sizes: {
        lg: {
          fontSize: 'lg',
          lineHeight: 'tall',
        },
        md: {
          fontSize: 'md',
          lineHeight: 'base',
        },
        sm: {
          fontSize: 'sm',
          lineHeight: 'base',
        },
        xs: {
          fontSize: 'xs',
          lineHeight: 'short',
        },
      },
      defaultProps: {
        size: 'md',
      },
    },

    // Button components
    Button: {
      baseStyle: {
        fontFamily: 'body',
        fontWeight: 'semibold',
        borderRadius: 'md',
      },
      sizes: {
        lg: {
          fontSize: 'md',
          px: 6,
          py: 3,
          h: '48px',
        },
        md: {
          fontSize: 'sm',
          px: 5,
          py: 2.5,
          h: '40px',
        },
        sm: {
          fontSize: 'sm',
          px: 4,
          py: 2,
          h: '32px',
        },
      },
      variants: {
        // Hero/CTA button with Russo One - uses accent color (10%)
        hero: {
          fontFamily: 'heading',
          fontSize: 'lg',
          px: 8,
          py: 4,
          h: '56px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          bg: 'accent.500',
          color: 'white',
          _hover: {
            bg: 'accent.600',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            bg: 'accent.700',
            transform: 'translateY(0)',
          },
        },
        // Solid variant - uses accent color (10%)
        solid: {
          bg: 'accent.500',
          color: 'white',
          _hover: {
            bg: 'accent.600',
          },
          _active: {
            bg: 'accent.700',
          },
        },
        // Outline variant - uses accent color
        outline: {
          borderColor: 'accent.500',
          color: 'accent.500',
          _hover: {
            bg: 'accent.50',
          },
        },
        // Ghost variant - uses accent color
        ghost: {
          color: 'accent.500',
          _hover: {
            bg: 'accent.50',
          },
        },
      },
      defaultProps: {
        size: 'md',
        variant: 'solid',
      },
    },

    // Link component (for navigation) - uses primary color (30%)
    Link: {
      baseStyle: {
        fontWeight: 'medium',
        color: 'brand.500',
        _hover: {
          textDecoration: 'none',
          color: 'accent.500',
        },
      },
    },

    // Card component
    Card: {
      baseStyle: {
        container: {
          borderRadius: 'lg',
          overflow: 'hidden',
          borderWidth: '1px',
          borderColor: 'secondary.200',
        },
      },
    },

    // Badge component
    Badge: {
      baseStyle: {
        fontWeight: 'semibold',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
        },
        subtle: {
          bg: 'secondary.100',
          color: 'brand.700',
        },
      },
    },
  },

  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'navy.500' : 'gray.50',
        color: props.colorMode === 'dark' ? 'gray.100' : 'navy.500',
        fontSize: 'md',
        lineHeight: 'base',
      },
      'h1, h2, h3, h4, h5, h6': {
        lineHeight: 'shorter',
      },
      // Remove gradients globally
      '*[data-gradient]': {
        backgroundImage: 'none !important',
      },
    }),
  },
});
