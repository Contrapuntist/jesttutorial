const config = require('../../config');
const axios = require('axios');

/**
 * Guardian API documentation
 * https://open-platform.theguardian.com/documentation/ 
 */

 function getNews() {
  const url = `https://content.guardianapis.com/search?section=music&order-by=newest&show-fields=all&q=rock&api-key=${config().guardian}`;
  console.log('==== fetching news ====');
  return axios.get(url);
}

module.exports = { getNews };