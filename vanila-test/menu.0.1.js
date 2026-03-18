// ✅ 1. Menu + Submenu Data
const menus = [
  { id: 1, text: "Home", link: "/" },
  { id: 2, text: "Shop", link: "/shop" },
  { id: 3, text: "Electronics", link: "/electronics" },
  { id: 4, text: "Fashion", link: "/fashion" },
  { id: 5, text: "Mobiles", link: "/mobiles" },
  { id: 6, text: "Laptops", link: "/laptops" },
  { id: 7, text: "Men", link: "/men" },
  { id: 8, text: "Women", link: "/women" },
  { id: 9, text: "Accessories", link: "/accessories" },
  { id: 10, text: "Cart", link: "/cart" },
  { id: 11, text: "Account", link: "/account" },
  { id: 12, text: "Orders", link: "/orders" },
  { id: 13, text: "Wishlist", link: "/wishlist" },
];
// ✅ 2. Parent → Children Relationship
const childrenMap = [
  { id: 2, children: [3, 4] }, // Shop → Electronics, Fashion
  { id: 3, children: [5, 6] }, // Electronics → Mobiles, Laptops
  { id: 4, children: [7, 8, 9] }, // Fashion → Men, Women, Accessories
  { id: 11, children: [12, 13] }, // Account → Orders, Wishlist
];

// ✅ 3. Build Tree Using Map
// Step 1: Create lookup map
const menuMap = new Map();

menus.forEach((item) => {
  menuMap.set(item.id, { ...item, children: [] });
});

// ✅ 4. Attach Children
childrenMap.forEach((parent) => {
  const parentNode = menuMap.get(parent.id);

  parent.children.forEach((childId) => {
    const childNode = menuMap.get(childId);

    if (childNode) {
      parentNode.children.push(childNode);
    }
  });
});

// ✅ 5. Find Root Menus Using Set
const childIds = new Set(childrenMap.flatMap((parent) => parent.children));

const roots = menus
  .filter((menu) => !childIds.has(menu.id))
  .map((menu) => menuMap.get(menu.id));

// ✅ 6. Final Output (Tree Structure)
console.log(JSON.stringify(roots, null, 2));
