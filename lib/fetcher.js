export function get(url) {
  return fetch(url).then(res => res.json());
}
