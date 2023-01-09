import { gql } from 'graphql-request';
import sortNewsByImage from './sortNewsByImage';

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQL query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;
  // Fetch function with Next.js caching
  const res = await fetch(
    'https://ellington.stepzen.net/api/xrayed-chipmunk/__graphql',
    {
      method: 'POST',
      cache: isDynamic ? 'no-cache' : 'default',
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `ApiKey ${process.env.STEPZEN_API_KEY}`
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords
        }
      })
    }
  );

  console.log('LOADING NEW DATA FROM API:>>>>', category, keywords);

  const newsResponse = await res.json();

  // Sort function by images vs not images present
  const news = sortNewsByImage(newsResponse.data.myQuery);

  return news;
};

export default fetchNews;
