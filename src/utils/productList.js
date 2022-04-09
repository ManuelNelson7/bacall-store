const productList = [
    {
        id: 1,
        name: 'White dress shirt',
        category: 'Shirts',
        img: 'https://suitshop.com/static/80eb157de905172c1db0bf8d584f4798/cee19/CLASSIC_WHITE_SHIRT_009.jpg',
        price: '35',
        sizes: [
            { name: 'XS', inStock: true },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: 'XXL', inStock: false },
        ],
        description: 'This classic men’s trench coat is made of two-ply Bacall® gabardine woven from combed, extra-long staple cotton. As a between-seasons coat, it can be worn all year round. The storm flaps of the coat‘s distinctively wide stand collar can be buttoned up and secured using the metal buckle. A back yoke and a shoulder yoke in the front left cover the shoulders.',
        stock: 34
    },
    {
        id: 2,
        name: 'Bogart Trench Coat',
        category: 'Coats',
        img: 'https://i8.amplience.net/i/indochino/15013992_0_0/brown-solid-design-trenchcoat.jpg?$suit-pdp-desk$',
        price: '120',
        sizes: [
            { name: 'XS', inStock: true },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: false },
            { name: 'XL', inStock: true },
            { name: 'XXL', inStock: true },
        ],
        description: 'This classic men’s trench coat is made of two-ply Bacall® gabardine woven from combed, extra-long staple cotton. As a between-seasons coat, it can be worn all year round. The storm flaps of the coat‘s distinctively wide stand collar can be buttoned up and secured using the metal buckle. A back yoke and a shoulder yoke in the front left cover the shoulders.',
        stock: 5
    },
    {
        id: 3,
        category: 'Pants',
        name: 'Gray dress pant',
        img: 'https://cdn.shopify.com/s/files/1/0571/5122/6063/products/kd00436_med-grey_1-v2_2440x.jpg?v=1645555407',
        price: '75',
        stock: 34
    },

];

export default productList;