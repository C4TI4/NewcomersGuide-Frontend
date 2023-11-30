import { Card, CardHeader, Image, Button, CardBody } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSingleArticle } from '../lib/dbClient';

const OneArt = () => {
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
    <>      
    <div className="relative w-full h-30vh overflow-hidden mb-2.5">
    <img
    src="https://images.pexels.com/photos/417023/pexels-photo-417023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="Berlin street-art"
    className="w-full max-h-80 object-cover"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25" />
</div>
    <div className='px-8 sm:px-12 md:px-20 lg:px-32 xl:px-48'>
    {singleArticle && (
        <div key={singleArticle._id} className='max-w-screen-xl mx-auto'>
        <Card shadow style={{ width: '100%', maxWidth: '35rem', margin: 'auto' }}>
            <Image src={singleArticle?.imgSrc[0]} alt="Article Image" />
            <CardHeader>
            <h2>{singleArticle.title}</h2>
            </CardHeader>
            {singleArticle.article && singleArticle?.article.map((item, index) => (
                <CardBody
                key={index}
                className={index % 2 === 0 ? 'text-left' : 'text-right'}
                style={{ margin: '4px', padding: '8px' }}
                >
                <div>
                    <h4 className='font-bold italic py-1'>{item.headline}</h4>
                    <p>{item.paragraph}</p>
                </div>
                </CardBody>
                ))}
            <Button color="danger" className="mx-12 my-4" onClick={handleBackClick}>Back</Button>
        </Card>
        </div>
    )}
    </div>
    </>
);
};

export default OneArt;
