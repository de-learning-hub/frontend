import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Button,
  Link as ChakraLink,
  useColorModeValue,
  Text,
  Divider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import type { NavItem } from '@/types';

// Types
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  currentPath: string;
  onCatalogClick: () => void;
}

// Styles
const styles = {
  drawer: {
    content: {
      maxW: '280px',
    },
  },
  header: {
    borderBottomWidth: '1px',
  },
  body: {
    pt: 6,
  },
  navList: {
    spacing: 2,
    align: 'stretch' as const,
    w: 'full',
  },
  catalogButton: {
    w: 'full',
    justifyContent: 'flex-start',
    size: 'lg' as const,
    variant: 'ghost' as const,
    fontWeight: 'semibold',
  },
  link: {
    w: 'full',
    px: 4,
    py: 3,
    borderRadius: 'md',
    fontSize: 'md',
    fontWeight: 'medium',
    transition: 'all 0.2s',
  },
  divider: {
    my: 3,
  },
} as const;

/**
 * Mobile navigation menu with burger icon
 * Displays navigation links in a drawer on mobile devices
 */
export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  currentPath,
  onCatalogClick,
}) => {
  const linkColor = useColorModeValue('gray.700', 'gray.200');
  const linkHoverColor = useColorModeValue('blue.600', 'blue.300');
  const linkHoverBg = useColorModeValue('blue.50', 'blue.900');
  const linkActiveBg = useColorModeValue('blue.100', 'blue.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleCatalogClick = () => {
    onClose();
    onCatalogClick();
  };

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent {...styles.drawer.content}>
        <DrawerCloseButton />
        <DrawerHeader {...styles.header} borderColor={borderColor}>
          <Text
            fontSize="lg"
            fontWeight="bold"
            bgGradient="linear(to-r, blue.400, cyan.400)"
            bgClip="text"
          >
            📚 DE Learning Hub
          </Text>
        </DrawerHeader>

        <DrawerBody {...styles.body}>
          <VStack {...styles.navList}>
            {/* Catalog Button */}
            <Button onClick={handleCatalogClick} {...styles.catalogButton}>
              Каталог 📚
            </Button>

            <Divider {...styles.divider} borderColor={borderColor} />

            {/* Navigation Links */}
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <ChakraLink
                  key={item.path}
                  as={Link}
                  to={item.path}
                  onClick={onClose}
                  {...styles.link}
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
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
