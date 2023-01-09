import Image from 'next/image';
import React from 'react';
import ReadMoreButton from './ReadMoreButton';

type Props = {
  article: Article;
};

const Article = ({ article }: Props) => {
  return (
    <article
      className="bg-slate-100 dark:bg-slate-800 flex
      flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg
      hover:bg-slate-200 transition-all duration-200 ease-out"
    >
      {article.image ? (
        <img
          src={article.image}
          alt={article.title}
          className="h-55 w-full object-cover rounded-t-lg shadow-md"
        />
      ) : (
        <Image
          src="/img-placeholder.jpg"
          alt="random image"
          width={100}
          height={100}
          className="h-55 w-full object-cover rounded-t-lg shadow-md"
        />
      )}

      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-bold font-serif">{article.title}</h2>

          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-2">{article.description}</p>
          </section>

          <footer
            className="text-xs text-right ml-auto flex space-x-1 
            pt-5 static text-gray-400"
          >
            <p>{article.source}</p>
            <p>{article.published_at}</p>
          </footer>
        </div>
      </div>

      <ReadMoreButton article={article} />
    </article>
  );
};

export default Article;

// http://api.mediastack.com/v1/news?access_key=1dcc5454337463e9828b8e7e789102cd
