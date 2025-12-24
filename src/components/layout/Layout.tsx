import { useState } from 'react';
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
    fontSize: '2xl',
    fontWeight: 'bold',
    bgGradient: 'linear(to-r, blue.400, cyan.400)',
    bgClip: 'text',
  },
  nav: {
    wrapper: {
      spacing: 1,
      display: { base: 'none', md: 'flex' },
      align: 'center' as const,
    },
    link: {
      px: 3,
      py: 2,
      borderRadius: 'md',
      fontSize: 'sm',
      fontWeight: '500',
      transition: 'all 0.2s',
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

  // Hooks
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const footerBg = useColorModeValue('gray.50', 'gray.900');
  const linkColor = useColorModeValue('gray.700', 'gray.200');
  const linkHoverColor = useColorModeValue('blue.600', 'blue.300');
  const linkHoverBg = useColorModeValue('blue.50', 'blue.900');
  const linkActiveBg = useColorModeValue('blue.100', 'blue.800');

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
              <Text {...styles.logo}>
                📚 DE Learning Hub
              </Text>
            </Link>

            {/* Navigation */}
            <HStack {...styles.nav.wrapper}>
              {/* Catalog Link with MegaMenu Preview */}
              <MegaMenu
                trigger={
                  <ChakraLink
                    as={Link}
                    to="/catalog"
                    {...styles.nav.link}
                    color={linkColor}
                    bg={location.pathname === '/catalog' ? linkActiveBg : 'transparent'}
                    _hover={{
                      color: linkHoverColor,
                      bg: linkHoverBg,
                      textDecoration: 'none',
                    }}
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
                    as={Link}
                    to={item.path}
                    {...styles.nav.link}
                    color={linkColor}
                    bg={isActive ? linkActiveBg : 'transparent'}
                    _hover={{
                      color: linkHoverColor,
                      bg: linkHoverBg,
                      textDecoration: 'none',
                    }}
                  >
                    {item.label}
                  </ChakraLink>
                );
              })}
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
