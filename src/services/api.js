const getNews = async (country, page, pageSize) => fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.API_KEY}&pageSize=${pageSize}`)
  .then((resp) => resp.json());

export default {
  getNews,
};
