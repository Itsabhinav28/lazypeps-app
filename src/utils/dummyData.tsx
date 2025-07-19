export const imageData = [
    require('../assets/products/1.png'),
    require('../assets/products/2.png'),
    require('../assets/products/3.png'),
    require('../assets/products/4.png'),
    require('../assets/products/5.png'),
    require('../assets/products/6.png'),
    require('../assets/products/7.png'),
    require('../assets/products/8.png'),
    require('../assets/products/9.png'),
    require('../assets/products/10.png'),
    require('../assets/products/11.png'),
    require('../assets/products/12.png'),
    require('../assets/products/13.png'),
    require('../assets/products/14.png'),
    require('../assets/products/15.png'),
    require('../assets/products/16.png'),
]

export const adData = [
    require('../assets/products/c1.jpg'),
    require('../assets/products/c2.jpg'),
    require('../assets/products/c3.jpg'),
    require('../assets/products/c4.jpg'),
    require('../assets/products/c5.jpg'),
]

export const products = [
  {
    id: 1,
    name: "Apple",
    image: require('../assets/products/1.png'),
    price: 30
  },
  {
    id: 2,
    name: "Banana",
    image: require('../assets/products/2.png'),
    price: 20
  },
  {
    id: 3,
    name: "Orange",
    image: require('../assets/products/3.png'),
    price: 15
  },
  // Add more products as needed, matching your assets
];


export const categories = [
    {
        id: 1,
        name: "Milk, Curd & Paneer",
        image: require('../assets/category/1.png'),
        products: products
    },
    {
        id: 2,
        name: "Pharma & Wellness",
        image: require('../assets/category/2.png')
    },
    {
        id: 3,
        name: "Vegetables & Fruits",
        image: require('../assets/category/3.png')
    },
    {
        id: 4,
        name: "Munchies",
        image: require('../assets/category/4.png')
    },
    {
        id: 5,
        name: "Home & Office",
        image: require('../assets/category/5.png')
    },
    {
        id: 6,
        name: "Baby Care",
        image: require('../assets/category/6.png')
    },
    {
        id: 7,
        name: "Ata, Rice & Dal",
        image: require('../assets/category/7.png')
    },
    {
        id: 8,
        name: "Cleaning Essentials",
        image: require('../assets/category/8.png')
    },
]


export const wavyData = "M 0 2000 0 500 Q 62.5 280 125 500 t 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0   125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0 v1000 z"





export const orders = [
    {
        orderId: 'ORDER21312',
        items: [
            { id: 'a', item: {name:'Milk'}, count: 2 },
            { id: 'b', item: {name:'Tea'}, count: 1 },
        ],
        totalPrice: 25.00,
        createdAt: '2024-08-10T10:00:00Z',
        status: 'delivered'
    },
    {
        orderId: 'ORDER21212',
        items: [
            { id: 'c', item: 'Burger', count: 1 },
            { id: 'd', item: 'Fries', count: 3 },
        ],
        totalPrice: 15.00,
        createdAt: '2024-08-11T11:30:00Z',
        status: 'available'
    },
];

export const banner = require('../assets/images/banner.png');