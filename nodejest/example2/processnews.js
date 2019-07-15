const { getNews } = require('./newsrequests');

function processNews() {
  return getNews()
    .then(res => {
      const newsArr = makeNewsArr(res.data.response.results)
      //console.log(newsArr);
      return newsArr;
    })
    .catch(err => console.log(err)); 
}

function makeNewsArr(results) {
  return results.map(article => {
    return {
      headline: article.fields.headline,
      articleText: article.fields.bodyText,
      author: article.fields.byline,
      url: article.webUrl
    }
  })
};

module.exports = { processNews, makeNewsArr };

//processNews();