export default function sortNewsByImage(news: NewsResponse): NewsResponse {
  const newsWithImage = news.data.filter((newsItem) => newsItem.image !== null);
  const newsWithoutImage = news.data.filter(
    (newsItem) => newsItem.image === null
  );

  return {
    pagination: news.pagination,
    data: [...newsWithImage, ...newsWithoutImage]
  };
}
