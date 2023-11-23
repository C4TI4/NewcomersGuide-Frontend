import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleArticle } from '../../lib/bdClient';

const SingleArticle = () => {
  const { id } = useParams();
  const [singleArticle, setSingleArticle] = useState(null);

  useEffect(() => {
    async function fetchSingleArticle() {
      try {
        const article = await getSingleArticle(id);
        setSingleArticle(article);
      } catch (error) {
        console.error('Error fetching single article:', error);
      }
    }

    fetchSingleArticle();
  }, [id]);

  return (
    <div>
      {singleArticle && (
        <div key={singleArticle._id}>
          <h2>{singleArticle.title}</h2>
          <img src={singleArticle.imgSrc[0]} alt="Single Article" />
          {singleArticle.article &&
            singleArticle.article.length > 0 &&
            singleArticle.article.map((item, index) => (
              <div key={index}>
                <h4>{item.headline}</h4>
                <p>{item.paragraph}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SingleArticle;