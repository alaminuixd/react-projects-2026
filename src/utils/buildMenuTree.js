// Build tree function
export function buildMenuTree(menus, childrenMap) {
  const menuMap = new Map();

  // Step 1: Create node map
  menus.forEach((item) => {
    menuMap.set(item.id, { ...item, children: [] });
  });

  // Step 2: Attach children safely
  childrenMap.forEach((parent) => {
    const parentNode = menuMap.get(parent.id);

    // safety check (FIXED ISSUE)
    if (!parentNode) return;

    parent.children.forEach((childId) => {
      const childNode = menuMap.get(childId);

      // safety check (FIXED ISSUE)
      if (childNode) {
        parentNode.children.push(childNode);
      }
    });
  });

  // Step 3: Find all child IDs
  const childIds = new Set(childrenMap.flatMap((p) => p.children || []));

  // Step 4: Return only root nodes
  return menus
    .filter((menu) => !childIds.has(menu.id))
    .map((menu) => menuMap.get(menu.id))
    .filter(Boolean); // extra safety
}
