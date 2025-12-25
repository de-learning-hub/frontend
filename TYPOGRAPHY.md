# Typography Guide

> Правила использования шрифтов Montserrat + Russo One

## Шрифтовая пара

### Montserrat (основной шрифт)
- **Назначение**: Весь body текст, навигация, формы, обычные кнопки
- **Веса**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Характер**: Геометрический sans-serif, отличная читаемость, универсальный

### Russo One (акцентный шрифт)
- **Назначение**: ТОЛЬКО крупные заголовки (H1, H2) и большие CTA кнопки
- **Вес**: 400 (единственный доступный)
- **Характер**: Жирный display шрифт, экспрессивный, привлекает внимание

---

## Типографическая иерархия

### Заголовки

**H1 (Hero titles)** - Russo One
```tsx
<Heading as="h1" size="4xl">Главный заголовок</Heading>
// 48px на мобильных, 64px на десктопе
```

**H2 (Section titles)** - Russo One
```tsx
<Heading as="h2" size="3xl">Заголовок секции</Heading>
// 40px на мобильных, 48px на десктопе
```

**H3 (Subsection titles)** - Montserrat Bold
```tsx
<Heading as="h3" size="2xl">Подзаголовок</Heading>
// 32px, Montserrat Bold
```

**H4** - Montserrat SemiBold
```tsx
<Heading as="h4" size="xl">Заголовок H4</Heading>
// 28px, Montserrat SemiBold
```

**H5** - Montserrat SemiBold
```tsx
<Heading as="h5" size="lg">Заголовок H5</Heading>
// 24px, Montserrat SemiBold
```

**H6** - Montserrat SemiBold
```tsx
<Heading as="h6" size="md">Заголовок H6</Heading>
// 20px, Montserrat SemiBold
```

### Body текст

**Large body** - Montserrat Regular
```tsx
<Text size="lg">Крупный текст для важных абзацев</Text>
// 18px, line-height 1.625
```

**Normal body** (по умолчанию) - Montserrat Regular
```tsx
<Text>Обычный текст параграфа</Text>
// 16px, line-height 1.5
```

**Small text** - Montserrat Regular
```tsx
<Text size="sm">Мелкий текст, метаданные</Text>
// 14px, line-height 1.5
```

**Caption/Helper text** - Montserrat Regular
```tsx
<Text size="xs" color="gray.500">Подсказки, вспомогательный текст</Text>
// 12px, line-height 1.375
```

### Кнопки

**Hero/CTA кнопка** - Russo One (для лендингов, главных действий)
```tsx
<Button variant="hero" size="lg">Начать обучение</Button>
// Russo One, 18px, uppercase, высота 56px
```

**Обычная кнопка** - Montserrat SemiBold
```tsx
<Button size="lg">Большая кнопка</Button>
// Montserrat SemiBold, 16px, высота 48px

<Button size="md">Средняя кнопка</Button>
// Montserrat SemiBold, 14px, высота 40px (по умолчанию)

<Button size="sm">Маленькая кнопка</Button>
// Montserrat SemiBold, 14px, высота 32px
```

### Навигация

**Navigation links** - Montserrat Medium
```tsx
<Link fontWeight="medium" fontSize="sm">Навигация</Link>
// 14-16px, Montserrat Medium
```

---

## Правила использования

### ✅ DO (Правильно)

1. **Russo One только для крупных заголовков**
   ```tsx
   <Heading as="h1" size="4xl">DE Learning Hub</Heading>
   <Heading as="h2" size="3xl">Курсы по Data Engineering</Heading>
   ```

2. **Montserrat для всего остального**
   ```tsx
   <Text>Описание курса...</Text>
   <Button>Записаться</Button>
   ```

3. **Hero кнопка для главных CTA**
   ```tsx
   <Button variant="hero">Начать бесплатно</Button>
   ```

4. **Правильная иерархия размеров**
   - H1 > H2 > H3 > H4 > H5 > H6 > Body

### ❌ DON'T (Неправильно)

1. **Russo One для мелкого текста**
   ```tsx
   ❌ <Text fontFamily="heading">Мелкий текст</Text>
   // Russo One нечитаем в мелких размерах!
   ```

2. **Russo One для обычных кнопок**
   ```tsx
   ❌ <Button fontFamily="heading">Обычная кнопка</Button>
   // Используйте только variant="hero" для важных CTA
   ```

3. **Слишком много акцентов**
   ```tsx
   ❌ <Heading size="3xl">Заголовок 1</Heading>
   ❌ <Heading size="3xl">Заголовок 2</Heading>
   ❌ <Heading size="3xl">Заголовок 3</Heading>
   // Не больше 1-2 Russo One заголовков на экране!
   ```

4. **Неправильные веса Montserrat**
   ```tsx
   ❌ <Text fontWeight="bold">Обычный текст</Text>
   // Используйте жирный только для заголовков H3+
   ```

---

## Примеры композиций

### Hero секция
```tsx
<Box textAlign="center" py={20}>
  <Heading as="h1" size="4xl" mb={4}>
    DE Learning Hub
  </Heading>
  <Text size="lg" mb={8} color="gray.600">
    Открытая база знаний для Data Engineers
  </Text>
  <Button variant="hero">Начать обучение</Button>
</Box>
```

### Карточка курса
```tsx
<Card>
  <Heading as="h3" size="2xl" mb={2}>
    Apache Spark
  </Heading>
  <Text size="sm" color="gray.500" mb={4}>
    Data Processing
  </Text>
  <Text mb={4}>
    Изучите основы распределённой обработки данных с Apache Spark
  </Text>
  <Button>Подробнее</Button>
</Card>
```

### Навигация
```tsx
<HStack spacing={6}>
  <Link fontWeight="medium" fontSize="sm">Главная</Link>
  <Link fontWeight="medium" fontSize="sm">Каталог</Link>
  <Link fontWeight="medium" fontSize="sm">Roadmaps</Link>
</HStack>
```

---

## Адаптивность

Крупные заголовки автоматически масштабируются:

```tsx
<Heading as="h1" size="4xl">
  // Мобильный: 48px (6xl)
  // Десктоп: 64px (7xl)
</Heading>

<Heading as="h2" size="3xl">
  // Мобильный: 40px (5xl)
  // Десктоп: 48px (6xl)
</Heading>
```

Для кастомной адаптивности:
```tsx
<Text fontSize={['sm', 'md', 'lg']}>
  // Мобильный: 14px
  // Планшет: 16px
  // Десктоп: 18px
</Text>
```

---

## Веса шрифтов

Montserrat:
- `fontWeight="light"` (300) - Второстепенный текст
- `fontWeight="normal"` (400) - Основной текст
- `fontWeight="medium"` (500) - Навигация, метки
- `fontWeight="semibold"` (600) - Заголовки, кнопки
- `fontWeight="bold"` (700) - Акцентные заголовки

Russo One:
- Всегда `fontWeight="normal"` (шрифт уже жирный по дизайну)
