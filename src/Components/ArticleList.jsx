import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllArticle } from '../../lib/bdClient';

const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);
  const navigate = useNavigate();

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

  const handleArticleClick = (id) => {
    navigate(`/article/${id}`);
  };

  return (
    <div>
      {articleList.map(article => (
        <div key={article._id} onClick={() => handleArticleClick(article._id)}>
          <Link to={`/article/${article._id}`}>
            <h2>{article.title}</h2>
            <img src={article.imgSrc[0]} alt="Article" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;

