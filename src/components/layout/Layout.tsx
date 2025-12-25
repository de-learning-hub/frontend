import { useState, useRef, useEffect } from 'react';
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
import { motion } from 'framer-motion';
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
      zIndex: 10,
      borderBottom: '1px',
      boxShadow: 'sm',
    },
    container: {
      maxW: 'container.xl' as const,
      py: 4,
    },
    flex: {
      justify: 'space-between' as const,
      align: 'center' as const,
    },
    catalogWrapper: {
      position: 'relative' as const,
    },
  },
  logo: {
    h: '40px',
    w: 'auto',
    cursor: 'pointer',
  },
  nav: {
    wrapper: {
      spacing: 1,
      display: { base: 'none', md: 'flex' },
      align: 'center' as const,
      position: 'relative' as const,
    },
    link: {
      textDecoration: 'none',
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
    indicator: {
      position: 'absolute' as const,
      bottom: '-1px',
      height: '2px',
      borderRadius: '2px',
      pointerEvents: 'none' as const,
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
    py: 8,
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

  // Refs for navigation items
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const catalogRef = useRef<HTMLAnchorElement | null>(null);

  // Hooks
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();
  const bgColor = useColorModeValue('white', 'navy.600');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const footerBg = useColorModeValue('gray.50', 'navy.700');
  const linkHoverColor = useColorModeValue('accent.600', 'accent.300');
  const indicatorBg = useColorModeValue('accent.600', 'accent.400');

  // Update indicator position based on active route
  const updateIndicatorPosition = (path: string) => {
    const element = path === '/catalog' ? catalogRef.current : navRefs.current[path];
    if (element) {
      const { offsetLeft, offsetWidth } = element;
      setIndicatorStyle({
        left: offsetLeft + offsetWidth * 0.1, // 10% padding from left
        width: offsetWidth * 0.8, // 80% of item width
      });
    }
  };

  // Update indicator on route change
  useEffect(() => {
    updateIndicatorPosition(location.pathname);
  }, [location.pathname]);

  // Render
  return (
    <Box {...styles.container}>
      {/* Sticky Header */}
      <Box
        {...styles.header.wrapper}
        bg={bgColor}
        borderColor={borderColor}
      >
        <Container {...styles.header.container}>
          <Flex {...styles.header.flex}>
            {/* Burger Menu Button (Mobile Only) */}
            <IconButton
              aria-label="Open menu"
              icon={<FaBars />}
              onClick={() => setIsMobileMenuOpen(true)}
              {...styles.burgerButton}
            />

            {/* Logo */}
            <Link to="/">
              <Logo height={styles.logo.h} />
            </Link>

            {/* Navigation */}
            <HStack {...styles.nav.wrapper}>
              {/* Catalog Link with MegaMenu Preview */}
              <MegaMenu
                trigger={
                  <ChakraLink
                    ref={catalogRef}
                    as={Link}
                    to="/catalog"
                    {...styles.nav.link}
                    layerStyle="indicator"
                    color={location.pathname === '/catalog' ? linkHoverColor : undefined}
                    _hover={{ color: linkHoverColor }}
                  >
                    Каталог
                  </ChakraLink>
                }
                categories={CATEGORIES}
                isOpen={isMegaMenuOpen}
                onClose={() => setIsMegaMenuOpen(false)}
                onOpen={() => setIsMegaMenuOpen(true)}
              />

              {/* Regular navigation links */}
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <ChakraLink
                    key={item.path}
                    ref={(el) => (navRefs.current[item.path] = el)}
                    as={Link}
                    to={item.path}
                    {...styles.nav.link}
                    layerStyle="indicator"
                    color={isActive ? linkHoverColor : undefined}
                    _hover={{ color: linkHoverColor }}
                  >
                    {item.label}
                  </ChakraLink>
                );
              })}

              {/* Animated sliding indicator */}
              <Box
                as={motion.div}
                {...styles.nav.indicator}
                bg={indicatorBg}
                animate={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30,
                  duration: 0.3,
                }}
                initial={false}
              />
            </HStack>

            {/* Theme Toggle */}
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              {...styles.themeToggle}
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
        borderColor={borderColor}
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
