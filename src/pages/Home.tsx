import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

// Mock data for latest materials
const latestMaterials = [
  {
    id: 1,
    title: 'Настройка Connections в Airflow',
    description: 'Подробное руководство по настройке connections в Apache Airflow. Рассмотрим UI, CLI и API подходы для эффективной работы с внешними системами.',
    techTag: 'Airflow',
    level: 'beginner',
    date: '24 дек 2024',
    readingTime: '8 мин',
  },
  {
    id: 2,
    title: 'Основы SQL для Data Engineer',
    description: 'Полное руководство по SQL для начинающих дата инженеров. От базовых SELECT запросов до сложных аналитических функций и оптимизации.',
    techTag: 'SQL',
    level: 'beginner',
    date: '22 дек 2024',
    readingTime: '12 мин',
  },
  {
    id: 3,
    title: 'Построение Data Pipeline с dbt',
    description: 'Практическое руководство по созданию современного data pipeline используя dbt. Включает best practices и реальные примеры трансформаций.',
    techTag: 'dbt',
    level: 'intermediate',
    date: '20 дек 2024',
    readingTime: '15 мин',
  },
  {
    id: 4,
    title: 'Docker для Data Engineer',
    description: 'Изучаем Docker с нуля: контейнеризация приложений, создание образов, docker-compose для локальной разработки data pipelines.',
    techTag: 'Docker',
    level: 'beginner',
    date: '18 дек 2024',
    readingTime: '10 мин',
  },
  {
    id: 5,
    title: 'Оптимизация Spark Jobs',
    description: 'Продвинутые техники оптимизации Apache Spark приложений: партиционирование, кэширование, broadcast joins и настройка ресурсов.',
    techTag: 'Spark',
    level: 'advanced',
    date: '15 дек 2024',
    readingTime: '20 мин',
  },
  {
    id: 6,
    title: 'PostgreSQL Performance Tuning',
    description: 'Глубокое погружение в настройку производительности PostgreSQL: индексы, vacuum, analyze, query планы и конфигурация памяти.',
    techTag: 'PostgreSQL',
    level: 'intermediate',
    date: '12 дек 2024',
    readingTime: '18 мин',
  },
];

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
  latestMaterials: {
    wrapper: {
      py: '80px',
      px: { base: 4, md: 8 },
    },
    heading: {
      fontFamily: 'heading', // Russo One
      fontSize: { base: '40px', md: '48px' },
      textAlign: 'center' as const,
      mb: 12,
      letterSpacing: '0.5px',
    },
    grid: {
      columns: { base: 1, md: 2, lg: 3 },
      gap: 6,
      maxW: '1280px',
      mx: 'auto',
    },
    card: {
      bg: 'white',
      _dark: { bg: 'gray.800' },
      borderWidth: '1px',
      borderColor: 'gray.200',
      _dark: { borderColor: 'gray.700' },
      borderRadius: '12px',
      p: 5,
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      _hover: {
        borderColor: 'teal.500',
        boxShadow: '0 8px 24px rgba(49,151,149,0.12)',
        transform: 'translateY(-4px)',
      },
    },
    badges: {
      display: 'flex',
      gap: 2,
      mb: 3,
    },
    title: {
      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: '20px',
      color: 'gray.900',
      _dark: { color: 'white' },
      my: 3,
      lineHeight: '1.3',
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
      fontSize: '14px',
      color: 'gray.600',
      _dark: { color: 'gray.400' },
      lineHeight: '1.5',
      mb: 4,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      sx: {
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
      },
    },
    meta: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '12px',
      color: 'gray.500',
    },
    ctaWrapper: {
      display: 'flex',
      justifyContent: 'center',
      mt: 12,
    },
    ctaButton: {
      fontFamily: 'body',
      fontWeight: 'semibold',
      fontSize: '16px',
      color: 'teal.600',
      bg: 'transparent',
      borderWidth: '2px',
      borderColor: 'teal.600',
      px: 8,
      py: 3,
      borderRadius: '8px',
      transition: 'all 0.2s ease',
      _hover: {
        bg: 'teal.50',
        _dark: { bg: 'teal.900' },
        borderColor: 'teal.700',
        color: 'teal.700',
      },
    },
  },
} as const;

export const Home = () => {
  const sectionBg = useColorModeValue('white', 'gray.900');
  const headingColor = useColorModeValue('gray.800', 'white');

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

      {/* Latest Materials Section */}
      <Box bg={sectionBg} {...styles.latestMaterials.wrapper}>
        <Heading {...styles.latestMaterials.heading} color={headingColor}>
          Последние материалы
        </Heading>

        <SimpleGrid {...styles.latestMaterials.grid}>
          {latestMaterials.map((material) => (
            <Box key={material.id} {...styles.latestMaterials.card}>
              <Box {...styles.latestMaterials.badges}>
                <Badge variant="solid">{material.techTag}</Badge>
                <Badge variant={material.level}>{material.level}</Badge>
              </Box>

              <Heading as="h3" {...styles.latestMaterials.title}>
                {material.title}
              </Heading>

              <Text {...styles.latestMaterials.description}>
                {material.description}
              </Text>

              <Box {...styles.latestMaterials.meta}>
                <Text>📅 {material.date}</Text>
                <Text>⏱ {material.readingTime} чтения</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        <Box {...styles.latestMaterials.ctaWrapper}>
          <Button
            as={RouterLink}
            to="/catalog"
            {...styles.latestMaterials.ctaButton}
          >
            Смотреть все материалы →
          </Button>
        </Box>
      </Box>

      {/* TODO: Popular Topics Section (Phase 5) */}
      {/* TODO: Roadmaps Preview Section (Phase 6) */}
    </VStack>
  );
};
