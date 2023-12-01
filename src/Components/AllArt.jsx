import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllArticle } from '../lib/dbClient';
import {Card, CardHeader, Image } from "@nextui-org/react";

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
    <div className="relative w-full h-30vh overflow-hidden mb-2.5">
        <img
        src="https://images.pexels.com/photos/417023/pexels-photo-417023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Berlin street-art"
        className="w-full max-h-80 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25" />
        <div className="absolute inset-0 flex justify-center items-center text-center">
        <h3 className="font-bold text-xl text-white z-10">YOU MIGHT LIKE TO READ</h3>
        </div>
    </div>
    <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {Array.isArray(articleList) && articleList.length > 0
    ? articleList.map((article) => (
        <div key={article._id}>
            <Link to={`/article/${article._id}`}>
                <Card className="h-[300px] relative">
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src={article.imgSrc[0]}
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        {article.article && article.article[0] && (
                            <>
                                <p className="text-medium text-white/80 uppercase font-bold">
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