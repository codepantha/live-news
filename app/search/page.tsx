import React from 'react';
import fetchNews from '../../utils/fetchNews';
import NewsList from '../NewsList';

type Props = {
  searchParams?: { q: string };
};

const SearchPage = async ({ searchParams }: Props) => {
  const news: NewsResponse = await fetchNews('general', searchParams?.q, true);

  return (
    <div>
      <h1 className="headerTitle">Search Results for: {searchParams?.q}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default SearchPage;
