import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

// Styles
const styles = {
  hero: {
    wrapper: {
      bgGradient: 'linear(135deg, teal.600 0%, teal.500 25%, purple.500 75%, purple.600 100%)',
      py: { base: '80px', md: '120px' },
      textAlign: 'center' as const,
      px: { base: 4, md: 8 },
    },
    heading: {
      fontFamily: 'heading', // Russo One
      fontSize: { base: '48px', md: '64px' },
      fontWeight: 'normal',
      color: 'white',
      lineHeight: '1.1',
      letterSpacing: '1px',
      textShadow: '0 2px 4px rgba(0,0,0,0.2)',
      mb: 6,
    },
    subtitle: {
      fontFamily: 'body', // Montserrat
      fontSize: { base: '18px', md: '20px' },
      fontWeight: 'normal',
      color: 'rgba(255,255,255,0.95)',
      lineHeight: '1.6',
      mb: 10,
      maxW: '600px',
      mx: 'auto',
    },
    button: {
      mb: 10,
    },
    stats: {
      wrapper: {
        justify: 'center' as const,
        gap: { base: 3, md: 8 },
        flexWrap: 'wrap' as const,
        fontFamily: 'body',
        fontSize: '14px',
        color: 'rgba(255,255,255,0.85)',
      },
      item: {
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      },
      icon: {
        fontSize: '20px',
      },
      separator: {
        display: { base: 'none', md: 'block' },
        mx: 2,
      },
    },
  },
} as const;

export const Home = () => {
  return (
    <VStack spacing={0} align="stretch">
      {/* Hero Section */}
      <Box {...styles.hero.wrapper}>
        <VStack spacing={0}>
          <Heading {...styles.hero.heading}>
            DE LEARNING HUB
          </Heading>

          <Text {...styles.hero.subtitle}>
            Русскоязычная база знаний для дата инженеров
          </Text>

          <Button
            as={RouterLink}
            to="/getting-started"
            variant="hero"
            {...styles.hero.button}
          >
            НАЧАТЬ ОБУЧЕНИЕ
          </Button>

          <HStack {...styles.hero.stats.wrapper}>
            <Box {...styles.hero.stats.item}>
              <Text {...styles.hero.stats.icon}>📚</Text>
              <Text>120+ статей</Text>
            </Box>

            <Text {...styles.hero.stats.separator}>•</Text>

            <Box {...styles.hero.stats.item}>
              <Text {...styles.hero.stats.icon}>📝</Text>
              <Text>200+ вопросов</Text>
            </Box>

            <Text {...styles.hero.stats.separator}>•</Text>

            <Box {...styles.hero.stats.item}>
              <Text {...styles.hero.stats.icon}>🚀</Text>
              <Text>5 roadmaps</Text>
            </Box>
          </HStack>
        </VStack>
      </Box>

      {/* TODO: Latest Materials Section (Phase 4) */}
      {/* TODO: Popular Topics Section (Phase 5) */}
      {/* TODO: Roadmaps Preview Section (Phase 6) */}
    </VStack>
  );
};
