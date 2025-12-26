# Claude Development Guide

> Frontend development guidelines for educational platform

## Table of Contents
- [Core Principles](#core-principles)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Folder Structure](#folder-structure)
- [Naming Conventions](#naming-conventions)
- [Components](#components)
- [State Management](#state-management)
- [Working with API](#working-with-api)
- [Styling](#styling)
- [TypeScript Rules](#typescript-rules)
- [Best Practices](#best-practices)

---

## Core Principles

### 1. **IMPORTANT: Approach to Task Execution**

**ALWAYS ASK FIRST, THEN ACT!**

Before starting any significant work (creating files, writing code, refactoring):

1. **Ask the user** using AskUserQuestion tool
2. **Clarify details**:
   - What exactly needs to be done?
   - What are the preferences?
   - Which approach to choose?
   - What constraints to consider?
3. **Propose options**
4. **Wait for confirmation**
5. **Only then** start creating files/code

❌ **WRONG**: Immediately generate files, create structure, write code
✅ **RIGHT**: Ask questions → discuss approach → get confirmation → act

**Exceptions** (when you can skip asking):
- User explicitly requested a specific action ("create file X", "write function Y")
- Small fix/edit in existing file
- Executing an already agreed plan

**Examples of correct approach:**

```
User: "Need to set up authentication"
❌ Assistant: *immediately creates AuthContext, login forms, API calls*
✅ Assistant: "Let me clarify details before setting up auth:
   - Which auth method? (JWT, OAuth, session-based?)
   - Where to store tokens? (localStorage, cookies, memory?)
   - Need social login? (Google, GitHub?)
   - Authorization levels needed?"
```

```
User: "Add new feature for course filtering"
❌ Assistant: *writes feature code*
✅ Assistant: "Before implementing filtering, let's discuss:
   - Which filters needed? (category, difficulty, price?)
   - Frontend only or backend API?
   - Should filters persist in URL?
   - UI preferences? (dropdown, checkboxes, search?)"
```

### 2. **Language Conventions**

**Code & Documentation Language: English**

- ✅ All code in English (variables, functions, components)
- ✅ All comments in English
- ✅ All documentation in English
- ✅ Git commits in English (Conventional Commits format)
- ✅ Types and interfaces in English

**User-facing content: Russian**
- UI text, labels, messages for users - in Russian
- Translations via i18n if needed later

**Communication with user: Russian**
- ✅ All conversation with the user in Russian
- ✅ Explanations and responses in Russian
- ✅ Questions to the user in Russian
- Only code examples and technical documentation remain in English

**Examples:**

```typescript
// ✅ CORRECT
interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
}

/**
 * Fetches user profile data from API
 * @param userId - User identifier
 * @returns User profile object
 */
async function fetchUserProfile(userId: string): Promise<UserProfile> {
  // Call API endpoint
  const response = await api.get(`/users/${userId}`);
  return response.data;
}

// In component (UI text in Russian)
<Text>{user.firstName}</Text>
<Button>Сохранить изменения</Button>
```

```typescript
// ❌ WRONG - mixed languages
interface ПрофильПользователя {
  имя: string;
  фамилия: string;
}

// Получаем данные пользователя
async function получитьПрофиль(userId: string) {
  // ...
}
```

---

## Tech Stack

### Core
- **React 19** - UI library
- **TypeScript 5.9** - strict typing
- **Vite 7** - build tool and dev server

### UI & Styling
- **Chakra UI 2** - component library
- **Framer Motion 11** - animations
- **React Icons 5** - icons

### Routing & State
- **React Router 7** - navigation
- **Zustand** - state management (TODO: install)

### Data Fetching
- REST API via fetch/axios
- React Query (optional for caching)

---

## Project Architecture

### Principles
1. **Layer-based structure** - organize by file type (components, hooks, services, utils)
2. **Separation of Concerns** - clear separation of UI, logic, and data
3. **Composition over inheritance** - reuse through component composition
4. **Single Responsibility** - each module does one thing

---

## Folder Structure

```
src/
├── assets/          # Static files (images, fonts)
├── components/      # Reusable components
│   ├── ui/         # Basic UI components (Button, Input, Card)
│   ├── layout/     # Layout components (Header, Footer, Sidebar)
│   └── common/     # Common composite components
├── pages/          # Application pages (routes)
├── hooks/          # Custom React hooks
├── store/          # Zustand stores
├── services/       # API services
├── utils/          # Utility functions
├── types/          # TypeScript types and interfaces
├── constants/      # Application constants
├── theme/          # Chakra UI theme
└── data/           # Mock data (temporary)
```

### Organization Rules

**components/**
- `ui/` - atomic components without business logic
- `layout/` - Layout.tsx, Header.tsx, Footer.tsx, Sidebar.tsx
- `common/` - composite components (CourseCard, RoadmapItem)

**pages/**
- One file = one page/route
- Names correspond to routes: Home.tsx, Roadmaps.tsx, Interview.tsx

**hooks/**
- useAuth.ts, useCourses.ts, useRoadmap.ts
- Encapsulate business logic and side effects

**store/**
- userStore.ts, coursesStore.ts
- Each store in a separate file

**services/**
- api.ts - base configuration
- authService.ts, coursesService.ts
- All API requests isolated here

---

## Naming Conventions

### Files and Folders
```typescript
// Components - PascalCase
Button.tsx
UserProfile.tsx
CourseCard.tsx

// Hooks - camelCase with 'use' prefix
useAuth.ts
useCourses.ts
useLocalStorage.ts

// Utils and services - camelCase
formatDate.ts
authService.ts
api.ts

// Types - PascalCase with suffix
userTypes.ts
courseTypes.ts

// Constants - UPPER_CASE or camelCase
constants.ts
apiEndpoints.ts
```

### Variables and Functions
```typescript
// Variables - camelCase
const userName = 'John';
const isLoading = false;

// Boolean variables - prefixes is/has/should
const isActive = true;
const hasAccess = false;
const shouldRender = true;

// Functions - camelCase, verbs
function fetchUserData() {}
function handleClick() {}
function validateEmail() {}

// Event handlers - 'handle' prefix
const handleSubmit = () => {};
const handleChange = () => {};

// Components - PascalCase
const UserProfile = () => {};
const CourseCard = () => {};

// Constants - UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.example.com';
const MAX_ITEMS_PER_PAGE = 20;
```

---

## Components

### Main Rules

1. **Component size**: maximum 200-250 lines
   - If larger - split into sub-components

2. **Single responsibility**: component does one thing
   - Bad: `UserProfileWithAuthAndSettings`
   - Good: `UserProfile`, `AuthForm`, `UserSettings`

3. **Logic in hooks**: business logic extracted to custom hooks
   ```typescript
   // ❌ Bad - logic in component
   const CourseList = () => {
     const [courses, setCourses] = useState([]);
     useEffect(() => {
       fetch('/api/courses').then(/* ... */);
     }, []);
     // ...
   }

   // ✅ Good - logic in hook
   const CourseList = () => {
     const { courses, isLoading } = useCourses();
     // ...
   }
   ```

4. **Explicit props typing**
   ```typescript
   // ✅ Must type props
   interface ButtonProps {
     label: string;
     onClick: () => void;
     variant?: 'primary' | 'secondary';
     isDisabled?: boolean;
   }

   const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', isDisabled = false }) => {
     // ...
   }
   ```

### Component Structure

```typescript
// 1. Imports
import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useCustomHook } from '@/hooks';
import type { ComponentProps } from '@/types';

// 2. Types (if not extracted to separate file)
interface UserCardProps {
  userId: string;
  onSelect?: (id: string) => void;
}

// 3. Component constants
const MAX_NAME_LENGTH = 50;

// 4. Main component
export const UserCard: React.FC<UserCardProps> = ({ userId, onSelect }) => {
  // 4.1. Hooks
  const { user, isLoading } = useUser(userId);
  const [isHovered, setIsHovered] = useState(false);

  // 4.2. Handlers
  const handleClick = () => {
    onSelect?.(userId);
  };

  // 4.3. Early returns
  if (isLoading) return <Spinner />;
  if (!user) return null;

  // 4.4. Render
  return (
    <Box onClick={handleClick}>
      <Text>{user.name}</Text>
    </Box>
  );
};

// 5. Helper functions (if needed)
function truncateName(name: string): string {
  return name.length > MAX_NAME_LENGTH
    ? `${name.slice(0, MAX_NAME_LENGTH)}...`
    : name;
}
```

### JSX Rules

```typescript
// ✅ Good
return (
  <Box p={4} bg="white">
    <Text fontSize="lg">{title}</Text>
    {items.map(item => (
      <ItemCard key={item.id} item={item} />
    ))}
  </Box>
);

// ❌ Bad - complex logic in JSX
return (
  <Box>
    {items.filter(i => i.active).map(i => {
      const title = i.title.length > 20 ? i.title.slice(0, 20) + '...' : i.title;
      return <div key={i.id}>{title}</div>
    })}
  </Box>
);

// ✅ Good - logic extracted
const activeItems = items.filter(item => item.active);

return (
  <Box>
    {activeItems.map(item => (
      <ItemCard key={item.id} item={item} />
    ))}
  </Box>
);
```

---

## State Management

### Zustand

**When to use:**
- Global state (authentication, user settings)
- State used across multiple components
- State that needs to be persisted

**Store structure:**

```typescript
// store/userStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'user-storage',
    }
  )
);
```

**Usage:**

```typescript
// In component
import { useUserStore } from '@/store/userStore';

const Profile = () => {
  const user = useUserStore(state => state.user);
  const logout = useUserStore(state => state.logout);

  // ...
};
```

### React Hooks

**When to use:**
- Local component state (UI state)
- State used only in one component

```typescript
// ✅ Local UI state
const [isOpen, setIsOpen] = useState(false);
const [selectedTab, setSelectedTab] = useState(0);
```

---

## Working with API

### Services Structure

```typescript
// services/api.ts - base configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

interface ApiResponse<T> {
  data: T;
  error?: string;
}

export async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    return {
      data: null as T,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}
```

```typescript
// services/coursesService.ts - specific service
import { apiRequest } from './api';
import type { Course } from '@/types';

export const coursesService = {
  getAll: () => apiRequest<Course[]>('/courses'),

  getById: (id: string) => apiRequest<Course>(`/courses/${id}`),

  create: (course: Omit<Course, 'id'>) =>
    apiRequest<Course>('/courses', {
      method: 'POST',
      body: JSON.stringify(course),
    }),
};
```

### Custom Hooks for API

```typescript
// hooks/useCourses.ts
import { useState, useEffect } from 'react';
import { coursesService } from '@/services/coursesService';
import type { Course } from '@/types';

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true);
      const { data, error } = await coursesService.getAll();

      if (error) {
        setError(error);
      } else {
        setCourses(data);
      }

      setIsLoading(false);
    };

    fetchCourses();
  }, []);

  return { courses, isLoading, error };
}
```

### Error Handling

```typescript
// ✅ Correct handling
const { data, error } = await coursesService.getAll();

if (error) {
  // Show error toast
  toast({
    title: 'Ошибка',
    description: error,
    status: 'error',
  });
  return;
}

// Work with data
```

---

## Styling

### Chakra UI - Main Approach

**Rules:**
1. Use Chakra components wherever possible
2. Styles via props, not CSS
3. Use theme for colors and spacing
4. **Extract styles to objects at the top of the file** to keep components clean

### Style Organization

**Always define styles at the top of the file before the component:**

```typescript
// ✅ CORRECT - styles extracted to object
import { Box, Text, Button } from '@chakra-ui/react';

// Styles defined at file top
const styles = {
  container: {
    p: 4,
    bg: 'gray.50',
    borderRadius: 'md',
    _hover: { bg: 'gray.100' }
  },
  title: {
    fontSize: 'lg',
    fontWeight: 'bold',
    color: 'gray.800'
  },
  button: {
    colorScheme: 'blue',
    size: 'md'
  }
} as const;

// Component stays clean
export const Card = () => {
  return (
    <Box {...styles.container}>
      <Text {...styles.title}>Title</Text>
      <Button {...styles.button}>Action</Button>
    </Box>
  );
};
```

```typescript
// ❌ WRONG - styles inline in JSX (clutters component)
export const Card = () => {
  return (
    <Box
      p={4}
      bg="gray.50"
      borderRadius="md"
      _hover={{ bg: 'gray.100' }}
    >
      <Text fontSize="lg" fontWeight="bold" color="gray.800">
        Title
      </Text>
      <Button colorScheme="blue" size="md">
        Action
      </Button>
    </Box>
  );
};
```

**For complex components with many variants:**

```typescript
// Organize styles by component sections
const styles = {
  // Container styles
  container: {
    base: {
      p: 4,
      bg: 'white',
      borderRadius: 'md'
    },
    hover: {
      shadow: 'md'
    }
  },

  // Header styles
  header: {
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      mb: 4
    },
    title: {
      fontSize: 'xl',
      fontWeight: 'bold'
    }
  },

  // Content styles
  content: {
    text: {
      color: 'gray.600',
      lineHeight: 'tall'
    }
  }
} as const;

export const ComplexCard = () => {
  return (
    <Box {...styles.container.base} _hover={styles.container.hover}>
      <Box {...styles.header.wrapper}>
        <Text {...styles.header.title}>Title</Text>
      </Box>
      <Box>
        <Text {...styles.content.text}>Content</Text>
      </Box>
    </Box>
  );
};
```

**When to use inline styles:**
- Only for dynamic values that depend on props/state
- Single unique style that won't be reused

```typescript
const styles = {
  container: {
    p: 4,
    bg: 'white'
  }
} as const;

interface CardProps {
  isHighlighted: boolean;
  customWidth?: string;
}

export const Card: React.FC<CardProps> = ({ isHighlighted, customWidth }) => {
  return (
    <Box
      {...styles.container}
      // Dynamic styles inline
      borderColor={isHighlighted ? 'blue.500' : 'gray.200'}
      width={customWidth}
    >
      Content
    </Box>
  );
};
```

### Spacing Patterns & Best Practices

**Based on research from popular knowledge bases (Hashnode, DEV.to, Medium):**

#### Spacing Rules

Use consistent spacing to create visual hierarchy and improve readability:

```typescript
// ✅ CORRECT spacing patterns
const styles = {
  card: {
    p: 6,              // 24px - container padding
    borderRadius: '2xl', // 16px - soft corners like modern platforms
  },
  badges: {
    gap: 2,           // 8px - gap between badges
    mb: 4,            // 16px - spacing to next component
  },
  title: {
    mb: 2,            // 8px - spacing to related element (description)
    lineHeight: '1.25', // Tight line-height for headings
  },
  description: {
    lineHeight: '1.625', // 1.5-1.625x font size for readability
    mb: 5,             // 20px - spacing to next section
  },
  meta: {
    fontSize: '14px',   // Standard metadata size
    mt: 'auto',        // Push to bottom with flexbox
  },
} as const;
```

**Spacing Guidelines:**
- **8px (mb: 2)** - Closely related elements (title → description)
- **16px (mb: 4)** - Related components (badges → title, description → meta)
- **24px (p: 6)** - Card/container padding
- **Line-height:**
  - Headings: `1.25` (tight)
  - Body text: `1.5-1.625` (readable)
  - Paragraph spacing: 30-50% of line-height

**Typography Best Practices:**
```typescript
// ✅ Card typography patterns
materialTitle: {
  fontSize: 'lg',        // 18px - scannable size
  fontWeight: 'semibold', // 600 - clear hierarchy
  lineHeight: '1.25',     // Tight for headings
  mb: 2,                 // 8px to description
},
materialDescription: {
  fontSize: '15px',      // 14-16px range
  lineHeight: '1.625',   // 1.5-1.625x for readability
  mb: 5,                 // 20px spacing
},
meta: {
  fontSize: '14px',      // Standard metadata
  color: 'gray.500',     // Subtle, secondary info
}
```

**Badge/Tag Styling:**
```typescript
Badge: {
  baseStyle: {
    fontSize: 'xs',        // 12px
    fontWeight: 'medium',   // 500
    borderRadius: 'full',   // Pill shape (modern pattern)
    px: 3,                 // 12px horizontal padding
    py: 1,                 // 4px vertical padding
  }
}
```

### Theme Customization

**Наша тема в `src/theme/index.ts` настроена со следующими параметрами:**

#### Шрифты

```typescript
fonts: {
  // Montserrat для всего (heading и body используют разные веса)
  heading: `'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
  body: `'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
  // JetBrains Mono для кода
  mono: `'JetBrains Mono', 'Fira Code', 'Courier New', monospace`,
},
```

**Использование начертаний Montserrat:**
- **H1-H3 (Heading size='4xl', '3xl', '2xl')**: Bold (700) - главные заголовки
- **H4-H6 (Heading size='xl', 'lg', 'md')**: SemiBold (600) - подзаголовки
- **Навигация, ссылки**: Medium (500) - акцентный текст
- **Обычный текст (Text)**: Regular (400) - основной контент
- **Кнопки, badges**: SemiBold (600)

**Доступные веса (используются только необходимые):**
```typescript
fontWeights: {
  normal: 400,      // Обычный текст, параграфы
  medium: 500,      // Навигация, ссылки, акцентный текст
  semibold: 600,    // Кнопки, badges, акценты
  bold: 700,        // Заголовки H1-H3, заголовки карточек
},
```

**Примеры использования:**
```typescript
// ✅ Заголовки - автоматически получают правильный вес из темы
<Heading size="4xl">H1 - Bold (700)</Heading>
<Heading size="xl">H4 - SemiBold (600)</Heading>

// ✅ Навигация и ссылки
<Link fontWeight="medium">Ссылка - Medium (500)</Link>

// ✅ Кнопки
<Button fontWeight="semibold">Кнопка - SemiBold (600)</Button>

// ✅ Обычный текст (по умолчанию)
<Text>Текст - Regular (400)</Text>
```

#### Цвета

**Используем стандартную палитру Chakra UI + кастомизация:**

```typescript
colors: {
  // Primary color - Teal
  teal: {
    50: '#E6FFFA',
    100: '#B2F5EA',
    200: '#81E6D9',
    300: '#4FD1C5',
    400: '#38B2AC',
    500: '#38B2AC',  // Primary color
    600: '#319795',  // Primary dark
    700: '#2C7A7B',  // Primary darker
    800: '#285E61',
    900: '#234E52',
  },
  // Secondary color - Purple
  purple: {
    50: '#FAF5FF',
    100: '#E9D8FD',
    200: '#D6BCFA',
    300: '#B794F4',
    400: '#9F7AEA',
    500: '#805AD5',  // Secondary color
    600: '#6B46C1',  // Secondary dark
    700: '#553C9A',
    800: '#44337A',
    900: '#322659',
  },
  // Gray scale (используй из Chakra по умолчанию)
  // white, gray.50, gray.100, ... gray.900, black
},
```

**Правила использования цветов:**

✅ **Всегда используй `useColorModeValue` для адаптивной темы:**
```typescript
const bgColor = useColorModeValue('white', 'gray.900');
const textColor = useColorModeValue('gray.800', 'white');
const borderColor = useColorModeValue('gray.200', 'gray.700');
```

✅ **Используй цвета из темы через названия:**
```typescript
// ✅ ПРАВИЛЬНО
<Box bg="white" _dark={{ bg: 'gray.900' }}>
<Text color={useColorModeValue('gray.600', 'gray.400')}>
<Button colorScheme="teal">

// ❌ НЕПРАВИЛЬНО - не используй hex напрямую
<Box bg="#ffffff">
<Text color="#666666">
```

✅ **Стандартные цветовые схемы компонентов:**
- **Primary actions**: `colorScheme="teal"`
- **Secondary actions**: `variant="outline"` с `colorScheme="teal"`
- **Destructive actions**: `colorScheme="red"`
- **Success**: `colorScheme="green"`
- **Warning**: `colorScheme="orange"`

✅ **Бейджи уровней сложности:**
```typescript
<Badge variant="beginner">Начинающий</Badge>    // green
<Badge variant="intermediate">Средний</Badge>   // orange
<Badge variant="advanced">Продвинутый</Badge>   // red
```

#### Кнопки

**Унифицированные варианты кнопок в теме:**

У нас есть 5 готовых вариантов кнопок. **ВСЕГДА используй эти варианты** вместо кастомных стилей.

```typescript
// 1. PRIMARY - основные действия (по умолчанию)
<Button variant="primary">Основное действие</Button>
<Button variant="primary" size="lg">Крупная кнопка</Button>

// 2. OUTLINE - вторичные действия
<Button variant="outline">Вторичное действие</Button>

// 3. SECONDARY - альтернативные действия (GitHub, внешние ссылки)
<Button variant="secondary">GitHub</Button>
<Button variant="secondary" leftIcon={<Icon />}>С иконкой</Button>

// 4. GHOST - минимальные действия
<Button variant="ghost">Отмена</Button>

// 5. HERO - главные CTA в hero-секции
<Button variant="hero">ПРИЗЫВ К ДЕЙСТВИЮ</Button>
```

**Размеры:**
- `size="sm"` - 36px высота (small actions, header)
- `size="md"` - 40px высота (стандартный размер)
- `size="lg"` - 48px высота (важные действия, CTA)

**Когда использовать:**
- **primary**: Главное действие на странице/форме ("Сохранить", "Создать", "Отправить")
- **outline**: Второстепенные действия ("Отмена", "Назад", "Просмотреть все")
- **secondary**: Альтернативные платформы/ссылки ("GitHub", "Telegram", внешние ссылки)
- **ghost**: Минимальные действия, header buttons ("Войти", "Выйти")
- **hero**: Только для главных CTA в hero-секции

**Примеры:**

```typescript
// ✅ ПРАВИЛЬНО - использование готовых вариантов
<Button variant="primary" size="lg">Начать обучение</Button>
<Button variant="outline">Узнать больше</Button>
<Button variant="secondary" leftIcon={<FaGithub />}>Star on GitHub</Button>

// ✅ Full-width кнопка в карточке
<Button variant="primary" size="lg" w="100%">
  Подробнее
</Button>

// ❌ НЕПРАВИЛЬНО - не создавай кастомные стили
<Button
  bg="teal.500"
  color="white"
  px={8}
  _hover={{ bg: 'teal.600' }}
>
  Плохо
</Button>

// ❌ НЕПРАВИЛЬНО - не используй colorScheme напрямую
<Button colorScheme="teal">Плохо</Button>
```

**Важно:**
- Всегда используй `variant` из темы
- Не создавай inline стили для кнопок
- Для специфичных случаев (например, white border на темном фоне) можно добавить минимальные переопределения, но база всегда - вариант из темы

### Responsive Design

```typescript
// Use Chakra responsive props
<Box
  w={{ base: '100%', md: '50%', lg: '33.33%' }}
  p={{ base: 2, md: 4 }}
>
  {/* content */}
</Box>

// Or arrays
<Text fontSize={['sm', 'md', 'lg']}>
  Responsive text
</Text>
```

---

## TypeScript Rules

### Strict Mode

**tsconfig.json:**
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

### Typing

```typescript
// ✅ Explicit types for everything

// Props
interface ComponentProps {
  title: string;
  count?: number;
}

// State
const [user, setUser] = useState<User | null>(null);

// Functions
function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// Event handlers
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};

// API responses
interface ApiUser {
  id: string;
  name: string;
  email: string;
}

async function fetchUser(id: string): Promise<ApiUser> {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}
```

### Avoid

```typescript
// ❌ Never use any
const data: any = await fetchData();

// ✅ Use unknown or specific type
const data: unknown = await fetchData();
// or
const data: User = await fetchData();

// ❌ Don't ignore errors
// @ts-ignore

// ✅ Fix the issue or use type assertion consciously
const element = document.getElementById('root') as HTMLElement;
```

### Type Organization

```typescript
// types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export type UserRole = 'student' | 'teacher' | 'admin';

export interface UserFormData {
  name: string;
  email: string;
}
```

```typescript
// types/index.ts - re-export
export * from './user';
export * from './course';
export * from './roadmap';
```

---

## Best Practices

### 1. Performance

```typescript
// ✅ Memoize expensive computations
const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}, [items]);

// ✅ useCallback for functions passed as props
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);

// ✅ React.memo for rarely changing components
export const ExpensiveComponent = React.memo(({ data }) => {
  // ...
});
```

### 2. Readability

```typescript
// ✅ Destructuring
const { name, email, role } = user;

// ✅ Early returns
if (!user) return null;
if (isLoading) return <Spinner />;

// ✅ Descriptive names
const isUserAuthenticated = checkAuth();
const hasAdminRights = user.role === 'admin';
```

### 3. Security

```typescript
// ✅ Validate input data
function createUser(data: unknown): User {
  if (!isValidUserData(data)) {
    throw new Error('Invalid user data');
  }
  return data as User;
}

// ✅ Sanitize before displaying
<Text>{sanitizeHtml(userInput)}</Text>

// ✅ CORS and XSS protection handled on backend
```

### 4. Accessibility (a11y)

```typescript
// ✅ Semantic HTML via Chakra
<Button aria-label="Close menu" onClick={handleClose}>
  <CloseIcon />
</Button>

// ✅ Alternative text
<Image src={avatar} alt={`${userName}'s avatar`} />

// ✅ Keyboard navigation
<Box
  tabIndex={0}
  onKeyDown={handleKeyPress}
  role="button"
>
  Click or press Enter
</Box>
```

### 5. Code Style

```typescript
// ✅ Constants in separate files
// constants/routes.ts
export const ROUTES = {
  HOME: '/',
  ROADMAPS: '/roadmaps',
  COURSES: '/courses',
  INTERVIEW: '/interview',
} as const;

// ✅ Utilities for reuse
// utils/format.ts
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ru-RU').format(date);
}

// ✅ One export per component
export const Button = () => { /* ... */ };
// don't export helper functions if not needed outside
```

### 6. Git Commits - Conventional Commits

**Format:** `<type>(<scope>): <description>`

**Types:**
- `feat`: new feature
- `fix`: bug fix
- `refactor`: code refactoring without changing functionality
- `style`: formatting, missing semicolons, etc. (not CSS)
- `perf`: performance improvements
- `test`: adding or updating tests
- `docs`: documentation changes
- `build`: build system or dependencies changes
- `ci`: CI/CD configuration changes
- `chore`: other changes that don't modify src or test files

**Rules:**
- ✅ All commits in English
- ✅ Use imperative mood ("add" not "added" or "adds")
- ✅ No period at the end
- ✅ Keep first line under 72 characters
- ✅ Scope is optional but recommended
- ❌ **DO NOT** add "Generated with Claude Code" or similar AI tool mentions
- ❌ **DO NOT** add "Co-Authored-By: Claude" or AI attribution
- ✅ Commits should appear as written by the human developer only

**Examples:**

```bash
# Features
feat: add user authentication with JWT
feat(auth): implement password reset flow
feat(courses): add filtering by category and difficulty

# Bug fixes
fix: prevent duplicate API calls on mount
fix(roadmap): correct progress calculation
fix(ui): resolve button alignment issue on mobile

# Refactoring
refactor: extract authentication logic to custom hook
refactor(api): simplify error handling in services
refactor(store): migrate from Context to Zustand

# Styles & UI
style: format code with prettier
style(components): update button spacing

# Performance
perf: implement virtualization for course list
perf(images): add lazy loading

# Documentation
docs: update README with setup instructions
docs(api): add JSDoc comments to service functions

# Build & Dependencies
build: add zustand to dependencies
build: upgrade react-router to v7

# Chores
chore: remove unused imports
chore: update .gitignore
```

**Commit message body (optional):**

```bash
feat(auth): implement JWT authentication

- Add login/logout functionality
- Store tokens in localStorage
- Create auth context provider
- Add protected route wrapper
```

### 7. Comments (English only)

**Rules:**
- ✅ All comments in English
- ✅ Comment "why", not "what"
- ✅ Use JSDoc for functions and complex types
- ❌ Don't comment obvious code

```typescript
// ✅ CORRECT - explains WHY
// Use debounce to prevent excessive API calls during fast typing
const debouncedSearch = useDebounce(searchQuery, 300);

// Need to normalize data because backend returns inconsistent format
const normalizedData = normalizeApiResponse(rawData);

/**
 * Calculates user progress across all enrolled courses
 * Uses weighted average based on course difficulty
 */
function calculateOverallProgress(courses: Course[]): number {
  // Implementation...
}

// ❌ WRONG - comments obvious code
// Set loading to true
setIsLoading(true);

// Map over items
items.map(item => <ItemCard key={item.id} item={item} />)

// ❌ WRONG - comments in Russian
// Используем debounce для оптимизации
const debouncedSearch = useDebounce(searchQuery, 300);
```

### 8. Imports

```typescript
// Import order:
// 1. React and libraries
import { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';

// 2. Internal dependencies
import { useUserStore } from '@/store/userStore';
import { Button } from '@/components/ui/Button';

// 3. Types
import type { User } from '@/types';

// 4. Styles (if any)
import styles from './Component.module.css';
```

---

## Pre-Commit Checklist

**Code Quality:**
- [ ] Code passes `npm run lint` without errors
- [ ] All types explicitly declared, no `any`
- [ ] Components don't exceed 250 lines
- [ ] Logic extracted to custom hooks
- [ ] Using Chakra UI components
- [ ] Props typed via interface
- [ ] No console.log in code
- [ ] Code is readable and clear without comments
- [ ] Variables have descriptive names

**Language & Documentation:**
- [ ] All code in English (variables, functions, components)
- [ ] All comments in English
- [ ] Commit message follows Conventional Commits (English)
- [ ] UI text in Russian (if user-facing interface exists)

---

## Useful Links

**Core Technologies:**
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite](https://vitejs.dev)

**UI & State:**
- [Chakra UI](https://chakra-ui.com)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Router](https://reactrouter.com)

**Best Practices:**
- [Conventional Commits](https://www.conventionalcommits.org/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)

---

**This file is a living document. Update it as the project grows.**
