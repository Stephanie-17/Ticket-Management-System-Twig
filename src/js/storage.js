export const save = (key, data) => localStorage.setItem(key, JSON.stringify(data));
export const load = (key, fallback = null) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : fallback;
};
export const remove = (key) => localStorage.removeItem(key);
