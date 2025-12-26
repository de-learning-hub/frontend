import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,

  // Typography
  fonts: {
    // Montserrat для всего (heading и body используют разные веса)
    // Russo One удален - не поддерживает кириллицу
    heading: `'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    body: `'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    // JetBrains Mono для кода
    mono: `'JetBrains Mono', 'Fira Code', 'Courier New', monospace`,
  },

  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    md: '1rem',       // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.75rem', // 28px
    '4xl': '2rem',    // 32px
    '5xl': '2.5rem',  // 40px
    '6xl': '3rem',    // 48px
    '7xl': '4rem',    // 64px
  },

  fontWeights: {
    // Используемые веса Montserrat в проекте
    normal: 400,      // Обычный текст, параграфы
    medium: 500,      // Навигация, ссылки, акцентный текст
    semibold: 600,    // Кнопки, badges, акценты
    bold: 700,        // Заголовки H1-H3, заголовки карточек
  },

  lineHeights: {
    tight: 1.25,
    shorter: 1.25,
    normal: 1.5,
    base: 1.5,
    relaxed: 1.75,
    tall: 1.75,
  },

  colors: {
    // Primary color - Teal (from spec)
    teal: {
      50: '#E6FFFA',
      100: '#B2F5EA',
      200: '#81E6D9',
      300: '#4FD1C5',
      400: '#38B2AC',
      500: '#38B2AC',  // Primary color
      600: '#319795',  // Primary dark
      700: '#2C7A7B',  // Primary darker
      800: '#285E61',
      900: '#234E52',
    },
    // Secondary color - Purple (from spec)
    purple: {
      50: '#FAF5FF',
      100: '#E9D8FD',
      200: '#D6BCFA',
      300: '#B794F4',
      400: '#9F7AEA',
      500: '#805AD5',  // Secondary color
      600: '#6B46C1',  // Secondary dark
      700: '#553C9A',
      800: '#44337A',
      900: '#322659',
    },
    // Semantic colors (from spec)
    green: {
      100: '#C6F6D5',
      500: '#48BB78',
      800: '#276749',
    },
    orange: {
      100: '#FEEBC8',
      500: '#ED8936',
      800: '#9C4221',
    },
    red: {
      100: '#FED7D7',
      500: '#F56565',
      800: '#9B2C2C',
    },
  },

  // Spacing system
  space: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
    32: '128px',
  },

  // Border radius
  radii: {
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 2px 8px rgba(0,0,0,0.08)',
    md: '0 4px 12px rgba(0,0,0,0.12)',
    lg: '0 8px 24px rgba(0,0,0,0.15)',
    xl: '0 12px 32px rgba(0,0,0,0.2)',
    // Colored shadows (from spec)
    teal: '0 4px 12px rgba(49,151,149,0.3)',
    purple: '0 4px 12px rgba(107,70,193,0.3)',
  },

  // Layer styles for reusable style combinations
  layerStyles: {
    // Navigation link style for header
    indicator: {
      px: 4,
      py: 2,
      fontSize: 'sm',
      fontWeight: '500',
      cursor: 'pointer',
      position: 'relative',
      transition: 'color 0.2s ease',
      _hover: {
        color: 'teal.600',
        _dark: {
          color: 'white',
        },
      },
    },
    // Menu item style for dropdowns
    menuItem: {
      px: 4,
      py: 2,
      fontSize: 'sm',
      fontWeight: '500',
      transition: 'all 0.2s',
      cursor: 'pointer',
      _hover: {
        color: 'teal.600',
        transform: 'translateX(4px)',
        _dark: {
          color: 'white',
        },
      },
    },
  },

  components: {
    // Heading components
    Heading: {
      baseStyle: {
        fontFamily: 'heading', // Montserrat
        lineHeight: 'shorter',
      },
      sizes: {
        // H1 - Montserrat Bold (700) для главных заголовков
        '4xl': {
          fontSize: ['6xl', null, '7xl'], // 48px → 64px
          fontWeight: 'bold', // 700
        },
        // H2 - Montserrat Bold (700)
        '3xl': {
          fontSize: ['5xl', null, '6xl'], // 40px → 48px
          fontWeight: 'bold', // 700
        },
        // H3 - Montserrat Bold (700)
        '2xl': {
          fontSize: '4xl', // 32px
          fontWeight: 'bold', // 700
        },
        // H4 - Montserrat SemiBold (600)
        'xl': {
          fontSize: '3xl', // 28px
          fontWeight: 'semibold', // 600
        },
        // H5 - Montserrat SemiBold (600)
        'lg': {
          fontSize: '2xl', // 24px
          fontWeight: 'semibold', // 600
        },
        // H6 - Montserrat SemiBold (600)
        'md': {
          fontSize: 'xl', // 20px
          fontWeight: 'semibold', // 600
        },
        // Small headings - Montserrat Medium (500)
        'sm': {
          fontSize: 'lg', // 18px
          fontWeight: 'medium', // 500
        },
        'xs': {
          fontSize: 'md', // 16px
          fontWeight: 'medium', // 500
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
          lineHeight: 'shorter',
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
        borderRadius: 'lg',
        transition: 'all 0.2s ease-in-out',
      },
      sizes: {
        lg: {
          fontSize: 'md',
          px: 8,
          h: '48px',
        },
        md: {
          fontSize: 'sm',
          px: 6,
          h: '40px',
        },
        sm: {
          fontSize: 'sm',
          px: 4,
          h: '36px',
        },
      },
      variants: {
        // Primary solid button - основные действия
        primary: {
          bg: 'teal.500',
          color: 'white',
          _hover: {
            bg: 'teal.600',
            boxShadow: '0 4px 12px rgba(49,151,149,0.3)',
          },
          _active: {
            bg: 'teal.700',
          },
          _dark: {
            bg: 'teal.600',
            _hover: {
              bg: 'teal.700',
            },
          },
        },
        // Outline button - вторичные действия
        outline: {
          borderWidth: '2px',
          borderColor: 'teal.600',
          color: 'teal.600',
          bg: 'transparent',
          _hover: {
            bg: 'teal.50',
            borderColor: 'teal.700',
            color: 'teal.700',
            _dark: {
              bg: 'teal.900',
              borderColor: 'teal.500',
              color: 'teal.400',
            },
          },
          _active: {
            bg: 'teal.100',
            _dark: {
              bg: 'teal.800',
            },
          },
        },
        // Secondary button - альтернативные действия (GitHub, external links)
        secondary: {
          bg: 'gray.800',
          color: 'white',
          _hover: {
            bg: 'gray.900',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          },
          _active: {
            transform: 'translateY(0)',
          },
          _dark: {
            bg: 'whiteAlpha.200',
            _hover: {
              bg: 'whiteAlpha.300',
            },
          },
        },
        // Ghost button - минимальные действия
        ghost: {
          bg: 'transparent',
          color: 'teal.600',
          _hover: {
            bg: 'teal.50',
            _dark: {
              bg: 'whiteAlpha.100',
              color: 'teal.400',
            },
          },
          _active: {
            bg: 'teal.100',
            _dark: {
              bg: 'whiteAlpha.200',
            },
          },
        },
        // Hero CTA button - главные призывы к действию
        hero: {
          fontSize: 'sm',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          px: 12,
          h: '48px',
          bg: 'teal.500',
          color: 'white',
          _hover: {
            bg: 'teal.600',
            boxShadow: '0 6px 16px rgba(49,151,149,0.4)',
            transform: 'translateY(-2px)',
          },
          _active: {
            transform: 'translateY(0)',
            bg: 'teal.700',
          },
        },
      },
      defaultProps: {
        size: 'md',
        variant: 'primary',
      },
    },

    // Link component
    Link: {
      baseStyle: {
        fontWeight: 'medium',
        color: 'teal.500',
        _hover: {
          textDecoration: 'none',
          color: 'teal.600',
        },
      },
    },

    // Card component
    Card: {
      baseStyle: {
        container: {
          bg: 'white',
          borderRadius: 'xl',
          borderWidth: '1px',
          borderColor: 'gray.200',
          overflow: 'hidden',
          transition: 'all 0.2s ease',
          _dark: {
            bg: 'gray.800',
            borderColor: 'gray.700',
          },
          _hover: {
            borderColor: 'teal.500',
            boxShadow: '0 8px 24px rgba(49,151,149,0.12)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },

    // Badge component
    Badge: {
      baseStyle: {
        fontFamily: 'body',
        fontWeight: 'medium',
        fontSize: 'xs',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        borderRadius: 'md',
        px: 3,
        py: 1,
      },
      variants: {
        // Tech badge (teal)
        solid: {
          bg: 'teal.100',
          color: 'teal.800',
          _dark: {
            bg: 'teal.900',
            color: 'teal.200',
          },
        },
        // Level badges
        beginner: {
          bg: 'green.100',
          color: 'green.800',
          _dark: {
            bg: 'green.900',
            color: 'green.200',
          },
        },
        intermediate: {
          bg: 'orange.100',
          color: 'orange.800',
          _dark: {
            bg: 'orange.900',
            color: 'orange.200',
          },
        },
        advanced: {
          bg: 'red.100',
          color: 'red.800',
          _dark: {
            bg: 'red.900',
            color: 'red.200',
          },
        },
      },
    },

    // Code block styling
    Code: {
      baseStyle: {
        fontFamily: 'mono', // JetBrains Mono
        fontSize: 'sm',
        bg: 'gray.50',
        color: 'gray.800',
        px: 2,
        py: 1,
        borderRadius: 'sm',
        _dark: {
          bg: 'gray.800',
          color: 'gray.200',
        },
      },
    },
  },

  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.800',
        fontSize: 'md',
        lineHeight: 'base',
      },
      'h1, h2, h3, h4, h5, h6': {
        lineHeight: 'shorter',
      },
    }),
  },
});
