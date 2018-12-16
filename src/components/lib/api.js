import ApiKey from './api-key';

const Api = (url) => {
  const options = {
    headers: { 'X-Auth-Token': ApiKey }
  };

  return fetch(url, options)
    .then(res => res.json())
    .catch((error) => console.warn("fetch error:", error))
    .then(data => data)
}

export default Api;