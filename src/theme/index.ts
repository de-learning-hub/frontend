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
    brand: {
      50: '#e0f7ff',
      100: '#b3ebff',
      200: '#80dfff',
      300: '#4dd3ff',
      400: '#26c9ff',
      500: '#12BFE9',  // Primary cyan
      600: '#0ea8cf',
      700: '#0a8fb5',
      800: '#07769b',
      900: '#045d81',
    },
    // Category color coding
    category: {
      sql: '#1976d2',         // blue
      python: '#4caf50',      // green
      airflow: '#00bcd4',     // cyan
      spark: '#ff9800',       // orange
      database: '#9c27b0',    // purple
      docker: '#2196f3',      // light blue
      dataModeling: '#f44336', // red
      cicd: '#607d8b',        // gray
    },
    // Difficulty level color coding
    difficulty: {
      junior: '#4caf50',  // green
      middle: '#ff9800',  // orange
      senior: '#f44336',  // red
    },
  },

  components: {
    // Heading components
    Heading: {
      baseStyle: {
        fontWeight: 'normal', // Russo One is already bold, no need for extra weight
        lineHeight: 'shorter',
      },
      sizes: {
        '4xl': {
          fontSize: ['6xl', null, '7xl'], // 48px -> 64px on larger screens
          fontFamily: 'heading', // Russo One
        },
        '3xl': {
          fontSize: ['5xl', null, '6xl'], // 40px -> 48px
          fontFamily: 'heading', // Russo One
        },
        '2xl': {
          fontSize: '4xl', // 32px
          fontFamily: 'body', // Montserrat Bold
          fontWeight: 'bold',
        },
        'xl': {
          fontSize: '3xl', // 28px
          fontFamily: 'body', // Montserrat SemiBold
          fontWeight: 'semibold',
        },
        'lg': {
          fontSize: '2xl', // 24px
          fontFamily: 'body', // Montserrat SemiBold
          fontWeight: 'semibold',
        },
        'md': {
          fontSize: 'xl', // 20px
          fontFamily: 'body', // Montserrat SemiBold
          fontWeight: 'semibold',
        },
        'sm': {
          fontSize: 'lg', // 18px
          fontFamily: 'body', // Montserrat Medium
          fontWeight: 'medium',
        },
        'xs': {
          fontSize: 'md', // 16px
          fontFamily: 'body', // Montserrat Medium
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
          fontSize: 'lg', // 18px
          lineHeight: 'tall',
        },
        md: {
          fontSize: 'md', // 16px
          lineHeight: 'base',
        },
        sm: {
          fontSize: 'sm', // 14px
          lineHeight: 'base',
        },
        xs: {
          fontSize: 'xs', // 12px
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
        fontFamily: 'body', // Montserrat
        fontWeight: 'semibold',
        borderRadius: 'md',
      },
      sizes: {
        lg: {
          fontSize: 'md', // 16px
          px: 6,
          py: 3,
          h: '48px',
        },
        md: {
          fontSize: 'sm', // 14px
          px: 5,
          py: 2.5,
          h: '40px',
        },
        sm: {
          fontSize: 'sm', // 14px
          px: 4,
          py: 2,
          h: '32px',
        },
      },
      variants: {
        // Hero/CTA button with Russo One
        hero: {
          fontFamily: 'heading', // Russo One
          fontSize: 'lg', // 18px
          px: 8,
          py: 4,
          h: '56px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            bg: 'brand.700',
            transform: 'translateY(0)',
          },
        },
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
          _active: {
            bg: 'brand.700',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
          },
        },
        ghost: {
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
          },
        },
      },
      defaultProps: {
        size: 'md',
        variant: 'solid',
      },
    },

    // Link component (for navigation)
    Link: {
      baseStyle: {
        fontWeight: 'medium',
        _hover: {
          textDecoration: 'none',
        },
      },
    },

    // Card component
    Card: {
      baseStyle: {
        container: {
          borderRadius: 'lg',
          overflow: 'hidden',
        },
      },
    },
  },

  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.900',
        fontSize: 'md',
        lineHeight: 'base',
      },
      // Make sure all headings use proper line height
      'h1, h2, h3, h4, h5, h6': {
        lineHeight: 'shorter',
      },
    }),
  },
});
