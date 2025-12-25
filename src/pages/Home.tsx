import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Flex,
  Tag,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { Card } from '@/components/ui';

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

// Data for contribution cards
const contributionWays = [
  {
    id: 1,
    icon: '✍️',
    title: 'Добавь статью',
    description: 'Поделись своими знаниями и опытом. Напиши статью о технологии, которую хорошо знаешь',
    action: 'Написать статью',
    link: 'https://github.com/de-learning-hub/frontend/blob/main/CONTRIBUTING.md',
  },
  {
    id: 2,
    icon: '🔧',
    title: 'Улучши материал',
    description: 'Заметил ошибку или неточность? Дополни существующий материал своим опытом',
    action: 'Предложить улучшение',
    link: 'https://github.com/de-learning-hub/frontend/issues',
  },
  {
    id: 3,
    icon: '📢',
    title: 'Поделись проектом',
    description: 'Расскажи коллегам о проекте. Чем больше нас, тем качественнее база знаний',
    action: 'Поделиться',
    link: 'https://github.com/de-learning-hub',
  },
];

// Mock data for popular topics
const popularTopics = [
  { tag: 'Apache Airflow', count: 45, slug: 'airflow' },
  { tag: 'Python', count: 40, slug: 'python' },
  { tag: 'ETL', count: 35, slug: 'etl' },
  { tag: 'dbt', count: 32, slug: 'dbt' },
  { tag: 'PostgreSQL', count: 28, slug: 'postgresql' },
  { tag: 'Docker', count: 24, slug: 'docker' },
  { tag: 'Kubernetes', count: 18, slug: 'kubernetes' },
  { tag: 'Spark', count: 15, slug: 'spark' },
  { tag: 'ClickHouse', count: 12, slug: 'clickhouse' },
  { tag: 'Kafka', count: 10, slug: 'kafka' },
  { tag: 'MongoDB', count: 9, slug: 'mongodb' },
  { tag: 'Redis', count: 8, slug: 'redis' },
  { tag: 'Snowflake', count: 7, slug: 'snowflake' },
  { tag: 'BigQuery', count: 6, slug: 'bigquery' },
  { tag: 'Terraform', count: 5, slug: 'terraform' },
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
      borderWidth: '1px',
      borderColor: 'gray.200',
      borderRadius: '12px',
      p: 5,
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      _dark: {
        bg: 'gray.800',
        borderColor: 'gray.700',
      },
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
  popularTopics: {
    wrapper: {
      py: '80px',
      px: { base: 4, md: 8 },
    },
    heading: {
      fontFamily: 'heading', // Russo One
      fontSize: '48px',
      textAlign: 'center' as const,
      mb: 12,
    },
    tagsContainer: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: 4,
      justifyContent: 'center',
      maxW: '900px',
      mx: 'auto',
    },
    tag: {
      fontFamily: 'body',
      fontWeight: 'medium',
      fontSize: '14px',
      px: 5,
      py: 2.5,
      borderRadius: '24px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      _hover: {
        bg: 'teal.500',
        color: 'white',
        borderColor: 'teal.500',
        transform: 'scale(1.05)',
      },
    },
    count: {
      ml: 1.5,
    },
  },
  roadmaps: {
    wrapper: {
      py: '80px',
      px: { base: 4, md: 8 },
    },
    heading: {
      fontFamily: 'heading', // Russo One
      fontSize: '48px',
      textAlign: 'center' as const,
      mb: 12,
    },
    grid: {
      columns: { base: 1, md: 2 },
      gap: 8,
      maxW: '1000px',
      mx: 'auto',
    },
    card: {
      p: 8,
      borderWidth: '2px',
      borderRadius: '16px',
      transition: 'all 0.2s ease',
      _hover: {
        borderColor: 'teal.500',
        boxShadow: '0 12px 32px rgba(49,151,149,0.15)',
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
    title: {
      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: '28px',
      lineHeight: '1.2',
      mb: 4,
    },
    description: {
      fontFamily: 'body',
      fontSize: '16px',
      lineHeight: '1.6',
      mb: 6,
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
    ctaWrapper: {
      display: 'flex',
      justifyContent: 'center',
      mt: 12,
    },
    viewAllButton: {
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
  const topicsSectionBg = useColorModeValue('gray.50', 'gray.800');
  const headingColor = useColorModeValue('gray.800', 'white');
  const tagBg = useColorModeValue('white', 'gray.700');
  const tagBorderColor = useColorModeValue('gray.200', 'gray.600');
  const tagColor = useColorModeValue('gray.700', 'gray.200');
  const tagCountColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <VStack spacing={0} align="stretch">
      {/* Hero Section */}
      <Box {...styles.hero.wrapper}>
        <VStack spacing={0}>
          <Heading {...styles.hero.heading}>
            DE LEARNING HUB
          </Heading>

          <Text {...styles.hero.subtitle}>
            Открытая база знаний для Data Engineers. Создаётся сообществом, доступна всем бесплатно
          </Text>

          {/* Search bar */}
          <InputGroup maxW="600px" mb={6} size="lg">
            <InputLeftElement pointerEvents="none" h="100%">
              <FaSearch color="rgba(255,255,255,0.6)" />
            </InputLeftElement>
            <Input
              placeholder="Поиск по статьям, roadmaps, вопросам..."
              bg="whiteAlpha.200"
              border="2px solid"
              borderColor="whiteAlpha.300"
              color="white"
              h="56px"
              fontSize="16px"
              _placeholder={{ color: 'whiteAlpha.700' }}
              _hover={{
                bg: 'whiteAlpha.300',
                borderColor: 'whiteAlpha.400',
              }}
              _focus={{
                bg: 'white',
                color: 'gray.800',
                borderColor: 'teal.400',
                _placeholder: { color: 'gray.400' },
              }}
              onClick={() => {
                // TODO: Open search modal or navigate to search page
              }}
            />
          </InputGroup>

          {/* CTA Buttons */}
          <HStack spacing={4} mb={10}>
            <Button
              as={RouterLink}
              to="/catalog"
              variant="hero"
            >
              К КАТАЛОГУ МАТЕРИАЛОВ
            </Button>
            <Button
              as={RouterLink}
              to="/about"
              variant="outline"
              color="white"
              borderColor="white"
              h="48px"
              px={8}
              fontSize="14px"
              fontWeight="semibold"
              letterSpacing="0.5px"
              _hover={{
                bg: 'whiteAlpha.200',
                borderColor: 'white',
              }}
            >
              О ПРОЕКТЕ
            </Button>
          </HStack>

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
            <Card
              key={material.id}
              variant="material"
              title={material.title}
              description={material.description}
              techTag={material.techTag}
              level={material.level}
              date={material.date}
              readingTime={material.readingTime}
            />
          ))}
        </SimpleGrid>

        <Box {...styles.latestMaterials.ctaWrapper}>
          <Button
            as={RouterLink}
            to="/catalog"
            {...styles.latestMaterials.ctaButton}
          >
            Смотреть материалы
          </Button>
        </Box>
      </Box>

      {/* Popular Topics Section */}
      <Box bg={topicsSectionBg} {...styles.popularTopics.wrapper}>
        <Heading {...styles.popularTopics.heading} color={headingColor}>
          Популярные темы
        </Heading>

        <Flex {...styles.popularTopics.tagsContainer}>
          {popularTopics.map((topic) => (
            <Tag
              key={topic.slug}
              as={RouterLink}
              to={`/catalog?tag=${topic.slug}`}
              bg={tagBg}
              borderWidth="1px"
              borderColor={tagBorderColor}
              color={tagColor}
              {...styles.popularTopics.tag}
            >
              {topic.tag}
              <Text as="span" color={tagCountColor} {...styles.popularTopics.count}>
                ({topic.count})
              </Text>
            </Tag>
          ))}
        </Flex>
      </Box>

      {/* Contribution Section */}
      <Box bg={sectionBg} {...styles.roadmaps.wrapper}>
        <Heading {...styles.roadmaps.heading} color={headingColor}>
          Помоги проекту расти
        </Heading>

        <Text
          textAlign="center"
          fontSize="18px"
          color={useColorModeValue('gray.600', 'gray.400')}
          maxW="700px"
          mx="auto"
          mb={12}
        >
          DE Learning Hub создаётся силами сообщества. Каждый может внести свой вклад
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} maxW="1200px" mx="auto" mb={12}>
          {contributionWays.map((way) => (
            <Box
              key={way.id}
              p={8}
              bgGradient={useColorModeValue(
                'linear(135deg, teal.50, purple.50)',
                'linear(135deg, gray.800, gray.700)'
              )}
              borderWidth="2px"
              borderColor={useColorModeValue('teal.200', 'teal.700')}
              borderRadius="16px"
              transition="all 0.2s ease"
              _hover={{
                borderColor: 'teal.500',
                boxShadow: '0 12px 32px rgba(49,151,149,0.15)',
                transform: 'translateY(-4px)',
              }}
            >
              <Text fontSize="48px" mb={4}>{way.icon}</Text>
              <Heading
                as="h3"
                fontSize="24px"
                fontWeight="bold"
                mb={3}
                color={headingColor}
              >
                {way.title}
              </Heading>
              <Text
                fontSize="16px"
                lineHeight="1.6"
                mb={6}
                color={useColorModeValue('gray.700', 'gray.300')}
              >
                {way.description}
              </Text>
              <Button
                as="a"
                href={way.link}
                target="_blank"
                rel="noopener noreferrer"
                w="100%"
                bg="teal.500"
                color="white"
                fontWeight="semibold"
                fontSize="16px"
                px={6}
                py={3.5}
                borderRadius="8px"
                transition="all 0.2s ease"
                _hover={{
                  bg: 'teal.600',
                  boxShadow: '0 4px 12px rgba(49,151,149,0.3)',
                }}
              >
                {way.action}
              </Button>
            </Box>
          ))}
        </SimpleGrid>

        <Box {...styles.roadmaps.ctaWrapper}>
          <Button
            as="a"
            href="https://github.com/de-learning-hub"
            target="_blank"
            rel="noopener noreferrer"
            fontFamily="body"
            fontWeight="semibold"
            fontSize="16px"
            bg="gray.800"
            color="white"
            px={8}
            py={3}
            borderRadius="8px"
            transition="all 0.2s ease"
            leftIcon={<Text fontSize="20px">⭐</Text>}
            _hover={{
              bg: 'gray.900',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
            _dark={{
              bg: 'whiteAlpha.200',
              _hover: {
                bg: 'whiteAlpha.300',
              },
            }}
          >
            Contribute on GitHub
          </Button>
        </Box>
      </Box>
    </VStack>
  );
};
