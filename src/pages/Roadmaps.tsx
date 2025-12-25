import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Badge,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';

export const Roadmaps = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('navy.500', 'gray.100');

  const comingRoadmaps = [
    {
      id: 1,
      title: 'Junior → Middle Data Engineer',
      description: 'Структурированный путь для роста от Junior до Middle',
      duration: '6-12 месяцев',
      icon: '🚀',
    },
    {
      id: 2,
      title: 'Middle → Senior Data Engineer',
      description: 'Глубокое погружение в архитектуру и оптимизацию',
      duration: '12-18 месяцев',
      icon: '⚡',
    },
    {
      id: 3,
      title: 'Переход в Data Engineering',
      description: 'Для специалистов из смежных областей',
      duration: '3-6 месяцев',
      icon: '🔄',
    },
  ];

  return (
    <VStack spacing={10} align="stretch">
      {/* Empty State Hero */}
      <Center py={12}>
        <VStack spacing={6}>
          <Text fontSize="6xl">🗺️</Text>
          <Heading
            as="h1"
            size="xl"
            textAlign="center"
            color={headingColor}
          >
            Roadmaps для Data Engineers
          </Heading>
          <Text fontSize="lg" color="gray.500" textAlign="center" maxW="600px">
            Структурированные пути обучения с подобранными материалами для каждого уровня
          </Text>
          <Badge colorScheme="orange" fontSize="md" px={4} py={2} borderRadius="full">
            Скоро • Phase 3
          </Badge>
        </VStack>
      </Center>

      {/* Coming Soon Cards */}
      <Box>
        <Heading as="h2" size="lg" mb={6}>
          📋 Что будет в roadmaps
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {comingRoadmaps.map((roadmap) => (
            <Card
              key={roadmap.id}
              bg={cardBg}
              shadow="md"
              transition="all 0.3s"
              _hover={{ transform: 'translateY(-4px)', shadow: 'xl' }}
            >
              <CardBody textAlign="center">
                <VStack spacing={4}>
                  <Text fontSize="4xl">{roadmap.icon}</Text>
                  <Heading size="md">{roadmap.title}</Heading>
                  <Text color="gray.500">{roadmap.description}</Text>
                  <Badge colorScheme="blue" px={3} py={1} borderRadius="full">
                    ⏱️ {roadmap.duration}
                  </Badge>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      {/* Features */}
      <Card bg={useColorModeValue('blue.50', 'blue.900')} borderColor={useColorModeValue('blue.200', 'blue.700')} borderWidth={1}>
        <CardBody>
          <Heading as="h3" size="md" mb={4}>
            💡 Что будет включать каждый roadmap:
          </Heading>
          <VStack align="start" spacing={2} pl={4}>
            <Text>✓ Пошаговый план обучения</Text>
            <Text>✓ Подобранные материалы для каждого этапа</Text>
            <Text>✓ Практические задачи и проекты</Text>
            <Text>✓ Чек-листы навыков и знаний</Text>
            <Text>✓ Отслеживание прогресса</Text>
          </VStack>
        </CardBody>
      </Card>
    </VStack>
  );
};
