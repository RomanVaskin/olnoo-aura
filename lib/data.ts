export type Settlement = {
  slug: string
  name: string
  type: string
  format: string
  priceFrom: string
  distance: string
  location: string
  image: string
  tag?: string
  houses: number
  plots: number
}

export const settlements: Settlement[] = [
  {
    slug: 'maloe-isakovo',
    name: 'Малое Исаково',
    type: 'Клубный посёлок',
    format: 'Резиденции комфорт-класса',
    priceFrom: 'от 19 млн ₽',
    distance: '45 минут от Москвы',
    location: 'Истринское водохранилище',
    image: '/images/mi-hero.png',
    tag: 'Флагман',
    houses: 30,
    plots: 0,
  },
  {
    slug: 'sosnovy-bereg',
    name: 'Сосновый Берег',
    type: 'Коттеджный посёлок',
    format: 'Дома и участки',
    priceFrom: 'от 9,5 млн ₽',
    distance: '28 км от города',
    location: 'у озера',
    image: '/images/settlement-3.png',
    tag: 'Featured',
    houses: 31,
    plots: 20,
  },
  {
    slug: 'lesnaya-usadba',
    name: 'Лесная Усадьба',
    type: 'Посёлок бизнес-класса',
    format: 'Готовые дома',
    priceFrom: 'от 18 млн ₽',
    distance: '42 км от города',
    location: 'сосновый лес',
    image: '/images/settlement-2.png',
    houses: 16,
    plots: 0,
  },
  {
    slug: 'ozernyy',
    name: 'Озёрный',
    type: 'Дачный посёлок',
    format: 'Участки',
    priceFrom: 'от 2,8 млн ₽',
    distance: '50 км от города',
    location: 'первая линия воды',
    image: '/images/plot-2.png',
    houses: 0,
    plots: 54,
  },
]

export type Listing = {
  id: string
  title: string
  kind: 'Дом' | 'Участок'
  price: string
  area: string
  settlement: string
  image: string
  specs: string[]
}

export const houses: Listing[] = [
  {
    id: 'h1',
    title: 'Дом с панорамным остеклением',
    kind: 'Дом',
    price: '18,4 млн ₽',
    area: '186 м²',
    settlement: 'Малое Исаково',
    image: '/images/house-1.png',
    specs: ['4 спальни', 'Участок 12 сот.', 'Терраса'],
  },
  {
    id: 'h2',
    title: 'Вилла с вечерним светом',
    kind: 'Дом',
    price: '24,9 млн ₽',
    area: '240 м²',
    settlement: 'Сосновый Берег',
    image: '/images/house-2.png',
    specs: ['5 спален', 'Участок 15 сот.', 'Гараж'],
  },
  {
    id: 'h3',
    title: 'Скандинавский одноэтажный дом',
    kind: 'Дом',
    price: '15,2 млн ₽',
    area: '148 м²',
    settlement: 'Лесная Усадьба',
    image: '/images/house-3.png',
    specs: ['3 спальни', 'Участок 10 сот.', 'Сауна'],
  },
]

export const plots: Listing[] = [
  {
    id: 'p1',
    title: 'Участок у соснового леса',
    kind: 'Участок',
    price: '3,6 млн ₽',
    area: '12 соток',
    settlement: 'Малое Исаково',
    image: '/images/plot-1.png',
    specs: ['ИЖС', 'Газ по границе', 'Свет 15 кВт'],
  },
  {
    id: 'p2',
    title: 'Участок на первой линии',
    kind: 'Участок',
    price: '5,9 млн ₽',
    area: '18 соток',
    settlement: 'Озёрный',
    image: '/images/plot-2.png',
    specs: ['ИЖС', 'У воды', 'Все коммуникации'],
  },
  {
    id: 'p3',
    title: 'Участок с видом на озеро',
    kind: 'Участок',
    price: '4,2 млн ₽',
    area: '15 соток',
    settlement: 'Сосновый Берег',
    image: '/images/nature-lake.png',
    specs: ['ИЖС', 'Лес рядом', 'Дорога круглый год'],
  },
]

export type HouseModel = {
  name: string
  tagline: string
  area: string
  price: string
  image: string
  highlights: string[]
}

export type SettlementDetail = {
  slug: string
  positioning: string
  locationFull: string
  travelTime: string
  scale: string
  intro: string[]
  gallery: string[]
  masterplan: {
    image: string
    zones: { label: string; note: string }[]
  }
  benefits: string[]
  infrastructure: { title: string; note: string }[]
  models: HouseModel[]
  configurations: { name: string; note: string }[]
  includedFeatures: string[]
  facadeOptions: { name: string; note: string; image: string }[]
  purchaseOptions: string[]
  developer: {
    name: string
    initials: string
    note: string
  }
}

export const settlementDetails: Record<string, SettlementDetail> = {
  'maloe-isakovo': {
    slug: 'maloe-isakovo',
    positioning: 'Доступные резиденции комфорт-класса на Истринском водохранилище.',
    locationFull: 'Московская область, Солнечногорский район, село Исаково',
    travelTime: '45 минут от Москвы',
    scale: 'Более 30 резиденций',
    intro: [
      'Малое Исаково — клубный посёлок современной архитектуры эко-минимализма, расположенный в глубине лесного массива на берегу Истринского водохранилища. Это среда абсолютной приватности, тишины и гармонии с природой.',
      'Каждая резиденция спроектирована как самодостаточный дом для круглогодичной жизни: панорамное остекление, продуманные планировки и качественные фасадные решения. Единая клубная концепция объединяет соседей общим уровнем комфорта.',
    ],
    gallery: [
      '/images/mi-hero.png',
      '/images/nature-lake.png',
      '/images/interior.png',
      '/images/road-entrance.png',
    ],
    masterplan: {
      image: '/images/mi-masterplan.png',
      zones: [
        { label: 'Первая очередь', note: 'Резиденции у входной группы' },
        { label: 'Вторая очередь', note: 'Кварталы в глубине леса' },
        { label: 'Третья очередь', note: 'Приватные участки у воды' },
        { label: 'Досугово-развлекательный центр', note: 'Клубное сердце посёлка' },
        { label: 'Ландшафтный парк', note: 'Прогулочные маршруты и зоны отдыха' },
      ],
    },
    benefits: [
      'Абсолютная приватность',
      'Расположение в глубине лесного массива',
      'Тишина вдали от трасс',
      'Современная архитектура эко-минимализма',
      'Гармония с природой',
      'Комфортная клубная среда',
    ],
    infrastructure: [
      { title: 'Клубный комплекс', note: 'Центр общественной жизни посёлка' },
      { title: 'Авторский кафетерий', note: 'Завтраки и ужины рядом с домом' },
      { title: 'Фитнес', note: 'Тренировки без выезда в город' },
      { title: 'Детский клуб', note: 'Развитие и досуг для детей' },
      { title: 'Спортивный клуб', note: 'Секции и активный отдых' },
      { title: 'Образовательные программы', note: 'Занятия для всей семьи' },
    ],
    models: [
      {
        name: 'Ницца',
        tagline: 'Элегантная функциональность',
        area: '145 м²',
        price: 'от 19 млн ₽',
        image: '/images/mi-nice.png',
        highlights: [
          'Кухня-гостиная 30.8 м²',
          'Открытая терраса 13.7 м²',
          'Оптимальная планировка для семьи',
        ],
      },
      {
        name: 'Прованс',
        tagline: 'Атмосфера света',
        area: '192 м²',
        price: 'от 23 млн ₽',
        image: '/images/mi-provence.png',
        highlights: [
          'Кухня-гостиная 42 м²',
          'Панорамные виды',
          'Приватная мастер-спальня',
        ],
      },
      {
        name: 'Милан',
        tagline: 'Безупречный статус',
        area: '240 м²',
        price: 'от 34 млн ₽',
        image: '/images/mi-milan.png',
        highlights: [
          'Раздельные кухня-столовая и гостиная',
          'Гранд-терраса 33 м²',
          'Пространство для масштабных приёмов',
        ],
      },
    ],
    configurations: [
      {
        name: 'Тёплый контур',
        note: 'Готовый утеплённый дом с фасадом, окнами и подведёнными коммуникациями — можно приступать к отделке.',
      },
      {
        name: 'Серый ключ',
        note: 'Расширенная готовность с инженерными системами внутри — минимальный шаг до чистовой отделки.',
      },
    ],
    includedFeatures: [
      'Панорамные энергоэффективные окна',
      'Отделка фасада',
      'Ограждение участка',
      'Входная дверь',
      'Инженерные коммуникации',
      'Электричество',
      'Вода и канализация',
      'Отопление',
      'Интернет',
      'Благоустройство территории',
    ],
    facadeOptions: [
      {
        name: 'Облицовочный керамический кирпич',
        note: 'Классическая долговечная фактура с тёплым природным оттенком.',
        image: '/images/mi-facade-brick.png',
      },
      {
        name: 'Гибкая керамика Phomi',
        note: 'Современный лёгкий материал с натуральным каменным рисунком.',
        image: '/images/mi-facade-phomi.png',
      },
    ],
    purchaseOptions: [
      '100% оплата',
      'Индивидуальная скидка',
      'Беспроцентная рассрочка до 6 месяцев',
      'Ипотека',
    ],
    developer: {
      name: 'Истра Строй Сервис',
      initials: 'ИС',
      note: 'Девелопер клубного посёлка Малое Исаково. Собственное производство и строительный контроль на каждом этапе.',
    },
  },
}

export const crmStages = [
  'Новый лид',
  'Контакт',
  'Подборка',
  'Показ',
  'Переговоры',
  'Бронь',
  'Сделка',
] as const

export type Lead = {
  name: string
  phone: string
  source: string
  budget: string
  direction: string
  object: string
  manager: string
  nextAction: string
  stage: (typeof crmStages)[number]
}

export const leads: Lead[] = [
  {
    name: 'Игорь Смирнов',
    phone: '+7 900 128-44-10',
    source: 'Сайт · подборка',
    budget: '12–16 млн ₽',
    direction: 'Северное',
    object: 'Малое Исаково · дом',
    manager: 'А. Орлова',
    nextAction: 'Звонок сегодня 15:00',
    stage: 'Новый лид',
  },
  {
    name: 'Мария Ковалёва',
    phone: '+7 921 553-09-77',
    source: 'Реклама · Директ',
    budget: '8–10 млн ₽',
    direction: 'Западное',
    object: 'Озёрный · участок',
    manager: 'А. Орлова',
    nextAction: 'Отправить подборку',
    stage: 'Контакт',
  },
  {
    name: 'Дмитрий Лебедев',
    phone: '+7 905 210-31-08',
    source: 'Рекомендация',
    budget: '18–24 млн ₽',
    direction: 'Северное',
    object: 'Сосновый Берег · дом',
    manager: 'П. Гущин',
    nextAction: 'Показ в субботу',
    stage: 'Показ',
  },
  {
    name: 'Елена Титова',
    phone: '+7 911 447-62-30',
    source: 'Сайт · форма',
    budget: '14–18 млн ₽',
    direction: 'Восточное',
    object: 'Лесная Усадьба · дом',
    manager: 'П. Гущин',
    nextAction: 'Согласовать договор',
    stage: 'Переговоры',
  },
  {
    name: 'Сергей Панов',
    phone: '+7 903 700-15-22',
    source: 'Партнёр',
    budget: '20+ млн ₽',
    direction: 'Северное',
    object: 'Малое Исаково · дом',
    manager: 'А. Орлова',
    nextAction: 'Внести предоплату',
    stage: 'Бронь',
  },
]
