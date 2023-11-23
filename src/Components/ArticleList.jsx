import { useState, useEffect } from 'react';
import { getAllArticle } from '../../lib/bdClient';

const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const allArticles = await getAllArticle();
        setArticleList(allArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }

    fetchArticles();
  }, []);

  return (
      <div>
        {articleList.map(article => (
          <div key={article._id}>
            <h2>{article.title}</h2>
            <img src={article.imgSrc[0]} alt="Article" /> 
            {article.article && article.article.length > 0 &&
              article.article.map((item, index) => (
                <div key={index}>
                  <h4>{item.headline}</h4>
                  <p>{item.paragraph}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
  );
};

export default ArticleList