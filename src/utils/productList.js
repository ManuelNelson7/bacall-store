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
        description: 'A smart spread-collar shirt is cut from finely textured yet substantial cotton and tailored with back pleats, a French placket and rounded, adjustable cuffs.',
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
        sizes: [
            { name: '38', inStock: true },
            { name: '40', inStock: true },
            { name: '42', inStock: true },
            { name: '44', inStock: false },
            { name: '46', inStock: false },
            { name: '48', inStock: true },
        ],
        description: "Dress pants but make them affordable. Spice up your closet with a classic pair of wool dress pants in Light Grey that won't break the bank.",
        stock: 34
    },
    {
        id: 4,
        category: 'Pants',
        name: 'Blue dress pant',
        img: 'https://cdn.shopify.com/s/files/1/0098/0202/2971/products/original_50ed8c3c-078e-4a37-aebd-b30c832f7c70_600x.jpg?v=1575489695',
        price: '70',
        sizes: [
            { name: '38', inStock: true },
            { name: '40', inStock: true },
            { name: '42', inStock: true },
            { name: '44', inStock: false },
            { name: '46', inStock: true },
            { name: '48', inStock: true },
        ],
        description: "Dress pants but make them affordable. Spice up your closet with a classic pair of wool dress pants in Navy Blue that won't break the bank.",
        stock: 34
    },
    {
        id: 5,
        category: 'Pants',
        name: 'Black dress pant',
        img: 'https://www.baronboutique.com/wp-content/uploads/2020/09/mens-black-dress-pants.jpg',
        price: '70',
        sizes: [
            { name: '38', inStock: false },
            { name: '40', inStock: true },
            { name: '42', inStock: true },
            { name: '44', inStock: true },
            { name: '46', inStock: true },
            { name: '48', inStock: true },
        ],
        description: "Mens black dress pants offer distinctive looks that maintain a perfect balance between business and casual or work and wedding. Custom tailoring gives the black dress pants for men a spot-on fit. Crafted from cool and breathable merino wool-cashmere blend these black dress pants with belt loops and pockets are super comfortable and stylish. With wool’s natural stretch ankle-length black dress pants hold up against wrinkles very well.",
        stock: 34
    },
    {
        id: 6,
        category: 'Pants',
        name: 'Brown dress pant',
        img: 'https://n.nordstrommedia.com/id/sr3/c32e32a6-e3dd-476e-a72c-345416b02ee5.jpeg?h=365&w=240&dpr=2',
        price: '70',
        sizes: [
            { name: '38', inStock: true },
            { name: '40', inStock: true },
            { name: '42', inStock: true },
            { name: '44', inStock: true },
            { name: '46', inStock: true },
            { name: '48', inStock: true },
        ],
        description: "Mens brown dress pants offer distinctive looks that maintain a perfect balance between business and casual or work and wedding. Custom tailoring gives the black dress pants for men a spot-on fit. Crafted from cool and breathable merino wool-cashmere blend these black dress pants with belt loops and pockets are super comfortable and stylish. With wool’s natural stretch ankle-length black dress pants hold up against wrinkles very well.",
        stock: 34
    },

];

export default productList;