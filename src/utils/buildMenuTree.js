// Build tree function
export function buildMenuTree(menus, childrenMap) {
  const menuMap = new Map();

  // Step 1: Create map
  menus.forEach((item) => {
    menuMap.set(item.id, { ...item, children: [] });
  });

  // Step 2: Attach children
  childrenMap.forEach((parent) => {
    const parentNode = menuMap.get(parent.id);

    parent.children.forEach((childId) => {
      const childNode = menuMap.get(childId);
      if (childNode) parentNode.children.push(childNode);
    });
  });

  // Step 3: Find roots
  const childIds = new Set(childrenMap.flatMap((p) => p.children));

  return menus
    .filter((menu) => !childIds.has(menu.id))
    .map((menu) => menuMap.get(menu.id));
}
