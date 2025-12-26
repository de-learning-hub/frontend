import { Box, Badge, Heading, Text, VStack, Button, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { IoTime, IoEye, IoHeart, IoThumbsDown, IoChatbubble, IoBookmark } from 'react-icons/io5';

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
  views?: number;
  likes?: number;
  dislikes?: number;
  comments?: number;

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
    mb: 3, // 12px spacing to description below
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
    fontWeight: 'bold', // 700 - dominant like DEV.to
    fontSize: 'xl', // 20px - larger, more prominent
    lineHeight: '1.3', // slightly relaxed for larger size
    mb: 3, // 12px spacing to tags below
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
  // Habr-style metrics footer
  metricsInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: 3, // 12px
    fontSize: 'sm', // 14px
    mb: 2, // 8px
  },
  metricsActions: {
    display: 'flex',
    alignItems: 'center',
    gap: 4, // 16px
    fontSize: 'sm', // 14px
  },
  metricItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 1, // 4px
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
  views,
  likes,
  dislikes,
  comments,
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

  // Material card variant - DEV.to style
  return (
    <Box
      bg={cardBg}
      borderColor={cardBorderColor}
      {...styles.card}
      onClick={onClick}
      display="flex"
      flexDirection="column"
    >
      {/* Date at top (like DEV.to author section) */}
      {date && (
        <Text fontSize="sm" color={metaColor} mb={3}>
          {date}
        </Text>
      )}

      {/* Title - large and dominant like DEV.to */}
      <Heading as="h2" color={titleColor} {...styles.materialTitle}>
        {title}
      </Heading>

      {/* Badges in one row - level first, then tech tags */}
      {(level || techTag) && (
        <Box {...styles.badges}>
          {level && <Badge variant={level}>{level}</Badge>}
          {techTag && <Badge variant="solid">{techTag}</Badge>}
        </Box>
      )}

      {/* Description */}
      <Text color={descColor} {...styles.materialDescription}>
        {description}
      </Text>

      {/* Metrics footer - Habr style */}
      <Box mt="auto">
        {/* Info row: reading time & views */}
        {(readingTime || views) && (
          <Box {...styles.metricsInfo} color={metaColor}>
            {readingTime && (
              <Box {...styles.metricItem}>
                <IoTime />
                <Text>{readingTime}</Text>
              </Box>
            )}
            {views !== undefined && (
              <Box {...styles.metricItem}>
                <IoEye />
                <Text>{views >= 1000 ? `${(views / 1000).toFixed(1)}k` : views}</Text>
              </Box>
            )}
          </Box>
        )}

        {/* Actions row: likes, dislikes, comments, bookmarks */}
        {(likes !== undefined || dislikes !== undefined || comments !== undefined) && (
          <Box {...styles.metricsActions} color={metaColor}>
            {likes !== undefined && (
              <Box {...styles.metricItem} cursor="pointer" _hover={{ opacity: 0.7 }}>
                <IoHeart />
                <Text>{likes}</Text>
              </Box>
            )}
            {dislikes !== undefined && (
              <Box {...styles.metricItem} cursor="pointer" _hover={{ opacity: 0.7 }}>
                <IoThumbsDown />
                <Text>{dislikes}</Text>
              </Box>
            )}
            {comments !== undefined && (
              <Box {...styles.metricItem} cursor="pointer" _hover={{ opacity: 0.7 }}>
                <IoChatbubble />
                <Text>{comments}</Text>
              </Box>
            )}
            <Box {...styles.metricItem} cursor="pointer" _hover={{ opacity: 0.7 }}>
              <IoBookmark />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
