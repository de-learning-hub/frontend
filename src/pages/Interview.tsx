import { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Select,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Card,
  CardBody,
  Badge,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Alert,
  AlertIcon,
  Wrap,
} from '@chakra-ui/react';
import { interviewQuestions } from '@/data/mockData';
import type { InterviewQuestion } from '@/data/mockData';

export const Interview = () => {
  const [filteredQuestions, setFilteredQuestions] = useState<InterviewQuestion[]>(interviewQuestions);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const cardBg = useColorModeValue('white', 'gray.800');
  const questionCategories = Array.from(new Set(interviewQuestions.map((q) => q.category)));

  const difficultyColors: Record<string, string> = {
    'Junior': 'green',
    'Middle': 'orange',
    'Senior': 'red',
  };

  const handleFilter = (category: string, difficulty: string) => {
    let filtered = interviewQuestions;

    if (category !== 'all') filtered = filtered.filter((q) => q.category === category);
    if (difficulty !== 'all') filtered = filtered.filter((q) => q.difficulty === difficulty);

    setFilteredQuestions(filtered);
  };

  return (
    <VStack spacing={8} align="stretch">
      <Box>
        <Heading as="h1" size="xl" mb={2}>
          ❓ Вопросы для собеседований
        </Heading>
        <Text color="gray.500">
          Коллекция популярных вопросов для подготовки к интервью на позицию Data Engineer
        </Text>
      </Box>

      <Alert status="info" borderRadius="md">
        <AlertIcon />
        Вопросы можно импортировать из Notion. Сейчас отображаются примеры для демонстрации.
      </Alert>

      {/* Filters */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <Select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            handleFilter(e.target.value, selectedDifficulty);
          }}
        >
          <option value="all">Все категории</option>
          {questionCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Select>

        <Select
          value={selectedDifficulty}
          onChange={(e) => {
            setSelectedDifficulty(e.target.value);
            handleFilter(selectedCategory, e.target.value);
          }}
        >
          <option value="all">Все уровни</option>
          <option value="Junior">Junior</option>
          <option value="Middle">Middle</option>
          <option value="Senior">Senior</option>
        </Select>
      </SimpleGrid>

      {/* Stats */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        <Card bg={cardBg} shadow="md">
          <CardBody>
            <Stat>
              <StatLabel>Найдено вопросов</StatLabel>
              <StatNumber>{filteredQuestions.length}</StatNumber>
            </Stat>
          </CardBody>
        </Card>
        <Card bg={cardBg} shadow="md">
          <CardBody>
            <Stat>
              <StatLabel>Junior + Middle</StatLabel>
              <StatNumber>
                {filteredQuestions.filter((q) => q.difficulty === 'Junior' || q.difficulty === 'Middle').length}
              </StatNumber>
            </Stat>
          </CardBody>
        </Card>
        <Card bg={cardBg} shadow="md">
          <CardBody>
            <Stat>
              <StatLabel>Senior</StatLabel>
              <StatNumber color="red.500">
                {filteredQuestions.filter((q) => q.difficulty === 'Senior').length}
              </StatNumber>
            </Stat>
          </CardBody>
        </Card>
      </SimpleGrid>

      {/* Questions */}
      <Box>
        <Heading as="h2" size="lg" mb={4}>
          📝 Вопросы ({filteredQuestions.length})
        </Heading>
        <Accordion allowToggle>
          {filteredQuestions.map((question) => (
            <AccordionItem key={question.id}>
              <AccordionButton py={4}>
                <HStack flex={1} spacing={3} textAlign="left">
                  <Badge colorScheme={difficultyColors[question.difficulty]} fontSize="xs">
                    {question.difficulty}
                  </Badge>
                  <Badge colorScheme="blue" fontSize="xs">
                    {question.category}
                  </Badge>
                  <Text fontWeight="medium">{question.question}</Text>
                </HStack>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bg={useColorModeValue('gray.50', 'gray.700')}>
                <VStack align="start" spacing={3}>
                  <Box>
                    <Text fontWeight="bold" mb={2}>
                      Ответ:
                    </Text>
                    <Text>{question.answer}</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="bold" mb={2}>
                      Теги:
                    </Text>
                    <Wrap>
                      {question.tags.map((tag) => (
                        <Badge key={tag} colorScheme="gray">
                          {tag}
                        </Badge>
                      ))}
                    </Wrap>
                  </Box>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </VStack>
  );
};
