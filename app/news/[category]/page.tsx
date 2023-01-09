import React from 'react';
import { categories } from '../../../utils/constants';
import fetchNews from '../../../utils/fetchNews';
import NewsList from '../../NewsList';

type Props = {
  params: { category: Category };
};

const NewsCategory = async ({ params: { category } }: Props) => {
  const news = await fetchNews(category);
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default NewsCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category
  }));
}
