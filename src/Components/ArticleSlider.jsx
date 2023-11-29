import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchFeaturedArticles } from "../lib/api";

const ArticleSlider = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadArticles = async () => {
      const fetchedArticles = await fetchFeaturedArticles();
      setArticles(fetchedArticles);
    };

    loadArticles();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2>MUST READ</h2>
      <Slider {...settings}>
        {articles.map((article) => (
          <div key={article._id}>
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ArticleSlider;
