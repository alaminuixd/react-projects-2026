import { v4 as uuidv4 } from "uuid";

// Import images for Product 1
import p1_1 from "./1/product1.jpeg";
import p1_2 from "./1/product2.jpeg";
import p1_3 from "./1/product3.jpeg";
import p1_4 from "./1/product4.jpeg";

// Import images for Product 2
import p2_1 from "./2/product1.jpeg";
import p2_2 from "./2/product2.jpeg";
import p2_3 from "./2/product3.jpeg";
import p2_4 from "./2/product4.jpeg";

// Import images for Product 3
import p3_1 from "./3/product1.jpeg";
import p3_2 from "./3/product2.jpeg";
import p3_3 from "./3/product3.jpeg";
import p3_4 from "./3/product4.jpeg";

// Import images for Product 4 (note: you had 5 folder? We'll use 4)
import p4_1 from "./4/product1.jpeg";
import p4_2 from "./4/product2.jpeg";
import p4_3 from "./4/product3.jpeg";
import p4_4 from "./4/product4.jpeg";

const products = [
  {
    id: "30b2a281-0ad1-4263-96df-ddb0ea6af760" /* uuidv4() */,
    title: "Osaka Entry Tee Superdry Twelve",
    slug: "osaka-entry-tee-superdry",
    breadcrumb: [
      { text: "home", link: "/" },
      { text: "shop", link: "/products" },
      { text: "men", link: "/products/men" },
      { text: "tshirt", link: "/products/men/tshirt" },
    ],
    gender: "men",
    prices: {
      regular: 250,
      sale: 190,
    },
    currency: "USD",
    rating: 5,
    reviews: 3,
    available: true,
    categories: [
      { text: "men", link: "/products/men" },
      { text: "t-shirts", link: "/products/men/tshirt" },
    ],
    tags: ["jeans", "man", "t-shirt", "white"],
    sizes: ["S", "M", "L"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis massa nec velit commodo lobortis.",
    images: [p1_1, p1_2, p1_3, p1_4],
    img: [
      { thumb: p1_1, original: p1_1, alt: "alt text", feature: true },
      { thumb: p1_2, original: p1_2, alt: "alt text", feature: false },
      { thumb: p1_3, original: p1_3, alt: "alt text", feature: false },
      { thumb: p1_4, original: p1_4, alt: "alt text", feature: false },
    ],
    stock: 10,
    brand: "Superdry",
    featured: false,
    tabs: [
      {
        id: uuidv4(),
        title: "Description",
        type: "text",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Vestibulum iaculis massa nec velit commodo lobortis.",
          "Osaka Entry Tee NOK 399, Superdry – NELLY.COM",
        ],
      },
      {
        id: uuidv4(),
        title: "Additional Information",
        type: "table",
        content: [
          { label: "Size", value: "S, M, L" },
          { label: "Material", value: "Cotton" },
          { label: "Brand", value: "Superdry" },
        ],
      },
      {
        id: uuidv4(),
        title: "Reviews (3)",
        type: "reviews",
        content: [
          {
            id: 1,
            author: "John",
            rating: 5,
            date: "2024-05-10",
            comment: "Very comfortable and good quality.",
          },
          {
            id: 2,
            author: "Alex",
            rating: 4,
            date: "2024-04-21",
            comment: "Nice fabric but size runs slightly large.",
          },
          {
            id: 3,
            author: "Emma",
            rating: 5,
            date: "2024-03-15",
            comment: "Great everyday t-shirt.",
          },
        ],
      },
    ],
  },
  {
    id: "31fbff58-cd89-46f7-8bd8-320cb8320cc1" /* uuidv4() */,
    title: "Fluro Big Pullover trend Designers Remix",
    slug: "fluro-big-pullover-designers-remix",
    breadcrumb: [
      { text: "home", link: "/" },
      { text: "shop", link: "/products" },
      { text: "women", link: "/products/women" },
      { text: "tshirt", link: "/products/women/tshirt" },
    ],
    gender: "women",
    prices: {
      regular: 250,
      sale: 190,
    },
    currency: "USD",
    rating: 4,
    reviews: 3,
    available: false,
    categories: [
      { text: "women", link: "/products/women" },
      { text: "sweaters", link: "#" },
    ],
    tags: ["sweater", "pullover", "women", "fashion"],
    sizes: ["S", "M", "L"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis massa nec velit commodo lobortis.",
    images: [p2_1, p2_2, p2_3, p2_4],
    img: [
      { thumb: p2_1, original: p2_1, alt: "alt text", feature: true },
      { thumb: p2_2, original: p2_2, alt: "alt text", feature: false },
      { thumb: p2_3, original: p2_3, alt: "alt text", feature: false },
      { thumb: p2_4, original: p2_4, alt: "alt text", feature: false },
    ],
    stock: 10,
    brand: "Designers Remix",
    featured: false,
    tabs: [
      {
        id: uuidv4(),
        title: "Description",
        type: "text",
        content: [
          "This pullover features a relaxed fit.",
          "Soft knitted fabric ideal for colder seasons.",
        ],
      },
      {
        id: uuidv4(),
        title: "Additional Information",
        type: "table",
        content: [
          { label: "Material", value: "Wool Blend" },
          { label: "Brand", value: "Designers Remix" },
          { label: "Fit", value: "Relaxed" },
        ],
      },
      {
        id: uuidv4(),
        title: "Reviews (2)",
        type: "reviews",
        content: [
          {
            id: 1,
            author: "Sophia",
            rating: 4,
            date: "2024-02-11",
            comment: "Nice sweater and very warm.",
          },
          {
            id: 2,
            author: "Anna",
            rating: 5,
            date: "2024-01-18",
            comment: "Love the oversized style!",
          },
        ],
      },
    ],
  },
  {
    id: "acd5c10f-72e0-45de-9d68-fdd0f9a45110" /* uuidv4() */,
    title: "Varanise CN Tee Hilfiger Denim",
    slug: "varanise-cn-tee-hilfiger-denim",
    breadcrumb: [
      { text: "home", link: "/" },
      { text: "shop", link: "/products" },
      { text: "women", link: "/products/women" },
      { text: "tshirt", link: "/products/women/tshirt" },
    ],
    gender: "women",
    prices: {
      regular: 250,
      sale: 190,
    },
    currency: "USD",
    rating: 5,
    reviews: 3,
    available: true,
    categories: [
      { text: "women", link: "/products/women" },
      { text: "tops", link: "#" },
    ],
    tags: ["t-shirt", "women", "casual", "white"],
    sizes: ["S", "M", "L"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis massa nec velit commodo lobortis.",
    images: [p3_1, p3_2, p3_3, p3_4],
    img: [
      { thumb: p3_1, original: p3_1, alt: "alt text", feature: true },
      { thumb: p3_2, original: p3_2, alt: "alt text", feature: false },
      { thumb: p3_3, original: p3_3, alt: "alt text", feature: false },
      { thumb: p3_4, original: p3_4, alt: "alt text", feature: false },
    ],
    stock: 10,
    brand: "Hilfiger Denim",
    featured: false,
    tabs: [
      {
        id: uuidv4(),
        title: "Description",
        type: "text",
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Vestibulum iaculis massa nec velit commodo lobortis.",
          "Osaka Entry Tee NOK 399, Superdry – NELLY.COM",
        ],
      },
      {
        id: uuidv4(),
        title: "Additional Information",
        type: "table",
        content: [
          { label: "Size", value: "S, M, L" },
          { label: "Material", value: "Cotton" },
          { label: "Brand", value: "Superdry" },
        ],
      },
      {
        id: uuidv4(),
        title: "Reviews (3)",
        type: "reviews",
        content: [
          {
            id: 1,
            author: "John",
            rating: 5,
            date: "2024-05-10",
            comment: "Very comfortable and good quality.",
          },
          {
            id: 2,
            author: "Alex",
            rating: 4,
            date: "2024-04-21",
            comment: "Nice fabric but size runs slightly large.",
          },
          {
            id: 3,
            author: "Emma",
            rating: 5,
            date: "2024-03-15",
            comment: "Great everyday t-shirt.",
          },
        ],
      },
    ],
  },
  {
    id: "bb521531-cab4-4e61-8345-bdbd8a6f3b16" /* uuidv4() */,
    title: "Union Sweater Nelly Current Trend",
    slug: "union-sweater-nly-trend",
    breadcrumb: [
      { text: "home", link: "/" },
      { text: "shop", link: "/products" },
      { text: "men", link: "/products/men" },
      { text: "tshirt", link: "/products/men/tshirt" },
    ],
    gender: "men",
    prices: {
      regular: 250,
      sale: 190,
    },
    oldprice: 155,
    price: 101.0,
    currency: "USD",
    rating: 3.5,
    reviews: 3,
    available: true,
    categories: [
      { text: "men", link: "/products/men" },
      { text: "sweaters", link: "#" },
    ],
    tags: ["sweater", "men", "casual", "trend"],
    sizes: ["S", "M", "L"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum pretium turpis, vel pulvinar diam vulputate quis. Donec porttitor volutpat rutrum. Suspendisse suscipit arcu velit, in rutrum est molestie in. Proin convallis scelerisque facilisis. Integer vestibulum mollis felis eu mollis.",
    images: [p4_1, p4_2, p4_3, p4_4],
    img: [
      { thumb: p4_1, original: p4_1, alt: "alt text", feature: true },
      { thumb: p4_2, original: p4_2, alt: "alt text", feature: false },
      { thumb: p4_3, original: p4_3, alt: "alt text", feature: false },
      { thumb: p4_4, original: p4_4, alt: "alt text", feature: false },
    ],
    stock: 10,
    brand: "NLY Trend",
    featured: false,
    tabs: [
      {
        id: uuidv4(),
        title: "Description",
        type: "text",
        content: [
          "This pullover features a relaxed fit.",
          "Soft knitted fabric ideal for colder seasons.",
        ],
      },
      {
        id: uuidv4(),
        title: "Additional Information",
        type: "table",
        content: [
          { label: "Material", value: "Wool Blend" },
          { label: "Brand", value: "Designers Remix" },
          { label: "Fit", value: "Relaxed" },
        ],
      },
      {
        id: uuidv4(),
        title: "Reviews (2)",
        type: "reviews",
        content: [
          {
            id: 1,
            author: "Sophia",
            rating: 4,
            date: "2024-02-11",
            comment: "Nice sweater and very warm.",
          },
          {
            id: 2,
            author: "Anna",
            rating: 5,
            date: "2024-01-18",
            comment: "Love the oversized style!",
          },
        ],
      },
    ],
  },
];

export const singleProduct = {
  breadcrumb: [
    { text: "home", link: "/" },
    { text: "shop", link: "/products" },
    { text: "men", link: "/products/men" },
    { text: "tshirt", link: "/products/men/tshirt" },
  ],
};

export default products;
