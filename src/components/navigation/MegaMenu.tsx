import { useState } from 'react';
import {
  Box,
  Flex,
  VStack,
  Text,
  Link as ChakraLink,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import type { Category } from '@/types';

// Types
interface MegaMenuProps {
  trigger: React.ReactElement;
  categories: Category[];
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

// Styles
const styles = {
  popoverContent: {
    maxW: '800px',
    w: 'full',
    borderRadius: 'lg',
    shadow: 'xl',
  },
  body: {
    p: 0,
  },
  container: {
    w: 'full',
    minH: '400px',
  },
  leftColumn: {
    w: '280px',
    borderRight: '2px solid',
    p: 4,
  },
  rightColumn: {
    flex: 1,
    p: 6,
  },
  categoryItem: {
    w: 'full',
    textAlign: 'left' as const,
  },
  topicLink: {
    w: 'full',
    px: 4,
    py: 2,
    borderRadius: 'md',
    fontSize: 'sm',
    fontWeight: 'medium',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightHeader: {
    fontSize: 'lg',
    fontWeight: 'bold',
    mb: 2,
  },
  rightDescription: {
    fontSize: 'sm',
    mb: 4,
  },
  topicsList: {
    spacing: 1,
    align: 'stretch' as const,
  },
} as const;

/**
 * MegaMenu component with two-level navigation
 * Left column: categories, Right column: topics on hover
 */
export const MegaMenu: React.FC<MegaMenuProps> = ({
  trigger,
  categories,
  isOpen,
  onClose,
  onOpen,
}) => {
  // State for tracking hovered category
  const [hoveredCategoryId, setHoveredCategoryId] = useState<string | null>(
    categories[0]?.id || null
  );

  // Theme colors
  const borderColor = useColorModeValue('gray.200', 'navy.400');
  const leftColumnBg = useColorModeValue('gray.50', 'navy.700');
  const categoryActiveBg = useColorModeValue('accent.100', 'whiteAlpha.100');
  const categoryActiveColor = useColorModeValue('accent.600', 'white');
  const linkColor = useColorModeValue('gray.700', 'gray.200');
  const linkHoverColor = useColorModeValue('accent.600', 'white');
  const linkHoverBg = useColorModeValue('accent.50', 'whiteAlpha.100');
  const descColor = useColorModeValue('gray.600', 'gray.400');

  // Get currently hovered category
  const activeCategory = categories.find((cat) => cat.id === hoveredCategoryId);

  return (
    <Popover
      isOpen={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      trigger="hover"
      openDelay={200}
      closeDelay={200}
      placement="bottom-start"
      isLazy
    >
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent {...styles.popoverContent}>
        <PopoverBody {...styles.body}>
          <Flex {...styles.container}>
            {/* Left Column - Categories */}
            <Box {...styles.leftColumn} borderColor={borderColor} bg={leftColumnBg}>
              <VStack spacing={1} align="stretch">
                {categories
                  .sort((a, b) => a.order - b.order)
                  .map((category) => {
                    const isActive = category.id === hoveredCategoryId;
                    return (
                      <Box
                        key={category.id}
                        {...styles.categoryItem}
                        layerStyle="menuItem"
                        role="button"
                        tabIndex={0}
                        aria-label={`View ${category.name} topics`}
                        {...(isActive && {
                          bg: categoryActiveBg,
                          color: categoryActiveColor,
                        })}
                        onMouseEnter={() => setHoveredCategoryId(category.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            setHoveredCategoryId(category.id);
                          }
                        }}
                      >
                        {category.name}
                      </Box>
                    );
                  })}
              </VStack>
            </Box>

            {/* Right Column - Topics */}
            <Box {...styles.rightColumn}>
              {activeCategory && (
                <Box>
                  {/* Category name and description */}
                  <Text {...styles.rightHeader}>{activeCategory.name}</Text>
                  <Text color={descColor} {...styles.rightDescription}>
                    {activeCategory.description}
                  </Text>

                  {/* Topics list */}
                  <VStack {...styles.topicsList}>
                    {activeCategory.topics.map((topic) => (
                      <ChakraLink
                        key={topic.id}
                        as={RouterLink}
                        to={`/catalog/${activeCategory.slug}/${topic.slug}`}
                        onClick={onClose}
                        {...styles.topicLink}
                        color={linkColor}
                        _hover={{
                          color: linkHoverColor,
                          bg: linkHoverBg,
                          textDecoration: 'none',
                          transform: 'translateX(4px)',
                        }}
                      >
                        <Text>{topic.name}</Text>
                        {topic.resourceCount > 0 && (
                          <Text
                            as="span"
                            fontSize="xs"
                            color={descColor}
                            fontWeight="normal"
                          >
                            {topic.resourceCount}
                          </Text>
                        )}
                      </ChakraLink>
                    ))}
                  </VStack>
                </Box>
              )}
            </Box>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
