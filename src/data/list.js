import add from 'date-fns/add';

const today = new Date();

// 這邊的 item 會有兩種資料格式，前端會去處理，一個是 group 的 title，一個是列表內容
export const FAKE_LIST = [
  { title: 'In Progress', type: 'groupTitle' },
  {
    id: '1',
    startDate: today,
    endDate: add(today, { days: 3 }),
    type: 'inProgress',
    title: '三天二夜日本畢業旅行',
    description: '自駕旅行!! 要開小巴哦!! 預計北部玩一天，南部玩兩天。',
    tags: ['沖繩', '游泳'],
  },
  { title: '2022', type: 'groupTitle' },
  {
    id: '2',
    startDate: add(today, { months: 1, days: 3 }),
    endDate: add(today, { months: 1, days: 4 }),
    type: 'pending',
    title: '台南小聚',
    cover: 'https://picsum.photos/seed/picsum/200/300',
    description:
      'Lorem ipsum dolor sit amet sit acida, gravida consectetur adipiscing elit',
    tags: ['Tag1'],
  },
  {
    id: '3',
    startDate: add(today, { months: 2, days: 1 }),
    endDate: add(today, { months: 2, days: 2 }),
    type: 'pending',
    title: 'Lobortis proin duis quis gravida',
    description:
      'Metus praesent maecenas arcu, amet sed. Nisi, consectetur nunc, scelerisque aliquam et volutpat et. Habitant elit, vitae rutrum quam adipiscing urna, turpis.t',
    tags: ['Tag1', 'Tag2'],
  },
  { title: 'Draft', type: 'groupTitle' },
  {
    id: '4',
    startDate: null,
    endDate: null,
    type: 'draft',
    title: 'Lobortis proin duis quis gravida',
    description: '',
    tags: [],
  },
  { title: 'Travelogue', type: 'groupTitle' },
  {
    id: '5',
    startDate: new Date('2022/4/4'),
    endDate: new Date('2022/4/8'),
    type: 'completed',
    title: 'Vestibulum nec blandit tortor',
    cover: 'https://picsum.photos/id/237/200/300',
    description:
      'Fusce a risus ornare, lobortis elit non, porta est. Nullam vitae leo auctor, convallis risus vitae, sagittis orci. Cras et purus commodo, lacinia lectus id, accumsan ligula. Maecenas sit amet neque dui. Nulla sodales ultrices tellus ac semper. Morbi at turpis a nisi pulvinar vestibulum. Aliquam varius iaculis enim, eu egestas enim ullamcorper non. Nunc nisi eros, sollicitudin eu ultrices in, ornare eu velit. Vivamus scelerisque massa vitae quam condimentum',
    tags: ['risus', 'lobortis', 'proin'],
  },
  {
    id: '6',
    startDate: new Date('2022/3/1'),
    endDate: new Date('2022/3/4'),
    type: 'completed',
    title: 'Proin ultrices fermentum neque',
    cover: 'https://picsum.photos/id/33/200/300',
    description:
      'Integer malesuada tortor odio. Phasellus blandit tincidunt ullamcorper.',
    tags: ['tortor'],
  },
  {
    id: '11',
    startDate: new Date('2021/12/1'),
    endDate: new Date('2021/12/4'),
    type: 'completed',
    title: 'Proin ultrices fermentum neque',
    description:
      'Integer malesuada tortor odio. Phasellus blandit tincidunt ullamcorper.',
    tags: ['Phasellus'],
    variants: [
      {
        id: '7',
        title: '(含下雨備案) 5 天4 夜高雄行',
        price: 35,
        subscribers: 14,
        isActive: true,
      },
      {
        id: '8',
        title: '(完整版) 5 天4 夜高雄行',
        price: 25,
        subscribers: 4,
        isActive: true,
      },
      {
        id: '9',
        title: '(免費版) 2天1夜高雄行 - 修訂版',
        price: 0,
        subscribers: 1024,
        isActive: true,
      },
      {
        id: '10',
        title: '(免費版) 2天1夜高雄行',
        price: 0,
        subscribers: 13,
        isActive: false,
      },
    ],
  },
];
