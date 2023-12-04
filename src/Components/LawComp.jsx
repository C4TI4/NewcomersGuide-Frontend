import { Card,  Image, CardBody } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import { getAllLaws } from '../lib/dbClient';

const AllLaws = () => {
  const [laws, setLaws] = useState([]);

  useEffect(() => {
    async function fetchLaws() {
      try {
        const lawsData = await getAllLaws();
        setLaws(lawsData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchLaws();
  }, []);
  return (
    <div className="w-6/12 mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
      {Array.isArray(laws) && laws.length > 0 ? (
        laws.map((law, index) => (
          <Card
            shadow
            key={law._id}
            className={`${
              index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
            } rounded-lg overflow-hidden`}
          >
            <div >
                <div >
                <CardBody>
                {law.article.map((article, index) => (
                  <div key={article._id} className="mb-4">
                    <h3 className={`text-xl font-bold mb-2 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>{article.headline}</h3>
                    <p className={`mb-4 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                      {article.paragraph}
                    </p>
                  </div>
                ))}
            </CardBody>
          </div>
            <Image
                src={law.imgSrc}
                alt="Law Image"
                className="w-full h-auto object-cover rounded-full mx-auto"
            />
          </div>
          </Card>
        ))
      ) : (
        <p>No laws found</p>
      )}
    </div>
  );
};

export default AllLaws;