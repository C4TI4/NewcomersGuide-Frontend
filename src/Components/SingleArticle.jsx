import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleArticle } from '../lib/bdClient.jsx';
import { useNavigate } from 'react-router-dom';


const SingleArticle = () => {
  const { id } = useParams();
  const [singleArticle, setSingleArticle] = useState(null);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/article');
  };


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
        <h2 className='text-xl py-3.5 font-bold'>{singleArticle.title}</h2>
        <img src={singleArticle.imgSrc[0]} alt="Single Article" />
        {singleArticle.article &&
          singleArticle.article.length > 0 &&
          singleArticle.article.map((item, index) => (
            <div key={index}>
              <div className={index % 2 === 0 ? 'flex flex-col md:flex-row' : 'flex flex-col-reverse md:flex-row-reverse'}>
                <div className='md:w-1/2 py-3.5 md:py-3.5'>
                  <h4 className='font-bold italic py-1'>{item.headline}</h4>
                  <p>{item.paragraph}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    )}
    <div className='text-center py-3.5'>
      <button className='shadow-sm rounded px-3.5 py-1 border-2 border-slate-600' onClick={handleBackClick}>
        Back
      </button>
    </div>
  </div>
  );
};

export default SingleArticle;


