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
    views: 1243,
    likes: 45,
    dislikes: 2,
    comments: 12,
  },
  {
    id: 2,
    title: 'Основы SQL для Data Engineer',
    description: 'Полное руководство по SQL для начинающих дата инженеров. От базовых SELECT запросов до сложных аналитических функций и оптимизации.',
    techTag: 'SQL',
    level: 'beginner',
    date: '22 дек 2024',
    readingTime: '12 мин',
    views: 2856,
    likes: 128,
    dislikes: 5,
    comments: 34,
  },
  {
    id: 3,
    title: 'Построение Data Pipeline с dbt',
    description: 'Практическое руководство по созданию современного data pipeline используя dbt. Включает best practices и реальные примеры трансформаций.',
    techTag: 'dbt',
    level: 'intermediate',
    date: '20 дек 2024',
    readingTime: '15 мин',
    views: 1567,
    likes: 67,
    dislikes: 3,
    comments: 18,
  },
  {
    id: 4,
    title: 'Docker для Data Engineer',
    description: 'Изучаем Docker с нуля: контейнеризация приложений, создание образов, docker-compose для локальной разработки data pipelines.',
    techTag: 'Docker',
    level: 'beginner',
    date: '18 дек 2024',
    readingTime: '10 мин',
    views: 3421,
    likes: 156,
    dislikes: 8,
    comments: 45,
  },
  {
    id: 5,
    title: 'Оптимизация Spark Jobs',
    description: 'Продвинутые техники оптимизации Apache Spark приложений: партиционирование, кэширование, broadcast joins и настройка ресурсов.',
    techTag: 'Spark',
    level: 'advanced',
    date: '15 дек 2024',
    readingTime: '20 мин',
    views: 892,
    likes: 34,
    dislikes: 1,
    comments: 9,
  },
  {
    id: 6,
    title: 'PostgreSQL Performance Tuning',
    description: 'Глубокое погружение в настройку производительности PostgreSQL: индексы, vacuum, analyze, query планы и конфигурация памяти.',
    techTag: 'PostgreSQL',
    level: 'intermediate',
    date: '12 дек 2024',
    readingTime: '18 мин',
    views: 1789,
    likes: 89,
    dislikes: 4,
    comments: 23,
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
  latestMaterials: {
    wrapper: {
      py: '80px',
      px: { base: 4, md: 8 },
    },
    heading: {
      fontFamily: 'heading', // Montserrat
      fontSize: { base: '40px', md: '48px' },
      textAlign: 'center' as const,
      mb: 12,
      letterSpacing: '0.5px',
    },
  },
  popularTopics: {
    wrapper: {
      py: '80px',
      px: { base: 4, md: 8 },
    },
    heading: {
      fontFamily: 'heading', // Montserrat
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
      fontFamily: 'heading', // Montserrat
      fontSize: '48px',
      textAlign: 'center' as const,
      mb: 12,
    },
  },
} as const;

export const Home = () => {
  // Section backgrounds - soft off-white instead of pure white
  const sectionBg = useColorModeValue('gray.50', 'gray.900');
  const topicsSectionBg = useColorModeValue('white', 'gray.800');

  // Hero section colors
  const heroBg = useColorModeValue('white', 'gray.900');
  const heroHeadingColor = useColorModeValue('gray.900', 'white');
  const heroSubtitleColor = useColorModeValue('gray.600', 'gray.400');
  const heroStatsColor = useColorModeValue('gray.600', 'gray.400');

  // Search input colors
  const searchBg = useColorModeValue('white', 'gray.800');
  const searchBorderColor = useColorModeValue('gray.300', 'gray.600');
  const searchPlaceholderColor = useColorModeValue('gray.400', 'gray.500');
  const searchFocusBorderColor = useColorModeValue('teal.500', 'teal.400');

  // General colors
  const headingColor = useColorModeValue('gray.800', 'white');
  const tagBg = useColorModeValue('white', 'gray.700');
  const tagBorderColor = useColorModeValue('gray.200', 'gray.600');
  const tagColor = useColorModeValue('gray.700', 'gray.200');
  const tagCountColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <VStack spacing={0} align="stretch">
      {/* Hero Section */}
      <Box
        bgGradient={useColorModeValue(
          'radial(white 0%, gray.50 100%)',
          'radial(gray.900 0%, gray.900 100%)'
        )}
        py={{ base: '80px', md: '120px' }}
        px={{ base: 4, md: 8 }}
        textAlign="center"
      >
        <VStack spacing={0}>
          <Heading
            size="4xl"
            color={heroHeadingColor}
            lineHeight="1.1"
            letterSpacing="1px"
            mb={6}
          >
            DE LEARNING HUB
          </Heading>

          <Text
            fontSize={{ base: '18px', md: '20px' }}
            fontWeight="medium"
            color={heroSubtitleColor}
            lineHeight="1.3"
            mb={10}
            maxW="600px"
            mx="auto"
          >
            Открытая база знаний для Data Engineers. Создаётся сообществом, доступна всем бесплатно
          </Text>

          {/* Search bar */}
          <InputGroup maxW="600px" mb={8} size="lg">
            <InputLeftElement pointerEvents="none" h="100%">
              <FaSearch color={searchPlaceholderColor} />
            </InputLeftElement>
            <Input
              placeholder="Поиск по материалам..."
              bg={searchBg}
              border="2px solid"
              borderColor={searchBorderColor}
              h="56px"
              fontSize="16px"
              _placeholder={{ color: searchPlaceholderColor }}
              _hover={{
                borderColor: 'gray.400',
              }}
              _focus={{
                borderColor: searchFocusBorderColor,
                boxShadow: `0 0 0 1px ${searchFocusBorderColor}`,
              }}
              onClick={() => {
                // TODO: Open search modal or navigate to search page
              }}
            />
          </InputGroup>

          {/* Quick Links */}
          <Text
            fontSize="sm"
            color={heroSubtitleColor}
            mb={4}
          >
            Или начните с:
          </Text>
          <HStack spacing={4} mb={12}>
            <Button
              as={RouterLink}
              to="/catalog"
              variant="outline"
              size="md"
              leftIcon={<Text fontSize="18px">📚</Text>}
            >
              Материалы
            </Button>
            <Button
              as={RouterLink}
              to="/roadmaps"
              variant="outline"
              size="md"
              leftIcon={<Text fontSize="18px">🗺️</Text>}
            >
              Roadmaps
            </Button>
            <Button
              as={RouterLink}
              to="/interview"
              variant="outline"
              size="md"
              leftIcon={<Text fontSize="18px">💼</Text>}
            >
              Собесы
            </Button>
          </HStack>

          {/* Stats */}
          <HStack
            justify="center"
            gap={{ base: 3, md: 8 }}
            flexWrap="wrap"
            fontFamily="body"
            fontSize="14px"
            color={heroStatsColor}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <Text fontSize="20px">📚</Text>
              <Text>120+ статей</Text>
            </Box>

            <Text display={{ base: 'none', md: 'block' }} mx={2}>•</Text>

            <Box display="flex" alignItems="center" gap={2}>
              <Text fontSize="20px">📝</Text>
              <Text>200+ вопросов</Text>
            </Box>

            <Text display={{ base: 'none', md: 'block' }} mx={2}>•</Text>

            <Box display="flex" alignItems="center" gap={2}>
              <Text fontSize="20px">🚀</Text>
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

        {/* Single column layout like DEV.to */}
        <VStack spacing={4} align="stretch" maxW="800px" mx="auto">
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
              views={material.views}
              likes={material.likes}
              dislikes={material.dislikes}
              comments={material.comments}
            />
          ))}
        </VStack>

        <Box display="flex" justifyContent="center" mt={12}>
          <Button
            as={RouterLink}
            to="/catalog"
            variant="outline"
            size="lg"
          >
            Смотреть все материалы
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
              bg={useColorModeValue('white', 'gray.800')}
              borderWidth="2px"
              borderColor={useColorModeValue('gray.200', 'gray.700')}
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
                variant="primary"
                size="lg"
                w="100%"
              >
                {way.action}
              </Button>
            </Box>
          ))}
        </SimpleGrid>

        <Box display="flex" justifyContent="center" mt={12}>
          <Button
            as="a"
            href="https://github.com/de-learning-hub"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            leftIcon={<Text fontSize="20px">⭐</Text>}
          >
            Contribute on GitHub
          </Button>
        </Box>
      </Box>
    </VStack>
  );
};
