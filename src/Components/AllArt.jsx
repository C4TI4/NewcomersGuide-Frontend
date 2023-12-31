import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllArticle } from '../lib/dbClient';
import {Card, Image, CardFooter, Button} from "@nextui-org/react";

export default function AllArt() {

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

return (
    <>
    <div className="max-w-4xl mx-auto">
    <div className='text-center text-xl font-bold my-8'><h3>You might like</h3></div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {Array.isArray(articleList) && articleList.length > 0
            ? articleList.map((article) => (
                <Link to={`/article/${article._id}`} key={article._id}>
                    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">

                    <Image
                        removeWrapper
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover"
                        src={article.imgSrc[0]}
                    />
                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                        <div className="flex flex-grow gap-2 items-center">
                        <div className="flex flex-col">
                            {article.article && article.article[0] && (
                                <>
                            <p className="text-tiny text-white/60">{article.article[0].headline}</p>
                            <h4 className="text-white/90 font-medium text-xl">{article.title}</h4>
                            </>
                            )}
                        </div>
                        </div>
                    <Button radius="full" size="sm">Article</Button>
                    </CardFooter>
                    </Card>
                </Link>
                ))
            : <p>No articles</p>
            }
        </div>
    </div>
    </>
);
}
        
{/*        {Array.isArray(articleList) && articleList.length > 0
    ? articleList.map((article) => (
        <div key={article._id}>
            <Link to={`/article/${article._id}`}>
                <Card className="h-72 relative">
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src={article.imgSrc[0]}
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start ">
                        {article.article && article.article[0] && (
                            <>
                                <p className="text-medium text-white-80 uppercase font-bold">
                                    {article.article[0].headline}
                                </p>
                                <h4 className="text-white font-bold text-xl">{article.title}</h4>
                            </>
                        )}
                    </CardHeader>
                </Card>
                </Link> 
        </div>
    ))
    : <p> No articles</p>
}
        </div>
    </div>
    </>
);
}

*/}


