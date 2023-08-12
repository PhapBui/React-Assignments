// Save an item to local storage
export function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Get an item from local storage
export function getFromStorage(key, defaultData) {
  return JSON.parse(localStorage.getItem(key)) ?? defaultData;
}
// Remove item in local storage by key
export function removeItem(key) {
  localStorage.removeItem(key);
}
