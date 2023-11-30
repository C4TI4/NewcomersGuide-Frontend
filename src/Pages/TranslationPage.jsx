import { useState } from 'react';
import { getTranslateText, getTranslateDocument } from "../lib/dbClient";
import { Textarea, Button } from "@nextui-org/react";

const TranslationPage = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState(null);
  const [languageSelection, setLanguageSelection] = useState({
    originLn: {
      name: 'German',
      code: 'DE'
    },
    targetLn: {
      name: 'English',
      code: 'EN'
    }
  })
  const [document, setDocument] = useState(null);
  const [translatedDoc, setTranslatedDoc] = useState(null);

  const handleTranslate = async (e) => {
    try {
      if (e) e.preventDefault();
      const { translations } = await getTranslateText(inputText, languageSelection.targetLn.code);
      setTranslatedText(translations[0]);
      console.log(translations)
    } catch (error) {
      console.error('Translation error:', error);
    }
  };

  const swapLanguages = () => {
    setLanguageSelection(prev => ({originLn: prev.targetLn, targetLn: prev.originLn}))
    setInputText(translatedText.text)
    setTranslatedText('')
    handleTranslate()
  }

  const handleDocument = (e) => {
    setDocument(e.target.files[0])
  }

  const translateDocument = async (e) => {
    try {
      e.preventDefault();
      if (!document) return alert('Please select a document for submission');
      const translatedDocument = await getTranslateDocument(document);
      setTranslatedDoc(translatedDocument)
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <>
    <div className='h-[50vh]'>
      <div className='flex items-center gap-4 justify-center mt-12 mb-4'>
        <p className='text-xl'>{languageSelection.originLn.name}</p>
        <button id='arrowsBtn' className='w-4 aspect-square' onClick={swapLanguages}>
          <svg fill="#fff" height="100%" width="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 495.795 495.795" xmlSpace="preserve">
            <g id="XMLID_120_">
              <path id="XMLID_122_" d="M479.751,134.804L346.7,1.763c-1.711-1.719-4.291-2.235-6.553-1.308c-2.242,0.937-3.711,3.132-3.711,5.561
                v64.328H206.921c-8.215,0-14.863,6.659-14.863,14.866v107.702c0,8.207,6.648,14.865,14.863,14.865h129.516v64.329
                c0,2.429,1.469,4.624,3.711,5.561c2.262,0.926,4.842,0.411,6.553-1.308l133.051-133.05c1.131-1.13,1.774-2.656,1.774-4.252
                C481.525,137.46,480.882,135.935,479.751,134.804z"/>
              <path id="XMLID_121_" d="M288.858,288.019H159.36v-64.33c0-2.428-1.469-4.622-3.711-5.559c-2.261-0.927-4.844-0.412-6.553,1.307
                L16.047,352.478c-1.13,1.13-1.776,2.656-1.776,4.252c0,1.598,0.646,3.124,1.776,4.254l133.05,133.048
                c1.709,1.719,4.292,2.236,6.553,1.308c2.242-0.936,3.711-3.13,3.711-5.56v-64.33h129.498c8.216,0,14.863-6.657,14.863-14.864
                V302.883C303.721,294.678,297.074,288.019,288.858,288.019z"/>
            </g>
          </svg>
        </button>
        <p className='text-xl'>{languageSelection.targetLn.name}</p>
      </div>
        <form onSubmit={translateDocument} className='mb-4 text-center'>
          <input type='file' name='translateDocument' onChange={handleDocument} />
          <button><Button>Translate Document</Button></button>
        </form>
      
      <div className='flex flex-wrap md:flex-nowrap gap-4 w-full md:w-3/4 mx-auto  justify-center'>
      {/* <form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="filename" />
</form> */}
        <form className=' w-full md:w-1/2 relative' onSubmit={(e) => handleTranslate(e)}>
          <Textarea
            label='Input your text'
            classNames={{
              input: "resize-y min-h-[10em] md:min-h-[15em]",
            }}
            disableAnimation
            disableAutosize
            variant='bordered'
            value={inputText}
            // minRows={12}
            onValueChange={setInputText}
            required
            maxLength={1000}
            />
          <button className='block absolute bottom-1 right-1'>
            <Button>Translate</Button>        
          </button>
        </form>
        <div className=' w-full md:w-1/2'>
          <Textarea 
            label="Translated Text"
            classNames={{
              input: "resize-y min-h-[10em] md:min-h-[15em]",
            }}
            disableAutosize
            variant='bordered' 
            value={translatedText ? translatedText.text : ''} 
            disabled 
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default TranslationPage;