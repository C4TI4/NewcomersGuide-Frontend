import { useState } from 'react';
import { getTranslate } from "../lib/dbClient";

const TranslationPage = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState(null);
  const targetLanguage = 'EN'; // dropdownarrow multiple langs


  const handleTranslate = async (e) => {
    e.preventDefault();
    try {
      const translation = await getTranslate(inputText, targetLanguage);
      setTranslatedText(translation);
      console.log(translation)
    } catch (error) {
      console.error('Translation error:', error);
    }

  };

  return (
    <div className='flex'>
        <form onSubmit={(e) => handleTranslate(e)}>
        <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            required
        />
        <button >Translate</button>        
      </form>
      <div>
        <strong>Translated Text:</strong> 
        {translatedText && 
        <div className=''>
          {translatedText?.translations.map((chunk, index) => <p key={`translation--${index}`}>{chunk.text}</p>)}
          </div>
          }
      </div>
    </div>
  );
};

export default TranslationPage;