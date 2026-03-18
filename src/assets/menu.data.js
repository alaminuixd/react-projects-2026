export const menus = [
  { id: 1, text: "Home", link: "/" },
  { id: 2, text: "Shop", link: "/products" },
  { id: 3, text: "Electronics", link: "/electronics" },
  { id: 4, text: "Fashion", link: "/products" },
  { id: 5, text: "Mobiles", link: "/mobiles" },
  { id: 6, text: "Laptops", link: "/laptops" },
  { id: 7, text: "Men", link: "/products/men" },
  { id: 8, text: "Women", link: "/products/women" },
  { id: 9, text: "Accessories", link: "/accessories" },
  { id: 10, text: "Cart", link: "/cart" },
  { id: 11, text: "Account", link: "/account" },
  { id: 12, text: "Orders", link: "/orders" },
  { id: 13, text: "Wishlist", link: "/wishlist" },
];

export const childrenMap = [
  { id: 2, children: [3, 4] },
  { id: 3, children: [5, 6] },
  { id: 4, children: [7, 8, 9] },
  { id: 11, children: [12, 13] },
];
