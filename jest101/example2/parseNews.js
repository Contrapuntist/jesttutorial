const { getNews } = require('./newsrequests');

export function processNews() {
  return getNews()
    .then(res => {
      return makeNewsArr(res.data.response.results)
    })
    .catch(err => console.log(err)); 
}

export function makeNewsArr(results) {
  return results.map(article => {
    return {
      headline: article.fields.headline,
      articleText: article.fields.bodyText,
      author: article.fields.byline,
      url: article.webUrl
    }
  })
};