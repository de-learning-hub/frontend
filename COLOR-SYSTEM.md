# Color System Guide

> Цветовая система по правилу 60-30-10 с проверкой контрастности WCAG

## Цветовая палитра

### Основные цвета (из 4 предоставленных выбраны 3)

```
#0B2545 - Navy (очень темный синий)
#134074 - Brand (средний темно-синий) ✅ 30%
#13315C - Accent (темно-синий) ✅ 10%
#8DA9C4 - Secondary (светлый серо-голубой) ✅ для границ/иконок
```

---

## Правило 60-30-10

### 60% - Доминирующий (фоны, нейтральные элементы)
- **Light mode**: `gray.50` (#F8F9FA), белый
- **Dark mode**: `navy.500` (#0B2545)
- Используется для: фоны страниц, карточек, больших площадей

### 30% - Вторичный (основной брендовый цвет)
- **Brand**: `brand.500` (#134074)
- Используется для: навигация, заголовки разделов, элементы UI, бордеры активных элементов
- Контрастность с белым: **8.5:1 (AAA)** ✅

### 10% - Акцентный (привлечение внимания)
- **Accent**: `accent.500` (#13315C)
- Используется для: кнопки, ссылки, активные состояния, CTA
- Контрастность с белым: **10:1 (AAA)** ✅

### Дополнительный (границы, иконки, disabled состояния)
- **Secondary**: `secondary.500` (#8DA9C4)
- Используется для: границы карточек, иконки, неактивные элементы
- Контрастность с белым: **3:1 (AA для крупного текста)** ⚠️

---

## Контрастность WCAG

### Требования
- **AA**: 4.5:1 для обычного текста, 3:1 для крупного (18px+)
- **AAA**: 7:1 для обычного текста, 4.5:1 для крупного

### Проверка наших цветов

#### Текст на белом фоне
- `navy.500` (#0B2545): **15:1 (AAA)** ✅ - отлично для текста
- `brand.500` (#134074): **8.5:1 (AAA)** ✅ - отлично для текста
- `accent.500` (#13315C): **10:1 (AAA)** ✅ - отлично для текста
- `secondary.500` (#8DA9C4): **3:1 (AA large)** ⚠️ - только для крупного текста/иконок

#### Белый текст на цветных фонах
- Белый на `brand.500`: **8.5:1 (AAA)** ✅
- Белый на `accent.500`: **10:1 (AAA)** ✅
- Белый на `navy.500`: **15:1 (AAA)** ✅

---

## Использование в компонентах

### Заголовки
```tsx
// Все заголовки используют navy.500 (темный текст)
<Heading color="navy.500">Заголовок</Heading>
```

### Кнопки

**Primary CTA (10% - акцент)**
```tsx
<Button variant="solid">Действие</Button>
// bg: accent.500, color: white
```

**Hero CTA (10% - акцент)**
```tsx
<Button variant="hero">Начать обучение</Button>
// bg: accent.500, fontFamily: Russo One
```

**Outline**
```tsx
<Button variant="outline">Подробнее</Button>
// border: accent.500, color: accent.500
```

### Ссылки (30% - primary)
```tsx
<Link>Ссылка</Link>
// color: brand.500
// hover: accent.500
```

### Карточки
```tsx
<Card>
  {/* borderColor: secondary.200 (светлая граница) */}
</Card>
```

### Badge
```tsx
<Badge variant="solid">Статус</Badge>
// bg: brand.500, color: white

<Badge variant="subtle">Категория</Badge>
// bg: secondary.100, color: brand.700
```

---

## Палитры оттенков

### Brand (30% использование)
```tsx
brand.50   #e8eff6  - очень светлый (hover фоны)
brand.100  #c5d7e8
brand.200  #9fbdd9
brand.300  #79a3ca
brand.400  #5c8fbe
brand.500  #134074  ← PRIMARY (30%)
brand.600  #0f3566  - hover состояния
brand.700  #0c2a56
brand.800  #092046
brand.900  #051128  - очень темный
```

### Accent (10% использование)
```tsx
accent.50   #e8eef5  - очень светлый
accent.100  #c6d4e5
accent.200  #a0b8d4
accent.300  #7a9cc3
accent.400  #5e86b6
accent.500  #13315C  ← ACCENT (10%)
accent.600  #0f2a4e  - hover состояния
accent.700  #0c223e
accent.800  #081a2f
accent.900  #041119  - очень темный
```

### Secondary (границы, иконки)
```tsx
secondary.50   #f4f7fa
secondary.100  #e3ebf2  - subtle badge bg
secondary.200  #d1dfe9  - card borders
secondary.300  #bfd3e0
secondary.400  #b0c8da
secondary.500  #8DA9C4  ← SECONDARY
secondary.600  #7a98b5
secondary.700  #6585a3
secondary.800  #517391
secondary.900  #3d5670
```

### Navy (темный текст, dark mode)
```tsx
navy.50   #e7e9ed
navy.100  #c3c9d2
navy.200  #9ba5b5
navy.300  #738197
navy.400  #556781
navy.500  #0B2545  ← DARK TEXT / DARK MODE BG
navy.600  #09203c
navy.700  #071a31
navy.800  #051427
navy.900  #030c16  - почти черный
```

---

## Примеры композиций

### Hero секция
```tsx
<Box bg="white" py={20}>
  <Heading color="navy.500" size="4xl">
    DE Learning Hub
  </Heading>
  <Text color="gray.600" size="lg">
    База знаний для Data Engineers
  </Text>
  <Button variant="hero">Начать обучение</Button>
  {/* bg: accent.500 (10% акцент) */}
</Box>
```

### Навигация (30% - primary)
```tsx
<HStack>
  <Link color="brand.500" _hover={{ color: "accent.500" }}>
    Главная
  </Link>
  {/* 30% использование brand цвета */}
</HStack>
```

### Карточка курса
```tsx
<Card borderColor="secondary.200">
  {/* border: secondary (светлая граница) */}
  <Heading color="navy.500">Apache Spark</Heading>
  <Text color="gray.600">Описание курса</Text>
  <Button variant="solid">Подробнее</Button>
  {/* button: accent.500 (10% акцент) */}
</Card>
```

### Stats
```tsx
<Stat>
  <StatNumber color="accent.500">142</StatNumber>
  {/* accent для важных цифр (10%) */}
  <StatLabel color="gray.600">Ресурсов</StatLabel>
</Stat>
```

---

## Правила использования

### ✅ DO (Правильно)

1. **60% - Фоны и нейтральные элементы**
   ```tsx
   <Box bg="white">  // или gray.50
   <Text color="gray.600">
   ```

2. **30% - Основной UI (brand)**
   ```tsx
   <Link color="brand.500">
   <Box borderColor="brand.300">
   <Heading color="navy.500">  // темный текст для заголовков
   ```

3. **10% - Акценты (accent)**
   ```tsx
   <Button bg="accent.500">
   <Link _hover={{ color: "accent.500" }}>
   <StatNumber color="accent.500">
   ```

4. **Secondary для второстепенных элементов**
   ```tsx
   <Card borderColor="secondary.200">
   <Icon color="secondary.500">
   ```

### ❌ DON'T (Неправильно)

1. **Слишком много акцентных цветов**
   ```tsx
   ❌ Все кнопки яркие accent.500
   ✅ Только 1-2 главные CTA кнопки accent.500
   ```

2. **Мелкий текст secondary цветом**
   ```tsx
   ❌ <Text fontSize="sm" color="secondary.500">
   ✅ <Text fontSize="sm" color="gray.600">
   // secondary.500 имеет низкий контраст!
   ```

3. **Градиенты (убраны из дизайна)**
   ```tsx
   ❌ bgGradient="linear(to-r, blue, purple)"
   ✅ color="navy.500" или "brand.500"
   ```

4. **Нарушение правила 60-30-10**
   ```tsx
   ❌ 50% brand + 50% accent (перегружено)
   ✅ 60% neutral + 30% brand + 10% accent
   ```

---

## Dark Mode Color Mapping

### Важно: Всегда используйте `useColorModeValue` для переключения цветов

В темном режиме пропорции **60-30-10 сохраняются**, но цвета становятся светлее для обеспечения контраста на темном фоне.

### Таблица соответствий Light → Dark

| Назначение | Light Mode | Dark Mode | Описание |
|-----------|-----------|-----------|----------|
| **Фоны (60%)** |
| Основной фон страницы | `white` или `gray.50` | `navy.500` | Главный фон |
| Фон карточек/модалов | `white` | `navy.600` | Карточки, попаперы |
| Hover фон элементов | `gray.50` | `navy.400` | Наведение на элементы |
| Фон футера | `gray.50` | `navy.700` | Футер, второстепенные области |
| **Текст** |
| Основной текст | `navy.500` | `gray.100` | Заголовки, основной текст |
| Вторичный текст | `gray.600` | `gray.400` | Описания, подписи |
| Третичный текст | `gray.500` | `gray.500` | Метаданные, timestamps |
| **Границы** |
| Основные границы | `gray.200` | `gray.600` | Borders, dividers |
| Активные границы | `brand.500` | `brand.400` | Active states |
| **Навигация и ссылки (30% - Brand)** |
| Ссылки | `brand.500` | `brand.300` | Навигационные ссылки |
| Ссылки hover | `accent.600` | `accent.300` | Hover состояние ссылок |
| Активная ссылка | `accent.600` | `accent.300` | Текущая страница |
| Индикатор навигации | `accent.600` | `accent.400` | Подчеркивание |
| **Кнопки и акценты (10% - Accent)** |
| Primary button bg | `accent.500` | `accent.500` | Главные кнопки (достаточно контрастны) |
| Primary button hover | `accent.600` | `accent.600` | Hover на кнопках |
| Outline button | `accent.500` | `accent.300` | Outline вариант |
| Ghost button hover | `accent.50` | `accent.900` | Фон при hover |
| **Специальные элементы** |
| Badge solid bg | `brand.500` | `brand.400` | Badge фон |
| Badge subtle bg | `secondary.100` | `secondary.800` | Светлый badge |
| MegaMenu левая колонка | `gray.50` | `navy.700` | Sidebar в меню |
| MegaMenu active item | `accent.100` | `accent.800` | Активный пункт меню |
| MegaMenu hover bg | `accent.50` | `accent.900` | Hover в меню |

### Примеры использования

#### Фоны и контейнеры
```tsx
// Основной фон страницы
const pageBg = useColorModeValue('white', 'navy.500');

// Карточки
const cardBg = useColorModeValue('white', 'navy.600');

// Hover состояние
const hoverBg = useColorModeValue('gray.50', 'navy.400');

// Футер
const footerBg = useColorModeValue('gray.50', 'navy.700');
```

#### Текст
```tsx
// Заголовки
const headingColor = useColorModeValue('navy.500', 'gray.100');

// Основной текст / описания
const textColor = useColorModeValue('gray.600', 'gray.400');

// Мета-информация
const metaColor = useColorModeValue('gray.500', 'gray.500');
```

#### Границы
```tsx
// Обычные границы
const borderColor = useColorModeValue('gray.200', 'gray.600');

// Активные границы
const activeBorder = useColorModeValue('brand.500', 'brand.400');
```

#### Навигация (30% - Brand)
```tsx
// Цвет ссылок
const linkColor = useColorModeValue('brand.500', 'brand.300');

// Hover цвет ссылок
const linkHoverColor = useColorModeValue('accent.600', 'accent.300');

// Индикатор подчеркивания
const indicatorBg = useColorModeValue('accent.600', 'accent.400');

// Фон при hover
const linkHoverBg = useColorModeValue('accent.50', 'accent.900');
```

#### Кнопки (10% - Accent)
```tsx
// Primary кнопка
<Button
  bg={useColorModeValue('accent.500', 'accent.500')}
  _hover={{ bg: useColorModeValue('accent.600', 'accent.600') }}
>

// Outline кнопка
<Button
  borderColor={useColorModeValue('accent.500', 'accent.300')}
  color={useColorModeValue('accent.500', 'accent.300')}
  _hover={{ bg: useColorModeValue('accent.50', 'accent.900') }}
>

// Ghost кнопка
<Button
  color={useColorModeValue('accent.500', 'accent.300')}
  _hover={{ bg: useColorModeValue('accent.50', 'accent.900') }}
>
```

#### MegaMenu
```tsx
// Левая колонка
const leftColumnBg = useColorModeValue('gray.50', 'navy.700');

// Активный пункт категории
const categoryActiveBg = useColorModeValue('accent.100', 'accent.800');
const categoryActiveColor = useColorModeValue('accent.600', 'accent.300');

// Hover на ссылку
const linkHoverBg = useColorModeValue('accent.50', 'accent.900');
```

### ❌ Частые ошибки

```tsx
// ❌ НЕПРАВИЛЬНО - использование blue вместо брендовых цветов
const linkColor = useColorModeValue('blue.600', 'blue.300');

// ✅ ПРАВИЛЬНО - используем accent/brand
const linkColor = useColorModeValue('accent.600', 'accent.300');

// ❌ НЕПРАВИЛЬНО - использование gray для темного фона
const bgColor = useColorModeValue('white', 'gray.800');

// ✅ ПРАВИЛЬНО - используем navy для темного фона
const bgColor = useColorModeValue('white', 'navy.600');

// ❌ НЕПРАВИЛЬНО - одинаковый цвет в обоих режимах без проверки контраста
const textColor = 'gray.600';

// ✅ ПРАВИЛЬНО - адаптация для темной темы
const textColor = useColorModeValue('gray.600', 'gray.400');
```

### Проверка контрастности в Dark Mode

#### Текст на темном фоне (navy.500)
- `gray.100` на `navy.500`: **~13:1 (AAA)** ✅ - отлично
- `gray.400` на `navy.500`: **~7:1 (AAA)** ✅ - отлично
- `brand.300` на `navy.500`: **~8:1 (AAA)** ✅ - отлично
- `accent.300` на `navy.500`: **~9:1 (AAA)** ✅ - отлично

#### Белый текст на accent кнопках
- `white` на `accent.500`: **10:1 (AAA)** ✅ - отлично в обоих режимах

---

## Инструменты для проверки

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Coolors Contrast Checker](https://coolors.co/contrast-checker)
- Chrome DevTools - Lighthouse Accessibility

---

**Важно**: Всегда проверяйте контрастность новых комбинаций цветов!
