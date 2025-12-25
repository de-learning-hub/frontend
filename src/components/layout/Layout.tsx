import { useState, useEffect, useRef } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  IconButton,
  Button,
  useColorMode,
  useColorModeValue,
  Container,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon, FaSun, FaBars, FaSearch, FaGlobe } from 'react-icons/fa';
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
  { path: '/interview', label: 'Собесы' },
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
      h: '72px', // Header height: 72px for all screen sizes (Chakra-inspired)
      bgGradient: 'linear(135deg, #0F2027, #203A43, #2C5364)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    container: {
      maxW: 'container.xl' as const,
      h: '100%',
      px: 6, // 24px padding from screen edge
    },
    flex: {
      justify: 'space-between' as const,
      align: 'center' as const,
      h: '100%',
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
      spacing: 2, // 12px gap between nav items (compact)
      display: { base: 'none', md: 'flex' },
      align: 'center' as const,
      position: 'relative' as const,
      ml: 8, // 32px margin from logo
    },
    link: {
      textDecoration: 'none',
      px: 3,
      py: 2,
      fontSize: 'sm', // 14px like Chakra UI
      fontWeight: '500',
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
    h: '36px',
    w: '36px',
    minW: '36px',
  },
  burgerButton: {
    variant: 'ghost' as const,
    h: '36px',
    w: '36px',
    minW: '36px',
    display: { base: 'flex', md: 'none' },
  },
  search: {
    wrapper: {
      display: { base: 'none', md: 'block' },
      w: '256px', // Chakra UI-inspired width
      mx: 4, // Margin on sides
    },
    inputGroup: {
      h: '36px',
    },
    input: {
      h: '36px',
      bg: 'whiteAlpha.100',
      border: '1px solid',
      borderColor: 'whiteAlpha.200',
      borderRadius: 'lg',
      color: 'white',
      fontSize: 'sm',
      _placeholder: {
        color: 'whiteAlpha.600',
      },
      _focus: {
        bg: 'white',
        color: 'gray.800',
        borderColor: 'teal.500',
        _placeholder: {
          color: 'gray.400',
        },
      },
    },
    iconButton: {
      display: { base: 'flex', md: 'none' },
      variant: 'ghost' as const,
      h: '36px',
      w: '36px',
      minW: '36px',
    },
  },
  language: {
    button: {
      variant: 'ghost' as const,
      h: '36px',
      px: 3,
      gap: 1.5,
    },
  },
  login: {
    button: {
      variant: 'ghost' as const,
      h: '36px',
      px: 4,
      gap: 2,
    },
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
      spacing: 2,
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
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
              {/* First item: Главная */}
              {NAV_ITEMS[0] && (() => {
                const item = NAV_ITEMS[0];
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
              })()}

              {/* Second item: Catalog with MegaMenu */}
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

              {/* Rest of navigation items */}
              {NAV_ITEMS.slice(1).map((item) => {
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

              {/* Animated Indicator */}
              <Box
                {...styles.nav.indicator}
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                }}
              />
            </HStack>

            {/* Right Actions Group */}
            <HStack spacing={1} ml={{ base: 'auto', md: 6 }}>
              {/* Search Icon */}
              <IconButton
                aria-label="Search"
                icon={<FaSearch />}
                onClick={() => setIsSearchOpen(true)}
                variant="ghost"
                color="white"
                h="36px"
                w="36px"
                minW="36px"
                _hover={{ bg: 'whiteAlpha.200' }}
              />

              {/* Theme Toggle */}
              <IconButton
                aria-label="Toggle color mode"
                icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                onClick={toggleColorMode}
                {...styles.themeToggle}
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
              />

              {/* Language Dropdown (Desktop only) */}
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Language"
                  icon={<FaGlobe />}
                  variant="ghost"
                  color="white"
                  h="36px"
                  w="36px"
                  minW="36px"
                  display={{ base: 'none', md: 'flex' }}
                  _hover={{ bg: 'whiteAlpha.200' }}
                  _active={{ bg: 'whiteAlpha.300' }}
                />
                <MenuList>
                  <MenuItem>Русский (RU)</MenuItem>
                  <MenuItem>English (EN)</MenuItem>
                </MenuList>
              </Menu>

              {/* Login Button (Desktop only) */}
              <Button
                variant="outline"
                color="white"
                borderColor="white"
                h="36px"
                px={4}
                fontSize="sm"
                fontWeight="medium"
                display={{ base: 'none', md: 'flex' }}
                _hover={{
                  bg: 'whiteAlpha.200',
                  borderColor: 'white',
                }}
              >
                Войти
              </Button>
            </HStack>
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
                href="https://github.com/de-learning-hub/frontend/blob/main/CONTRIBUTING.md"
                isExternal
                color={styles.footer.text.color}
                fontSize={styles.footer.text.fontSize}
              >
                Contribute
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

      {/* Search Modal */}
      <Modal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pt={10} pb={6}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaSearch color="gray" />
              </InputLeftElement>
              <Input
                placeholder="Поиск по сайту..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </InputGroup>
            {/* TODO: Add search results here */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
