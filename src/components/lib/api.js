import ApiKey from './api-key';

const Api = (league) => {
  const url = `http://api.football-data.org/v2/competitions/${league}/standings/`;
  const options = {
    headers: { 'X-Auth-Token': ApiKey }
  };

  return fetch(url, options)
    .then(res => res.json())
    .catch((error) => console.warn("fetch error:", error))
    .then(data => data)
}

export default Api;