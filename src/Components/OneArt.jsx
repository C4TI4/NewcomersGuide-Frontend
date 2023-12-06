import { Card, CardHeader, Image, Button, CardBody } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSingleArticle } from '../lib/dbClient';
import Sidebar from "./usefulLinks";

const OneArt = () => {
const { id } = useParams();
const [singleArticle, setSingleArticle] = useState(null);
const navigate = useNavigate();

const handleBackClick = () => {
    navigate('/article'); 
};

const usefulLinks = [
    { title: 'Find Housing', url: ['https://www.immobilienscout24.de/', 'https://www.ebay-kleinanzeigen.de/', 'https://www.wg-gesucht.de/en/', 'https://en.wg-suche.de/', 'https://www.stw.berlin/en/housing.html ']  },
    { title: 'Language courses', url: ['https://example.com/link2', ''] },

  ];

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
    <>
      <div className="flex flex-row mt-20">
        <div className="w-3/4 pr-4">
          {singleArticle && (
            <div key={singleArticle._id} className="max-w-screen-xl mx-auto max-w-xl">
              <Card shadow className="w-full mx-auto my-auto">
                <Image src={singleArticle?.imgSrc[0]} alt="Article Image" />
                <CardHeader>
                  <h2>{singleArticle.title}</h2>
                </CardHeader>
                {singleArticle.article &&
                  singleArticle?.article.map((item, index) => (
                    <CardBody
                      key={index}
                      className={index % 2 === 0 ? 'text-left' : 'text-right'}
                    >
                      <div>
                        <h4 className="font-bold italic py-1">{item.headline}</h4>
                        <p>{item.paragraph}</p>
                      </div>
                    </CardBody>
                  ))}
                <Button color="danger" className="mx-12 my-4" onClick={handleBackClick}>
                  Back
                </Button>
              </Card>
            </div>
          )}
        </div>
        <div className="w-1/4">
          <Sidebar usefulLinks={usefulLinks} />
        </div>
      </div>
    </>
  );
};


export default OneArt;
