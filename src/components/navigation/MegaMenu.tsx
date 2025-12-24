import {
  Box,
  Grid,
  VStack,
  Heading,
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
    maxW: '1200px',
    w: 'full',
    borderRadius: 'lg',
    shadow: 'xl',
  },
  body: {
    p: 8,
  },
  grid: {
    columns: { base: 1, sm: 2, md: 3, lg: 4 },
    spacing: 6,
    w: 'full',
  },
  category: {
    wrapper: {
      align: 'stretch' as const,
      spacing: 3,
    },
    header: {
      wrapper: {
        align: 'center' as const,
        spacing: 2,
        mb: 2,
      },
      icon: {
        fontSize: '2xl',
      },
      title: {
        size: 'sm',
        fontWeight: 'bold',
      },
    },
    description: {
      fontSize: 'xs',
      mb: 3,
    },
  },
  topicList: {
    wrapper: {
      as: 'nav' as const,
      align: 'stretch' as const,
      spacing: 2,
      pl: 2,
    },
  },
} as const;

/**
 * MegaMenu component for category navigation
 * Displays categories and their topics in a popover dropdown
 */
export const MegaMenu: React.FC<MegaMenuProps> = ({
  trigger,
  categories,
  isOpen,
  onClose,
  onOpen,
}) => {
  const categoryBg = useColorModeValue('gray.50', 'gray.700');
  const linkColor = useColorModeValue('gray.700', 'gray.200');
  const linkHoverColor = useColorModeValue('blue.600', 'blue.300');
  const linkHoverBg = useColorModeValue('blue.50', 'blue.900');
  const descColor = useColorModeValue('gray.600', 'gray.400');

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
          <Grid {...styles.grid}>
            {categories
              .sort((a, b) => a.order - b.order)
              .map((category) => (
                <Box
                  key={category.id}
                  bg={categoryBg}
                  p={4}
                  borderRadius="md"
                  transition="all 0.2s"
                  _hover={{ shadow: 'md' }}
                >
                  <VStack {...styles.category.wrapper}>
                    {/* Category Header */}
                    <Box {...styles.category.header.wrapper} w="full">
                      <Text {...styles.category.header.icon}>
                        {category.icon}
                      </Text>
                      <Heading {...styles.category.header.title}>
                        {category.name}
                      </Heading>
                    </Box>

                    {/* Category Description */}
                    <Text color={descColor} {...styles.category.description}>
                      {category.description}
                    </Text>

                    {/* Topics List */}
                    <VStack {...styles.topicList.wrapper}>
                      {category.topics.map((topic) => (
                        <ChakraLink
                          key={topic.id}
                          as={RouterLink}
                          to={`/catalog/${category.slug}/${topic.slug}`}
                          onClick={onClose}
                          w="full"
                          px={3}
                          py={2}
                          borderRadius="md"
                          fontSize="sm"
                          fontWeight="medium"
                          color={linkColor}
                          transition="all 0.2s"
                          _hover={{
                            color: linkHoverColor,
                            bg: linkHoverBg,
                            textDecoration: 'none',
                            transform: 'translateX(4px)',
                          }}
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
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
                  </VStack>
                </Box>
              ))}
          </Grid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
