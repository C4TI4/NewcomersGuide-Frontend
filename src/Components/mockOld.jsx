import { Card, CardHeader } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { getTranslateText } from '../lib/dbClient'
import { getOldpApi } from '../lib/dbClient.js';

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

const MockOld = () => {
    const [old, setOld] = useState([]);
    const [selectedOld, setSelectedOld] = useState(null);
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

    const showFullOld = (old) => {
        setSelectedOld(old);
    };

    const translateText = async (index) => {
        try {
            const translation = await getTranslateText(removeTags(makeText(index)), 'en');
            setTranslatedText(translation.translations[0].text);
        } catch (error) {
            console.error('Error translating text:', error);
        }
    };

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">List of Laws</h2>
            <div className="w-9/12 mx-auto my-8">
                {old.map((old, index) => (
                    <Card key={index} className='my-2'>
                        <CardHeader className="my-2 flex-col ">
                            <h3 className="text-lg font-bold" onClick={() => showFullOld(old)}>
                                {makeText(old.title).replace(/<P>/g, '§')}
                            </h3>
                            {selectedOld === old && (
                                <>
                                    <p className="text-sm my-2">
                                        {translatedText || removeTags(makeText(old.content)).replace(/<P>/g, '§')}
                                    </p>
                                    <button
                                        className="px-4 py-2 bg-danger text-white rounded-md"
                                        onClick={() => translateText(old.content)}
                                    >
                                        Translate to English
                                    </button>
                                </>
                            )}
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default MockOld;
