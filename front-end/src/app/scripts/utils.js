export function parseUrl(url = window.location.href) {
  let query = url.split("?")[1] || "";
  let result = {};

  let parts = query.split("&");
  // TODO #functional-programming: Use Array.map() & Array.reduce()
  for (let i in parts) {
    let item = parts[i];
    let kv = item.split("=");
    result[kv[0]] = kv[1];
  }

  return result;
}
