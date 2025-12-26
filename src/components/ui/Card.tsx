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
    p: 8,
    borderWidth: '2px',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    _hover: {
      borderColor: 'teal.500',
      boxShadow: '0 12px 32px rgba(49,151,149,0.15)',
      transform: 'translateY(-4px)',
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
    borderRadius: '6px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.8px',
    display: 'inline-block',
    mb: 5,
  },
  badges: {
    display: 'flex',
    gap: 2,
    mb: 4,
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
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '1.3',
    mb: 4,
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
    lineHeight: '1.5',
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
    fontSize: '13px',
    mt: 'auto',
  },
  ctaButton: {
    fontFamily: 'body',
    fontWeight: 'semibold',
    fontSize: '16px',
    w: '100%',
    bg: 'teal.500',
    color: 'white',
    px: 6,
    py: 3.5,
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    _hover: {
      bg: 'teal.600',
      boxShadow: '0 4px 12px rgba(49,151,149,0.3)',
    },
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
  const cardBg = useColorModeValue(
    'linear(135deg, teal.50, purple.50)',
    'linear(135deg, gray.800, gray.700)'
  );
  const cardBorderColor = useColorModeValue('teal.200', 'teal.700');
  const titleColor = useColorModeValue('gray.900', 'white');
  const descColor = useColorModeValue('gray.700', 'gray.300');
  const featureColor = useColorModeValue('gray.600', 'gray.400');
  const metaColor = useColorModeValue('gray.500', 'gray.400');

  if (variant === 'roadmap') {
    return (
      <Box
        bgGradient={cardBg}
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
            {...styles.ctaButton}
          >
            {ctaText}
          </Button>
        )}
      </Box>
    );
  }

  // Material card variant (with roadmap styling)
  return (
    <Box
      bgGradient={cardBg}
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
