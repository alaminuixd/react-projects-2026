const menus = [
  { id: 1, text: "home", link: "#" },
  { id: 2, text: "about", link: "#" },
  { id: 3, text: "all products", link: "#" },
  { id: 4, text: "men", link: "#" },
  { id: 5, text: "women", link: "#" },
  { id: 6, text: "kids", link: "#" },
];

const childrenMap = [
  { id: 1, children: [2, 3] },
  { id: 4, children: [5, 6] },
];

// 1. Create a lookup map
// Turn menus into a fast-access dictionary:
const menuMap = new Map();
menus.forEach((item) => {
  menuMap.set(item.id, { ...item, children: [] });
});

// 2. Build parent → children links
// Loop through childrenMap and attach children:
childrenMap.forEach((parent) => {
  const parentNode = menuMap.get(parent.id);
  //   console.log(parentNode);
  parent.children.forEach((childId) => {
    const childNode = menuMap.get(childId);
    if (childNode) {
      parentNode.children.push(childNode);
    }
  });
});
console.log(menuMap);

// 3. Find root nodes
// Roots are nodes that are not children of anyone.
const childIds = new Set(childrenMap.flatMap((p) => p.children));
const roots = menus
  .filter((menu) => !childIds.has(menu.id))
  .map((menu) => menuMap.get(menu.id));

console.log(roots);
