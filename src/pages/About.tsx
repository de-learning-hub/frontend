import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Badge,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Link,
  Divider,
} from '@chakra-ui/react';
import { FaCheckCircle, FaStar } from 'react-icons/fa';

export const About = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('navy.500', 'gray.100');

  return (
    <VStack spacing={10} align="stretch">
      {/* Hero */}
      <Box textAlign="center">
        <Heading
          as="h1"
          size="2xl"
          color={headingColor}
          mb={4}
        >
          О проекте DE Learning Hub
        </Heading>
        <Text fontSize="lg" color="gray.500" maxW="2xl" mx="auto">
          Открытая база знаний для русскоязычных Data Engineers
        </Text>
      </Box>

      {/* Problem & Solution */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <Card bg={cardBg} shadow="md">
          <CardBody>
            <Heading size="md" mb={4}>
              ❓ Проблема
            </Heading>
            <Text mb={3}>
              Data Engineers в России сталкиваются с проблемой разрозненности образовательных материалов.
            </Text>
            <Text>
              Информация разбросана по Habr, YouTube, Telegram, Medium. Сложно найти структурированный путь обучения.
            </Text>
          </CardBody>
        </Card>
        <Card bg={cardBg} shadow="md">
          <CardBody>
            <Heading size="md" mb={4}>
              ✅ Решение
            </Heading>
            <Text mb={3}>
              DE Learning Hub собирает, систематизирует и курирует образовательные материалы в одном месте.
            </Text>
            <Text>
              Платформа предлагает roadmaps, вопросы для собесов и качественно отобранные ресурсы.
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>

      {/* Target Audience */}
      <Card bg={cardBg} shadow="md">
        <CardBody>
          <Heading size="md" mb={4}>
            👥 Для кого этот проект?
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
            <Box textAlign="center" p={4} borderRadius="md" bg={useColorModeValue('green.50', 'green.900')}>
              <Badge colorScheme="green" mb={2}>
                Junior
              </Badge>
              <Text fontSize="sm">Изучение основ Data Engineering</Text>
            </Box>
            <Box textAlign="center" p={4} borderRadius="md" bg={useColorModeValue('orange.50', 'orange.900')}>
              <Badge colorScheme="orange" mb={2}>
                Middle
              </Badge>
              <Text fontSize="sm">Углубление знаний и навыков</Text>
            </Box>
            <Box textAlign="center" p={4} borderRadius="md" bg={useColorModeValue('red.50', 'red.900')}>
              <Badge colorScheme="red" mb={2}>
                Senior
              </Badge>
              <Text fontSize="sm">Продвинутые темы и архитектура</Text>
            </Box>
            <Box textAlign="center" p={4} borderRadius="md" bg={useColorModeValue('blue.50', 'blue.900')}>
              <Badge colorScheme="blue" mb={2}>
                Переход
              </Badge>
              <Text fontSize="sm">Из смежных областей</Text>
            </Box>
          </SimpleGrid>
        </CardBody>
      </Card>

      {/* Roadmap */}
      <Card bg={cardBg} shadow="md">
        <CardBody>
          <Heading size="md" mb={4}>
            🚀 Roadmap развития проекта
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              <strong>Phase 0:</strong> Настройка инфраструктуры{' '}
              <Badge colorScheme="green" ml={2}>
                Завершено
              </Badge>
            </ListItem>
            <ListItem>
              <ListIcon as={FaStar} color="blue.500" />
              <strong>Phase 1:</strong> MVP с ручным добавлением контента{' '}
              <Badge colorScheme="blue" ml={2}>
                В процессе
              </Badge>
            </ListItem>
            <ListItem>
              <ListIcon as={FaStar} color="gray.400" />
              <strong>Phase 2:</strong> Автоматизация с Airflow{' '}
              <Badge ml={2}>Планируется</Badge>
            </ListItem>
            <ListItem>
              <ListIcon as={FaStar} color="gray.400" />
              <strong>Phase 3:</strong> Roadmaps и треки обучения{' '}
              <Badge ml={2}>Планируется</Badge>
            </ListItem>
            <ListItem>
              <ListIcon as={FaStar} color="gray.400" />
              <strong>Phase 4:</strong> Вопросы для собеседований{' '}
              <Badge ml={2}>Планируется</Badge>
            </ListItem>
          </List>
        </CardBody>
      </Card>

      {/* Tech Stack */}
      <Card bg={cardBg} shadow="md">
        <CardBody>
          <Heading size="md" mb={4}>
            🛠️ Технологический стек
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Box>
              <Heading size="sm" mb={3}>
                Frontend
              </Heading>
              <HStack wrap="wrap" spacing={2}>
                <Badge colorScheme="blue">React 18</Badge>
                <Badge colorScheme="blue">TypeScript</Badge>
                <Badge colorScheme="blue">Vite</Badge>
                <Badge colorScheme="blue">Chakra UI</Badge>
              </HStack>
            </Box>
            <Box>
              <Heading size="sm" mb={3}>
                Backend
              </Heading>
              <HStack wrap="wrap" spacing={2}>
                <Badge colorScheme="green">Django 5.1+</Badge>
                <Badge colorScheme="green">DRF</Badge>
                <Badge colorScheme="green">PostgreSQL</Badge>
              </HStack>
            </Box>
            <Box>
              <Heading size="sm" mb={3}>
                Infrastructure
              </Heading>
              <HStack wrap="wrap" spacing={2}>
                <Badge colorScheme="purple">Docker</Badge>
                <Badge colorScheme="purple">Nginx</Badge>
                <Badge colorScheme="purple">GitHub Actions</Badge>
              </HStack>
            </Box>
            <Box>
              <Heading size="sm" mb={3}>
                Data Engineering
              </Heading>
              <HStack wrap="wrap" spacing={2}>
                <Badge colorScheme="orange">Apache Airflow</Badge>
                <Badge colorScheme="orange">Python Parsers</Badge>
              </HStack>
            </Box>
          </SimpleGrid>
        </CardBody>
      </Card>

      {/* Open Source */}
      <Card bg={useColorModeValue('purple.50', 'purple.900')} borderColor={useColorModeValue('purple.200', 'purple.700')} borderWidth={1}>
        <CardBody textAlign="center">
          <Heading size="md" mb={4}>
            💜 Open Source проект
          </Heading>
          <Text mb={4}>
            DE Learning Hub - это открытый проект. Исходный код доступен на GitHub.
          </Text>
          <Text>
            GitHub Organization:{' '}
            <Link href="https://github.com/de-learning-hub" isExternal color="blue.500" fontWeight="bold">
              github.com/de-learning-hub
            </Link>
          </Text>
          <Divider my={4} />
          <Text fontSize="sm" color="gray.600">
            Приглашаем к участию! Если у вас есть идеи или вы хотите помочь проекту, ознакомьтесь с{' '}
            <Link
              href="https://github.com/de-learning-hub/.github/blob/main/CONTRIBUTING.md"
              isExternal
              color="blue.500"
            >
              руководством для контрибьюторов
            </Link>
            .
          </Text>
        </CardBody>
      </Card>
    </VStack>
  );
};
