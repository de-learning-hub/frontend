import {
  Box,
  VStack,
  Grid,
  Heading,
  Text,
  Link as ChakraLink,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { CATEGORIES } from '@/constants';

// Styles
const styles = {
  header: {
    mb: 8,
  },
  grid: {
    columns: { base: 1, md: 2, lg: 3 },
    spacing: 8,
  },
  category: {
    wrapper: {
      p: 6,
      borderRadius: 'lg',
      borderWidth: '1px',
      transition: 'all 0.3s',
    },
    header: {
      wrapper: {
        align: 'center' as const,
        spacing: 3,
        mb: 4,
      },
      icon: {
        fontSize: '3xl',
      },
      title: {
        size: 'lg',
        fontWeight: 'bold',
      },
    },
    description: {
      fontSize: 'sm',
      mb: 4,
    },
    topicList: {
      spacing: 2,
      align: 'stretch' as const,
      pl: 2,
    },
    topicLink: {
      w: 'full',
      px: 3,
      py: 2,
      borderRadius: 'md',
      fontSize: 'sm',
      fontWeight: 'medium',
      transition: 'all 0.2s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
} as const;

/**
 * Catalog page displaying all categories and topics
 */
export const Catalog = () => {
  const categoryBg = useColorModeValue('white', 'gray.800');
  const categoryHoverBg = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const linkColor = useColorModeValue('gray.700', 'gray.200');
  const linkHoverColor = useColorModeValue('blue.600', 'blue.300');
  const linkHoverBg = useColorModeValue('blue.50', 'blue.900');
  const descColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <VStack spacing={8} align="stretch">
      {/* Header */}
      <Box {...styles.header}>
        <Heading
          as="h1"
          size="xl"
          mb={2}
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
        >
          📚 Каталог тем
        </Heading>
        <Text fontSize="lg" color={descColor}>
          Структурированные материалы по Data Engineering
        </Text>
      </Box>

      {/* Categories Grid */}
      <Grid {...styles.grid}>
        {CATEGORIES.sort((a, b) => a.order - b.order).map((category) => (
          <Box
            key={category.id}
            {...styles.category.wrapper}
            bg={categoryBg}
            borderColor={borderColor}
            _hover={{
              shadow: 'lg',
              bg: categoryHoverBg,
              transform: 'translateY(-4px)',
            }}
          >
            {/* Category Header */}
            <Box {...styles.category.header.wrapper}>
              <Text {...styles.category.header.icon}>{category.icon}</Text>
              <Heading {...styles.category.header.title}>
                {category.name}
              </Heading>
            </Box>

            {/* Category Description */}
            <Text color={descColor} {...styles.category.description}>
              {category.description}
            </Text>

            {/* Topics List */}
            <VStack {...styles.category.topicList}>
              {category.topics.map((topic) => (
                <ChakraLink
                  key={topic.id}
                  as={RouterLink}
                  to={`/catalog/${category.slug}/${topic.slug}`}
                  {...styles.category.topicLink}
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
        ))}
      </Grid>
    </VStack>
  );
};
