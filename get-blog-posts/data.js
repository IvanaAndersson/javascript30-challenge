const handleError = x => {
  if (!x.ok) throw new Error(x.statusText);
  return x;
};
const deserializeData = x => x.json();

export function fetchData(hError = handleError, dData = deserializeData, url) {
  return fetch(url)
    .then(hError)
    .then(dData)
    .catch(console.error);
}
