import { useState, useEffect, useRef } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  IconButton,
  useColorMode,
  useColorModeValue,
  Container,
  Text,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';
import { MegaMenu, MobileMenu } from '@/components/navigation';
import { Logo } from '@/components/ui';
import { CATEGORIES } from '@/constants';

// Types
interface LayoutProps {
  children: React.ReactNode;
}

interface NavItem {
  path: string;
  label: string;
}

// Constants
const NAV_ITEMS: NavItem[] = [
  { path: '/', label: 'Главная' },
  { path: '/roadmaps', label: 'Roadmaps' },
  { path: '/interview', label: 'Вопросы для собесов' },
  { path: '/about', label: 'О проекте' },
];

// Styles
const styles = {
  container: {
    minH: '100vh' as const,
  },
  header: {
    wrapper: {
      as: 'header' as const,
      position: 'sticky' as const,
      top: 0,
      zIndex: 1000,
      h: { base: '64px', md: '80px' }, // Mobile: 64px, Desktop: 80px (multiples of 8)
      bgGradient: 'linear(135deg, #0F2027, #203A43, #2C5364)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    container: {
      maxW: 'container.xl' as const,
      h: '100%',
      px: { base: 4, md: 6 }, // 16px mobile, 24px desktop
    },
    flex: {
      justify: 'space-between' as const,
      align: 'center' as const,
      h: '100%',
      gap: { base: 4, md: 6 }, // Spacing between logo and nav: 16px mobile, 24px desktop
    },
    catalogWrapper: {
      position: 'relative' as const,
    },
    logoText: {
      fontFamily: 'heading', // Russo One
      fontSize: '20px',
      color: 'white',
      ml: 3,
      letterSpacing: '1px',
    },
  },
  logo: {
    h: { base: '32px', md: '40px' }, // Mobile: 32px, Desktop: 40px (recommended 40-60px)
    w: 'auto',
    cursor: 'pointer',
  },
  nav: {
    wrapper: {
      spacing: { base: 4, md: 8 }, // Mobile: 16px, Desktop: 32px (recommended 30-40px)
      display: { base: 'none', md: 'flex' },
      align: 'center' as const,
      position: 'relative' as const,
    },
    link: {
      textDecoration: 'none',
      px: 3,
      py: 2,
      transition: 'opacity 0.2s ease',
      position: 'relative' as const,
    },
    indicator: {
      position: 'absolute' as const,
      bottom: 0,
      height: '2px',
      bg: 'white',
      borderRadius: '2px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      pointerEvents: 'none' as const,
    },
    catalogButton: {
      px: 3,
      py: 2,
      fontSize: 'sm',
      fontWeight: '500',
      variant: 'ghost' as const,
      h: 'auto',
      minH: 0,
    },
  },
  backdrop: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
  },
  themeToggle: {
    variant: 'ghost' as const,
    size: 'md' as const,
  },
  burgerButton: {
    variant: 'ghost' as const,
    size: 'md' as const,
    display: { base: 'flex', md: 'none' },
  },
  main: {
    maxW: 'container.xl' as const,
    py: { base: 10, md: 16 }, // 40px mobile, 64px desktop (recommended 40-80px)
    px: { base: 4, md: 8 }, // 16px mobile, 32px desktop (recommended 20-50px)
  },
  footer: {
    wrapper: {
      as: 'footer' as const,
      mt: 16,
      py: 8,
      borderTop: '1px',
    },
    container: {
      maxW: 'container.xl' as const,
    },
    flex: {
      justify: 'space-between' as const,
      align: 'center' as const,
      direction: { base: 'column' as const, md: 'row' as const },
      gap: 4,
    },
    text: {
      color: 'gray.500',
      fontSize: 'sm',
    },
    links: {
      spacing: 4,
      color: 'gray.500',
      fontSize: 'sm',
    },
  },
} as const;

// Main component
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  // State
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  // Refs
  const navRefs = useRef<Record<string, HTMLElement | null>>({});

  // Hooks
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();
  const footerBg = useColorModeValue('gray.50', 'gray.900');
  const footerBorderColor = useColorModeValue('gray.200', 'gray.700');

  // Update indicator position when route changes
  useEffect(() => {
    const currentPath = location.pathname;
    const element = navRefs.current[currentPath];

    if (element) {
      const { offsetLeft, offsetWidth } = element;
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [location.pathname]);

  // Render
  return (
    <Box {...styles.container}>
      {/* Sticky Header */}
      <Box {...styles.header.wrapper}>
        <Container {...styles.header.container}>
          <Flex {...styles.header.flex}>
            {/* Burger Menu Button (Mobile Only) */}
            <IconButton
              aria-label="Open menu"
              icon={<FaBars />}
              onClick={() => setIsMobileMenuOpen(true)}
              {...styles.burgerButton}
              color="white"
              _hover={{ bg: 'whiteAlpha.200' }}
            />

            {/* Logo */}
            <Box as={Link} to="/" _hover={{ opacity: 0.8 }} {...styles.logo}>
              <Logo height="100%" />
            </Box>

            {/* Navigation */}
            <HStack {...styles.nav.wrapper}>
              {/* Regular navigation links */}
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <ChakraLink
                    key={item.path}
                    as={Link}
                    to={item.path}
                    ref={(el) => {
                      if (el) navRefs.current[item.path] = el;
                    }}
                    {...styles.nav.link}
                    color="white"
                    opacity={isActive ? 1 : 0.85}
                    _hover={{ opacity: 1 }}
                  >
                    {item.label}
                  </ChakraLink>
                );
              })}

              {/* Catalog Link with MegaMenu Preview */}
              <MegaMenu
                trigger={
                  <ChakraLink
                    as={Link}
                    to="/catalog"
                    ref={(el) => {
                      if (el) navRefs.current['/catalog'] = el;
                    }}
                    {...styles.nav.link}
                    color="white"
                    opacity={location.pathname === '/catalog' ? 1 : 0.85}
                    _hover={{ opacity: 1 }}
                  >
                    Каталог
                  </ChakraLink>
                }
                categories={CATEGORIES}
                isOpen={isMegaMenuOpen}
                onClose={() => setIsMegaMenuOpen(false)}
                onOpen={() => setIsMegaMenuOpen(true)}
              />

              {/* Animated Indicator */}
              <Box
                {...styles.nav.indicator}
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                }}
              />
            </HStack>

            {/* Theme Toggle */}
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              {...styles.themeToggle}
              color="white"
              _hover={{ bg: 'whiteAlpha.200' }}
            />
          </Flex>
        </Container>
      </Box>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
        currentPath={location.pathname}
        onCatalogClick={() => setIsMegaMenuOpen(true)}
      />

      {/* Main Content */}
      <Container {...styles.main}>
        {children}
      </Container>

      {/* Footer */}
      <Box
        {...styles.footer.wrapper}
        borderColor={footerBorderColor}
        bg={footerBg}
      >
        <Container {...styles.footer.container}>
          <Flex {...styles.footer.flex}>
            <Text {...styles.footer.text}>
              © {new Date().getFullYear()} DE Learning Hub. Открытая база знаний для Data Engineers
            </Text>
            <HStack {...styles.footer.links}>
              <ChakraLink
                href="https://github.com/de-learning-hub"
                isExternal
                color={styles.footer.text.color}
                fontSize={styles.footer.text.fontSize}
              >
                GitHub
              </ChakraLink>
              <ChakraLink
                as={Link}
                to="/about"
                color={styles.footer.text.color}
                fontSize={styles.footer.text.fontSize}
              >
                О проекте
              </ChakraLink>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
