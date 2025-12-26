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
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import { IoLibrary, IoDocument, IoRocket, IoCreate, IoConstruct, IoMegaphone, IoStar } from 'react-icons/io5';
import { Card } from '@/components/ui';
import { useState } from 'react';

// Mock data for latest materials
const latestMaterials = [
  {
    id: 1,
    title: 'Настройка Connections в Airflow',
    description: 'Подробное руководство по настройке connections в Apache Airflow. Рассмотрим UI, CLI и API подходы для эффективной работы с внешними системами.',
    techTag: 'Airflow',
    date: '24 дек 2024',
    readingTime: '8 мин',
    views: 1243,
    comments: 12,
  },
  {
    id: 2,
    title: 'Основы SQL для Data Engineer',
    description: 'Полное руководство по SQL для начинающих дата инженеров. От базовых SELECT запросов до сложных аналитических функций и оптимизации.',
    techTag: 'SQL',
    date: '22 дек 2024',
    readingTime: '12 мин',
    views: 2856,
    comments: 34,
  },
  {
    id: 3,
    title: 'Построение Data Pipeline с dbt',
    description: 'Практическое руководство по созданию современного data pipeline используя dbt. Включает best practices и реальные примеры трансформаций.',
    techTag: 'dbt',
    date: '20 дек 2024',
    readingTime: '15 мин',
    views: 1567,
    comments: 18,
  },
];

// Data for contribution cards
const contributionWays = [
  {
    id: 1,
    icon: 'create',
    title: 'Добавь статью',
    description: 'Поделись своими знаниями и опытом. Напиши статью о технологии, которую хорошо знаешь',
    action: 'Написать статью',
    link: 'https://github.com/pipecraft-net/pipecraft/blob/main/CONTRIBUTING.md',
  },
  {
    id: 2,
    icon: 'construct',
    title: 'Улучши материал',
    description: 'Заметил ошибку или неточность? Дополни существующий материал своим опытом',
    action: 'Предложить улучшение',
    link: 'https://github.com/pipecraft-net/pipecraft/issues',
  },
  {
    id: 3,
    icon: 'megaphone',
    title: 'Поделись проектом',
    description: 'Расскажи коллегам о проекте. Чем больше нас, тем качественнее база знаний',
    action: 'Поделиться',
    link: 'https://github.com/pipecraft-net/pipecraft',
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

// Icon mapper for contribution cards
const getContributionIcon = (iconName: string) => {
  const iconProps = { fontSize: '48px', mb: 4 };
  switch (iconName) {
    case 'create':
      return <IoCreate {...iconProps} />;
    case 'construct':
      return <IoConstruct {...iconProps} />;
    case 'megaphone':
      return <IoMegaphone {...iconProps} />;
    default:
      return null;
  }
};

export const Home = () => {
  // Search filter state
  const [searchFilter, setSearchFilter] = useState('all');

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

  // Get filter label
  const getFilterLabel = () => {
    switch (searchFilter) {
      case 'materials':
        return 'Материалы';
      case 'roadmaps':
        return 'Roadmaps';
      case 'interviews':
        return 'Собесы';
      default:
        return 'Всё';
    }
  };

  return (
    <VStack spacing={0} align="stretch">
      {/* Hero Section */}
      <Box
        bg={heroBg}
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
            PIPECRAFT
          </Heading>

          <Text
            fontSize={{ base: '18px', md: '20px' }}
            fontWeight="medium"
            color={heroSubtitleColor}
            lineHeight="1.3"
            mb={6}
            maxW="600px"
            mx="auto"
          >
            Мастерство Data Engineering. Roadmaps, статьи и подготовка к собесам
          </Text>

          {/* Stats - social proof */}
          <HStack
            justify="center"
            gap={{ base: 3, md: 6 }}
            flexWrap="wrap"
            fontFamily="body"
            fontSize="sm"
            color={heroStatsColor}
            mb={6}
          >
            <Box display="flex" alignItems="center" gap={1.5}>
              <IoLibrary fontSize="16px" />
              <Text>120+ статей</Text>
            </Box>

            <Text display={{ base: 'none', md: 'block' }}>•</Text>

            <Box display="flex" alignItems="center" gap={1.5}>
              <IoDocument fontSize="16px" />
              <Text>200+ вопросов</Text>
            </Box>

            <Text display={{ base: 'none', md: 'block' }}>•</Text>

            <Box display="flex" alignItems="center" gap={1.5}>
              <IoRocket fontSize="16px" />
              <Text>5 roadmaps</Text>
            </Box>
          </HStack>

          {/* Search bar with integrated filter */}
          <InputGroup maxW="600px" size="lg">
            <InputLeftElement pointerEvents="none" h="56px">
              <FaSearch color={searchPlaceholderColor} />
            </InputLeftElement>
            <Input
              placeholder="Поиск по материалам..."
              bg={searchBg}
              border="2px solid"
              borderColor={searchBorderColor}
              h="56px"
              fontSize="16px"
              pr="140px" // Space for filter dropdown
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
            <InputRightElement h="56px" w="auto" pr={2}>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  size="sm"
                  rightIcon={<FaChevronDown />}
                  fontWeight="medium"
                  fontSize="14px"
                  h="40px"
                  px={3}
                  _hover={{
                    bg: useColorModeValue('gray.100', 'gray.700'),
                  }}
                >
                  {getFilterLabel()}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => setSearchFilter('all')}>
                    Всё
                  </MenuItem>
                  <MenuItem onClick={() => setSearchFilter('materials')}>
                    Материалы
                  </MenuItem>
                  <MenuItem onClick={() => setSearchFilter('roadmaps')}>
                    Roadmaps
                  </MenuItem>
                  <MenuItem onClick={() => setSearchFilter('interviews')}>
                    Собесы
                  </MenuItem>
                </MenuList>
              </Menu>
            </InputRightElement>
          </InputGroup>
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
              date={material.date}
              readingTime={material.readingTime}
              views={material.views}
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
          Pipecraft создаётся силами сообщества. Каждый может внести свой вклад
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
              {getContributionIcon(way.icon)}
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
            href="https://github.com/pipecraft-net/pipecraft"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            leftIcon={<IoStar />}
          >
            Contribute on GitHub
          </Button>
        </Box>
      </Box>
    </VStack>
  );
};
