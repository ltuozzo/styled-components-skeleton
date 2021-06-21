const map = ['null', 'default', 'overlay'] as const;

export const zIndex = (name: typeof map[number]): number =>
  map.findIndex((itemName) => itemName === name);
