import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { getAllArticle } from '../lib/dbClient';
import { Card, CardHeader, Image } from '@nextui-org/react';

const ArticleSlider = () => {
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

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
  }
  return (
    <div className='w-9/12 mx-auto'>
    <Slider {...settings} className="mx-2 sm:mx-8 md:mx-12 lg:mx-36 xl:mx-20">
      {Array.isArray(articleList) && articleList.length > 0 ? (
        articleList.map((article) => (
          <div key={article._id}>
            <Link to={`/article/${article._id}`}>
            <Card className="relative my-4 sm:my-8 md:my-12 lg:my-16 xl:my-20 lg:max-h-96 xl:max-h-96 mx-auto">
              <Image removeWrapper alt="Card background" src={article.imgSrc[0]} className="relative mx-auto object-cover z-0" />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />
              <CardHeader className="absolute z-10 top-1 flex-col">
                {article.article && article.article[0] && (
                  <>
                    <p className="text-medium text-white uppercase font-bold md:mt-48 md:mb-6 lg:mt-36 lg:mb-6">{article.article[0].headline}</p>
                    <h4 className="text-white font-bold text-xl">{article.title}</h4>
                  </>
                )}
              </CardHeader>
            </Card>
            </Link>
          </div>
        ))
      ) : (
        <div>
          <h3>No articles</h3>
        </div>
      )}
    </Slider>
    </div>
  );
};

export default ArticleSlider;
