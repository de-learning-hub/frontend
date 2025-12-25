import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Card,
  CardBody,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { categories, resources, stats } from '@/data/mockData';

export const Home = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardHoverBg = useColorModeValue('gray.50', 'gray.700');
  const headingColor = useColorModeValue('navy.500', 'gray.100');
  const latestResources = resources.slice(0, 5);

  // Category color mapping
  const categoryColors: Record<string, string> = {
    'SQL': 'blue',
    'Python': 'green',
    'Apache Airflow': 'cyan',
    'Apache Spark': 'orange',
    'Базы данных': 'purple',
    'Docker & Kubernetes': 'blue',
    'Data Modeling': 'red',
    'CI/CD': 'gray',
  };

  const difficultyColors: Record<string, string> = {
    'Junior': 'green',
    'Middle': 'orange',
    'Senior': 'red',
  };

  return (
    <VStack spacing={12} align="stretch">
      {/* Hero Section */}
      <Box textAlign="center" py={8}>
        <Heading
          as="h1"
          size="2xl"
          color={headingColor}
          mb={4}
        >
          Добро пожаловать в DE Learning Hub
        </Heading>
        <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
          Систематизированная база знаний для русскоязычных Data Engineers.
          <br />
          Обучающие материалы, roadmaps и вопросы для подготовки к собеседованиям.
        </Text>
      </Box>

      {/* Stats */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
        <Card bg={cardBg} shadow="md" transition="all 0.3s" _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}>
          <CardBody>
            <Stat>
              <StatLabel>Ресурсов в каталоге</StatLabel>
              <StatNumber color="accent.500">{stats.totalResources}</StatNumber>
              <StatHelpText>Статьи, видео, курсы</StatHelpText>
            </Stat>
          </CardBody>
        </Card>
        <Card bg={cardBg} shadow="md" transition="all 0.3s" _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}>
          <CardBody>
            <Stat>
              <StatLabel>Категорий</StatLabel>
              <StatNumber color="brand.500">{stats.totalCategories}</StatNumber>
              <StatHelpText>SQL, Python, Airflow...</StatHelpText>
            </Stat>
          </CardBody>
        </Card>
        <Card bg={cardBg} shadow="md" transition="all 0.3s" _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}>
          <CardBody>
            <Stat>
              <StatLabel>Вопросов для собесов</StatLabel>
              <StatNumber color="brand.600">{stats.totalQuestions}</StatNumber>
              <StatHelpText>По всем темам</StatHelpText>
            </Stat>
          </CardBody>
        </Card>
        <Card bg={cardBg} shadow="md" transition="all 0.3s" _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}>
          <CardBody>
            <Stat>
              <StatLabel>Последнее обновление</StatLabel>
              <StatNumber fontSize="xl">{stats.lastUpdate}</StatNumber>
              <StatHelpText>Контент актуален</StatHelpText>
            </Stat>
          </CardBody>
        </Card>
      </SimpleGrid>

      {/* Popular Categories */}
      <Box>
        <Heading as="h2" size="lg" mb={6}>
          🎯 Популярные категории
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
          {categories.map((category) => (
            <LinkBox key={category.id}>
              <Card
                bg={cardBg}
                shadow="md"
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-8px)',
                  shadow: 'xl',
                  bg: cardHoverBg,
                }}
                cursor="pointer"
              >
                <CardBody textAlign="center">
                  <VStack spacing={3}>
                    <Text fontSize="4xl">{category.icon}</Text>
                    <LinkOverlay as={Link} to="/catalog">
                      <Heading size="md">{category.name}</Heading>
                    </LinkOverlay>
                    <Text fontSize="sm" color="gray.500" noOfLines={2}>
                      {category.description}
                    </Text>
                    <Badge colorScheme={categoryColors[category.name] || 'gray'} px={3} py={1} borderRadius="full">
                      {category.resourceCount} материалов
                    </Badge>
                  </VStack>
                </CardBody>
              </Card>
            </LinkBox>
          ))}
        </SimpleGrid>
      </Box>

      {/* Latest Resources */}
      <Box>
        <Heading as="h2" size="lg" mb={6}>
          🆕 Последние добавленные ресурсы
        </Heading>
        <VStack spacing={4} align="stretch">
          {latestResources.map((resource) => (
            <Card
              key={resource.id}
              bg={cardBg}
              shadow="md"
              transition="all 0.3s"
              _hover={{
                transform: 'translateX(4px)',
                shadow: 'lg',
                bg: cardHoverBg,
              }}
            >
              <CardBody>
                <HStack justify="space-between" align="start" spacing={4}>
                  <VStack align="start" flex={1} spacing={2}>
                    <LinkOverlay href={resource.url} isExternal>
                      <Heading size="md">{resource.title}</Heading>
                    </LinkOverlay>
                    <Text color="gray.500">{resource.description}</Text>
                    <HStack spacing={2} fontSize="sm" color="gray.400">
                      <Text>Источник: {resource.source}</Text>
                      <Text>•</Text>
                      <Text>{resource.dateAdded}</Text>
                    </HStack>
                  </VStack>
                  <VStack spacing={2} minW="120px">
                    <Badge colorScheme={categoryColors[resource.category] || 'gray'} fontSize="xs">
                      {resource.category}
                    </Badge>
                    <Badge colorScheme={difficultyColors[resource.difficulty]} fontSize="xs">
                      {resource.difficulty}
                    </Badge>
                    <Badge colorScheme="gray" fontSize="xs">
                      {resource.type}
                    </Badge>
                  </VStack>
                </HStack>
              </CardBody>
            </Card>
          ))}
        </VStack>
        <Box textAlign="center" mt={6}>
          <Link to="/catalog">
            <Badge
              colorScheme="blue"
              fontSize="md"
              px={6}
              py={2}
              borderRadius="full"
              cursor="pointer"
              transition="all 0.3s"
              _hover={{ transform: 'scale(1.05)' }}
            >
              Смотреть все ресурсы →
            </Badge>
          </Link>
        </Box>
      </Box>
    </VStack>
  );
};
