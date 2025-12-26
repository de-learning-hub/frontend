import { Box, Badge, Heading, Text, VStack, Button, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

// Types
interface Feature {
  icon: string;
  text: string;
}

interface CardProps {
  variant?: 'material' | 'roadmap';

  // Common props
  title: string;
  description: string;

  // Material card props
  techTag?: string;
  level?: string;
  date?: string;
  readingTime?: string;

  // Roadmap card props
  levelBadge?: string;
  features?: Feature[];
  ctaText?: string;
  ctaLink?: string;

  // Optional
  onClick?: () => void;
}

// Styles
const styles = {
  card: {
    p: 6,
    borderWidth: '1px',
    borderRadius: '2xl', // 16px like Hashnode
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    _hover: {
      borderColor: 'teal.500',
      boxShadow: 'md',
    },
  },
  levelBadge: {
    fontFamily: 'body',
    fontWeight: 'semibold',
    fontSize: '12px',
    bg: 'purple.500',
    color: 'white',
    px: 4,
    py: 1.5,
    borderRadius: 'full', // pill shape
    textTransform: 'uppercase' as const,
    letterSpacing: '0.8px',
    display: 'inline-block',
    mb: 5,
  },
  badges: {
    display: 'flex',
    gap: 2,
    mb: 4, // 16px spacing to title (recommended for related components)
  },
  title: {
    fontFamily: 'body',
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '1.2',
    mb: 4,
  },
  materialTitle: {
    fontFamily: 'body',
    fontWeight: 'semibold',
    fontSize: 'lg', // 18px
    lineHeight: '1.25', // tighter line-height like Hashnode
    mb: 2, // 8px spacing to description (related elements)
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    sx: {
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
    },
  },
  description: {
    fontFamily: 'body',
    fontSize: '16px',
    lineHeight: '1.6',
    mb: 6,
  },
  materialDescription: {
    fontFamily: 'body',
    fontSize: '15px',
    lineHeight: '1.625', // improved readability
    mb: 5,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    sx: {
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
    },
  },
  features: {
    listStyleType: 'none',
    p: 0,
    m: 0,
    mb: 6,
  },
  featureItem: {
    fontFamily: 'body',
    fontSize: '14px',
    lineHeight: '2',
    display: 'flex',
    alignItems: 'center',
  },
  featureIcon: {
    mr: 2.5,
    fontSize: '18px',
    color: 'teal.500',
  },
  meta: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px', // 0.875rem like Hashnode metadata
    mt: 'auto',
  },
} as const;

/**
 * Reusable Card component with roadmap-inspired styling
 * Supports both material and roadmap card variants
 */
export const Card: React.FC<CardProps> = ({
  variant = 'material',
  title,
  description,
  techTag,
  level,
  date,
  readingTime,
  levelBadge,
  features,
  ctaText,
  ctaLink,
  onClick,
}) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardBorderColor = useColorModeValue('gray.200', 'gray.700');
  const titleColor = useColorModeValue('gray.900', 'white');
  const descColor = useColorModeValue('gray.700', 'gray.300');
  const featureColor = useColorModeValue('gray.600', 'gray.400');
  const metaColor = useColorModeValue('gray.500', 'gray.400');

  if (variant === 'roadmap') {
    return (
      <Box
        bg={cardBg}
        borderColor={cardBorderColor}
        {...styles.card}
        onClick={onClick}
      >
        {levelBadge && (
          <Badge {...styles.levelBadge}>
            {levelBadge}
          </Badge>
        )}

        <Heading as="h3" color={titleColor} {...styles.title}>
          {title}
        </Heading>

        <Text color={descColor} {...styles.description}>
          {description}
        </Text>

        {features && features.length > 0 && (
          <VStack align="start" {...styles.features}>
            {features.map((feature, idx) => (
              <Box key={idx} color={featureColor} {...styles.featureItem}>
                <Text {...styles.featureIcon}>{feature.icon}</Text>
                <Text>{feature.text}</Text>
              </Box>
            ))}
          </VStack>
        )}

        {ctaText && ctaLink && (
          <Button
            as={RouterLink}
            to={ctaLink}
            variant="primary"
            size="lg"
            w="100%"
          >
            {ctaText}
          </Button>
        )}
      </Box>
    );
  }

  // Material card variant
  return (
    <Box
      bg={cardBg}
      borderColor={cardBorderColor}
      {...styles.card}
      onClick={onClick}
      display="flex"
      flexDirection="column"
    >
      {(techTag || level) && (
        <Box {...styles.badges}>
          {techTag && <Badge variant="solid">{techTag}</Badge>}
          {level && <Badge variant={level}>{level}</Badge>}
        </Box>
      )}

      <Heading as="h3" color={titleColor} {...styles.materialTitle}>
        {title}
      </Heading>

      <Text color={descColor} {...styles.materialDescription}>
        {description}
      </Text>

      {(date || readingTime) && (
        <Box color={metaColor} {...styles.meta}>
          {date && <Text>📅 {date}</Text>}
          {readingTime && <Text>⏱ {readingTime} чтения</Text>}
        </Box>
      )}
    </Box>
  );
};
