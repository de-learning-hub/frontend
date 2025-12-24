export interface Resource {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
  difficulty: 'Junior' | 'Middle' | 'Senior';
  type: 'Статья' | 'Видео' | 'Курс' | 'Документация';
  source: string;
  dateAdded: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
  resourceCount: number;
}

export interface InterviewQuestion {
  id: number;
  question: string;
  answer: string;
  category: string;
  difficulty: 'Junior' | 'Middle' | 'Senior';
  tags: string[];
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'SQL',
    description: 'Основы SQL, PostgreSQL, оптимизация запросов',
    icon: '🗄️',
    resourceCount: 45,
  },
  {
    id: 2,
    name: 'Python',
    description: 'Python для Data Engineering, библиотеки, best practices',
    icon: '🐍',
    resourceCount: 67,
  },
  {
    id: 3,
    name: 'Apache Airflow',
    description: 'Оркестрация ETL, DAG, операторы, лучшие практики',
    icon: '🌊',
    resourceCount: 34,
  },
  {
    id: 4,
    name: 'Apache Spark',
    description: 'Распределенная обработка данных, PySpark',
    icon: '⚡',
    resourceCount: 28,
  },
  {
    id: 5,
    name: 'Базы данных',
    description: 'PostgreSQL, ClickHouse, MongoDB, Redis',
    icon: '💾',
    resourceCount: 52,
  },
  {
    id: 6,
    name: 'Docker & Kubernetes',
    description: 'Контейнеризация, оркестрация, DevOps',
    icon: '🐳',
    resourceCount: 29,
  },
  {
    id: 7,
    name: 'Data Modeling',
    description: 'Проектирование хранилищ, DWH, Data Vault',
    icon: '📊',
    resourceCount: 23,
  },
  {
    id: 8,
    name: 'CI/CD',
    description: 'Автоматизация, GitHub Actions, Jenkins',
    icon: '🔄',
    resourceCount: 18,
  },
];

export const resources: Resource[] = [
  {
    id: 1,
    title: 'Полное руководство по Apache Airflow',
    description: 'Подробный гайд по созданию и управлению DAG в Airflow',
    url: 'https://habr.com/ru/articles/example1',
    category: 'Apache Airflow',
    difficulty: 'Middle',
    type: 'Статья',
    source: 'Habr',
    dateAdded: '2025-12-20',
  },
  {
    id: 2,
    title: 'SQL оптимизация для больших данных',
    description: 'Как писать эффективные запросы для миллионов записей',
    url: 'https://habr.com/ru/articles/example2',
    category: 'SQL',
    difficulty: 'Senior',
    type: 'Статья',
    source: 'Habr',
    dateAdded: '2025-12-19',
  },
  {
    id: 3,
    title: 'Python для Data Engineering: начало',
    description: 'Основы Python для работы с данными',
    url: 'https://youtube.com/watch?v=example',
    category: 'Python',
    difficulty: 'Junior',
    type: 'Видео',
    source: 'YouTube',
    dateAdded: '2025-12-18',
  },
  {
    id: 4,
    title: 'Введение в PySpark',
    description: 'Распределенная обработка данных с Apache Spark',
    url: 'https://habr.com/ru/articles/example3',
    category: 'Apache Spark',
    difficulty: 'Middle',
    type: 'Курс',
    source: 'Stepik',
    dateAdded: '2025-12-17',
  },
  {
    id: 5,
    title: 'Docker для Data Engineers',
    description: 'Контейнеризация ETL пайплайнов',
    url: 'https://habr.com/ru/articles/example4',
    category: 'Docker & Kubernetes',
    difficulty: 'Middle',
    type: 'Статья',
    source: 'Habr',
    dateAdded: '2025-12-16',
  },
  {
    id: 6,
    title: 'PostgreSQL: индексы и производительность',
    description: 'Глубокое погружение в индексы PostgreSQL',
    url: 'https://habr.com/ru/articles/example5',
    category: 'Базы данных',
    difficulty: 'Senior',
    type: 'Статья',
    source: 'Habr',
    dateAdded: '2025-12-15',
  },
  {
    id: 7,
    title: 'Data Vault 2.0: введение',
    description: 'Основы методологии Data Vault',
    url: 'https://medium.com/example',
    category: 'Data Modeling',
    difficulty: 'Middle',
    type: 'Статья',
    source: 'Medium',
    dateAdded: '2025-12-14',
  },
  {
    id: 8,
    title: 'CI/CD для Airflow DAG',
    description: 'Автоматическое тестирование и деплой DAG',
    url: 'https://habr.com/ru/articles/example6',
    category: 'CI/CD',
    difficulty: 'Middle',
    type: 'Статья',
    source: 'Habr',
    dateAdded: '2025-12-13',
  },
];

export const interviewQuestions: InterviewQuestion[] = [
  {
    id: 1,
    question: 'Что такое ETL и ELT? В чем разница?',
    answer: 'ETL (Extract, Transform, Load) - процесс извлечения данных из источников, их трансформации и загрузки в хранилище. ELT (Extract, Load, Transform) - сначала загружаем данные, потом трансформируем. ELT эффективнее при больших объемах данных и мощных DWH.',
    category: 'Общие вопросы',
    difficulty: 'Junior',
    tags: ['ETL', 'ELT', 'Data Pipeline'],
  },
  {
    id: 2,
    question: 'Как работает DAG в Airflow?',
    answer: 'DAG (Directed Acyclic Graph) - направленный ациклический граф задач. Определяет последовательность выполнения задач и их зависимости. Каждая вершина - это задача (Task), ребра - зависимости между задачами.',
    category: 'Apache Airflow',
    difficulty: 'Middle',
    tags: ['Airflow', 'DAG', 'Orchestration'],
  },
  {
    id: 3,
    question: 'Объясните разницу между UNION и UNION ALL',
    answer: 'UNION объединяет результаты двух запросов и удаляет дубликаты. UNION ALL объединяет результаты без удаления дубликатов. UNION ALL быстрее, т.к. не тратит время на поиск дубликатов.',
    category: 'SQL',
    difficulty: 'Junior',
    tags: ['SQL', 'UNION', 'Запросы'],
  },
  {
    id: 4,
    question: 'Что такое партиционирование таблиц в PostgreSQL?',
    answer: 'Партиционирование - разделение большой таблицы на меньшие части (партиции) по определенному критерию (например, по дате). Улучшает производительность запросов и упрощает управление данными.',
    category: 'Базы данных',
    difficulty: 'Middle',
    tags: ['PostgreSQL', 'Партиционирование', 'Оптимизация'],
  },
  {
    id: 5,
    question: 'Как работает lazy evaluation в Spark?',
    answer: 'Lazy evaluation означает, что трансформации в Spark не выполняются сразу, а только записываются в план выполнения. Реальное выполнение происходит только при вызове action (collect, count, save). Это позволяет оптимизировать план выполнения.',
    category: 'Apache Spark',
    difficulty: 'Senior',
    tags: ['Spark', 'Оптимизация', 'RDD'],
  },
  {
    id: 6,
    question: 'Что такое идемпотентность в Data Engineering?',
    answer: 'Идемпотентность - свойство операции давать одинаковый результат при многократном выполнении. Важно для ETL процессов: повторный запуск должен давать тот же результат. Реализуется через upsert, временные метки, партиции.',
    category: 'Общие вопросы',
    difficulty: 'Middle',
    tags: ['Идемпотентность', 'ETL', 'Best Practices'],
  },
];

export const stats = {
  totalResources: 296,
  totalCategories: 8,
  totalQuestions: 127,
  lastUpdate: '2025-12-22',
};
