import { useState, useEffect } from 'react';
import { getOldpApi } from '../lib/dbClient.js';
import { Card, CardBody } from '@nextui-org/react';
import { getTranslateText } from '../lib/dbClient.js' 

const makeText = (text) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = text;
    return txt.value;
};

const removeTags = (text) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = text;
    return txt.value.replace(/<\/?[^>]+(>|$)/g, '');
};

const OldpApi = () => {
    const [old, setOld] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translatedText, setTranslatedText] = useState('');

    useEffect(() => {
        async function fetchOld() {
            try {
                const oldData = await getOldpApi();
                setOld(oldData.results);
            } catch (error) {
                console.error(error);
            }
        }

        fetchOld();
    }, []);

    const prevLaw = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? old.length - 1 : prevIndex - 1));
    };

    const nextLaw = () => {
        setCurrentIndex((prevIndex) => (prevIndex === old.length - 1 ? 0 : prevIndex + 1));
    };



    const translateText = async () => {
        try {
            const translated = await getTranslateText(removeTags(makeText(old[currentIndex].content)), 'en');
            setTranslatedText(translated.translations[0].text);
        } catch (error) {
            console.error('Error translating text:', error);
        }
    };
    

    return (
        <div className="w-11/12 mx-auto my-8">
            <div><h3 className="text-2xl font-bold mb-4 text-center">German Laws Foreigners might like to know about</h3></div>
            {Array.isArray(old) && old.length > 0 ? (
                <Card shadow className="rounded-lg overflow-hidden">
                    <CardBody>
                        <div className="mb-4">
                            <h3 className="text-xl font-bold mb-2">{makeText(old[currentIndex].title).replace(/<P>/g, '§')}</h3>
                            <p>{translatedText || removeTags(makeText(old[currentIndex].content)).replace(/<P>/g, '§')}</p>
                        </div>
                        <div className="flex justify-between">
                            <button onClick={prevLaw} className="px-4 py-2 bg-danger text-white rounded-md">Previous Law</button>
                            <button onClick={nextLaw} className="px-4 py-2 bg-danger text-white rounded-md">Next Law</button>
                            <button onClick={translateText} className="px-4 py-2 bg-indigo-500 text-white rounded-md">
                                Translate to English
                            </button>
                        </div>
                    </CardBody>
                </Card>
            ) : (
                <Card shadow className="rounded-lg overflow-hidden">
                    <p>No laws found</p>
                    <div className="flex justify-between">
                        <button onClick={prevLaw} className="px-4 py-2 bg-danger text-white rounded-md">Previous Law</button>
                        <button onClick={nextLaw} className="px-4 py-2 bg-danger text-white rounded-md">Next Law</button>
                    </div>
                </Card>
            )}
        </div>
    );
};

export default OldpApi;
