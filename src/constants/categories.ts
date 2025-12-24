import type { Category } from '@/types';

/**
 * Main categories and topics for navigation
 * Categories represent high-level groupings (2-level hierarchy)
 */

export const CATEGORIES: Category[] = [
  {
    id: 'data-engineering',
    name: 'Data Engineering',
    slug: 'data-engineering',
    description: 'Оркестрация данных и ETL/ELT инструменты',
    order: 1,
    topics: [
      {
        id: 'airflow',
        categoryId: 'data-engineering',
        name: 'Apache Airflow',
        slug: 'airflow',
        description: 'Платформа для оркестрации workflow',
        resourceCount: 0,
      },
      {
        id: 'dbt',
        categoryId: 'data-engineering',
        name: 'DBT',
        slug: 'dbt',
        description: 'Data Build Tool для трансформации данных',
        resourceCount: 0,
      },
      {
        id: 'spark',
        categoryId: 'data-engineering',
        name: 'Apache Spark',
        slug: 'spark',
        description: 'Распределенная обработка больших данных',
        resourceCount: 0,
      },
      {
        id: 'prefect',
        categoryId: 'data-engineering',
        name: 'Prefect',
        slug: 'prefect',
        description: 'Modern workflow orchestration',
        resourceCount: 0,
      },
    ],
  },
  {
    id: 'databases',
    name: 'Databases',
    slug: 'databases',
    description: 'Реляционные и NoSQL базы данных',
    order: 2,
    topics: [
      {
        id: 'postgresql',
        categoryId: 'databases',
        name: 'PostgreSQL',
        slug: 'postgresql',
        description: 'Реляционная СУБД с расширенными возможностями',
        resourceCount: 0,
      },
      {
        id: 'mongodb',
        categoryId: 'databases',
        name: 'MongoDB',
        slug: 'mongodb',
        description: 'Документо-ориентированная NoSQL база',
        resourceCount: 0,
      },
      {
        id: 'redis',
        categoryId: 'databases',
        name: 'Redis',
        slug: 'redis',
        description: 'In-memory key-value хранилище',
        resourceCount: 0,
      },
      {
        id: 'clickhouse',
        categoryId: 'databases',
        name: 'ClickHouse',
        slug: 'clickhouse',
        description: 'Колоночная СУБД для аналитики',
        resourceCount: 0,
      },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps & Infrastructure',
    slug: 'devops',
    description: 'Контейнеризация, оркестрация, CI/CD',
    order: 3,
    topics: [
      {
        id: 'docker',
        categoryId: 'devops',
        name: 'Docker',
        slug: 'docker',
        description: 'Контейнеризация приложений',
        resourceCount: 0,
      },
      {
        id: 'kubernetes',
        categoryId: 'devops',
        name: 'Kubernetes',
        slug: 'kubernetes',
        description: 'Оркестрация контейнеров',
        resourceCount: 0,
      },
      {
        id: 'cicd',
        categoryId: 'devops',
        name: 'CI/CD',
        slug: 'cicd',
        description: 'GitHub Actions, GitLab CI, Jenkins',
        resourceCount: 0,
      },
      {
        id: 'terraform',
        categoryId: 'devops',
        name: 'Terraform',
        slug: 'terraform',
        description: 'Infrastructure as Code',
        resourceCount: 0,
      },
    ],
  },
  {
    id: 'programming',
    name: 'Programming',
    slug: 'programming',
    description: 'Языки программирования и скриптинг',
    order: 4,
    topics: [
      {
        id: 'python',
        categoryId: 'programming',
        name: 'Python',
        slug: 'python',
        description: 'Основной язык для Data Engineering',
        resourceCount: 0,
      },
      {
        id: 'sql',
        categoryId: 'programming',
        name: 'SQL',
        slug: 'sql',
        description: 'Язык запросов к базам данных',
        resourceCount: 0,
      },
      {
        id: 'bash',
        categoryId: 'programming',
        name: 'Bash',
        slug: 'bash',
        description: 'Shell scripting для автоматизации',
        resourceCount: 0,
      },
    ],
  },
  {
    id: 'data-modeling',
    name: 'Data Modeling',
    slug: 'data-modeling',
    description: 'Моделирование данных и архитектура DWH',
    order: 5,
    topics: [
      {
        id: 'dimensional',
        categoryId: 'data-modeling',
        name: 'Dimensional Modeling',
        slug: 'dimensional',
        description: 'Kimball подход к моделированию',
        resourceCount: 0,
      },
      {
        id: 'data-vault',
        categoryId: 'data-modeling',
        name: 'Data Vault',
        slug: 'data-vault',
        description: 'Data Vault 2.0 методология',
        resourceCount: 0,
      },
      {
        id: 'kimball',
        categoryId: 'data-modeling',
        name: 'Kimball',
        slug: 'kimball',
        description: 'Dimensional modeling lifecycle',
        resourceCount: 0,
      },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud Platforms',
    slug: 'cloud',
    description: 'Облачные платформы и сервисы',
    order: 6,
    topics: [
      {
        id: 'aws',
        categoryId: 'cloud',
        name: 'AWS',
        slug: 'aws',
        description: 'Amazon Web Services для Data Engineering',
        resourceCount: 0,
      },
      {
        id: 'gcp',
        categoryId: 'cloud',
        name: 'Google Cloud',
        slug: 'gcp',
        description: 'BigQuery, Dataflow, Composer',
        resourceCount: 0,
      },
      {
        id: 'azure',
        categoryId: 'cloud',
        name: 'Azure',
        slug: 'azure',
        description: 'Microsoft Azure Data Services',
        resourceCount: 0,
      },
    ],
  },
  {
    id: 'streaming',
    name: 'Streaming & Real-time',
    slug: 'streaming',
    description: 'Потоковая обработка данных в реальном времени',
    order: 7,
    topics: [
      {
        id: 'kafka',
        categoryId: 'streaming',
        name: 'Apache Kafka',
        slug: 'kafka',
        description: 'Распределенная платформа потоковой обработки',
        resourceCount: 0,
      },
      {
        id: 'flink',
        categoryId: 'streaming',
        name: 'Apache Flink',
        slug: 'flink',
        description: 'Stream processing framework',
        resourceCount: 0,
      },
      {
        id: 'spark-streaming',
        categoryId: 'streaming',
        name: 'Spark Streaming',
        slug: 'spark-streaming',
        description: 'Микробатчинг на Spark',
        resourceCount: 0,
      },
      {
        id: 'kinesis',
        categoryId: 'streaming',
        name: 'AWS Kinesis',
        slug: 'kinesis',
        description: 'Managed streaming service от AWS',
        resourceCount: 0,
      },
    ],
  },
  {
    id: 'mlops',
    name: 'ML Ops',
    slug: 'mlops',
    description: 'ML инфраструктура и операции',
    order: 8,
    topics: [
      {
        id: 'mlflow',
        categoryId: 'mlops',
        name: 'MLflow',
        slug: 'mlflow',
        description: 'Управление ML экспериментами и моделями',
        resourceCount: 0,
      },
      {
        id: 'feature-store',
        categoryId: 'mlops',
        name: 'Feature Store',
        slug: 'feature-store',
        description: 'Feast, Tecton для управления фичами',
        resourceCount: 0,
      },
      {
        id: 'model-serving',
        categoryId: 'mlops',
        name: 'Model Serving',
        slug: 'model-serving',
        description: 'Деплой и сервинг ML моделей',
        resourceCount: 0,
      },
    ],
  },
];

/**
 * Get category by slug
 */
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return CATEGORIES.find((cat) => cat.slug === slug);
};

/**
 * Get topic by slug (searches across all categories)
 */
export const getTopicBySlug = (slug: string) => {
  for (const category of CATEGORIES) {
    const topic = category.topics.find((t) => t.slug === slug);
    if (topic) {
      return { topic, category };
    }
  }
  return null;
};

/**
 * Get all topics (flattened)
 */
export const getAllTopics = () => {
  return CATEGORIES.flatMap((category) => category.topics);
};
