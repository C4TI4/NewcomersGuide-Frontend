import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllArticle } from '../lib/bdClient.jsx';

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
<div className='flex flex-wrap justify-center items-start px-4 py-4 lg:px-10 xl:px-16 w-full md:w-4/5 lg:w-4/5 xl:w-3/4 mx-auto'>
  {articleList.map(article => (
    <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 px-2' key={article._id} onClick={() => handleArticleClick(article._id)}>
      <Link to={`/article/${article._id}`} className="flex flex-col">
        <img className="" src={article.imgSrc[0]} alt="Article" />
        <div className=''>
          <h2 className='text-xl font-bold'>{article.title}</h2>
          {article.article && article.article.length > 0 && (
            <div>
              <h4 className='font-bold italic'>{article.article[0].headline}</h4>
              <p className='hidden sm:block'>{article.article[0].paragraph}</p>
            </div>
          )}
        </div>
      </Link>
    </div>
  ))}
</div>

  );
};

export default ArticleList;

