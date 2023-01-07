import React from 'react'
import { categories } from '../utils/constants'
import fetchNews from '../utils/fetchNews';

const Homepage = async () => {
  // fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(','));
  console.log(news);
  return (
    <div>
      {/* Newslist list */}
    </div>
  )
}

export default Homepage