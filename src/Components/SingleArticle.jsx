import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleArticle } from '../lib/bdClient.jsx';

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
<div className='px-8 sm:px-12 md:px-20 lg:px-32 xl:px-48'>
  {singleArticle && (
    <div key={singleArticle._id} className='max-w-4xl mx-auto'>
      <h2>{singleArticle.title}</h2>
      <img src={singleArticle.imgSrc[0]} alt="Single Article" />
      {singleArticle.article &&
        singleArticle.article.length > 0 &&
        singleArticle.article.map((item, index) => (
          <div key={index} className={index % 2 === 0 ? 'flex flex-row' : 'flex flex-row-reverse'}>
            <div className='w-1/2'>
              <h4>{item.headline}</h4>
              <p>{item.paragraph}</p>
            </div>
          </div>
        ))}
    </div>
  )}
</div>
  );
};

export default SingleArticle;