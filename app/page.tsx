import React from 'react'

import { categories } from '../utils/constants'
import fetchNews from '../utils/fetchNews';
import NewsList from './NewsList';
import data from '../data.json';
import sortNewsByImage from '../utils/sortNewsByImage';

const Homepage = async () => {
  // fetch the news data
  const news: NewsResponse = sortNewsByImage(data) || await fetchNews(categories.join(','));
  console.log(news);
  return (
    <div>
      <NewsList news={news} />
    </div>
  )
}

export default Homepage