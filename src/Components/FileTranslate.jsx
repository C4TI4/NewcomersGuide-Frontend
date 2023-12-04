import {Button } from "@nextui-org/react";
import {useState, useRef, useEffect} from 'react';
import {getTranslateDocument, getLanguages } from "../lib/dbClient";
import LangDropdown from '../Components/LangDropdown';


const FileTranslate = () => {
	const [languageSelection, setLanguageSelection] = useState({
    originLn: {
      name: "German",
      code: "DE",
    },
    targetLn: {
      name: 'English',
      code: 'EN-US'
    }
  })
	const [supportedLanguages, setSupportedLanguages]=useState([]);
	const [document, setDocument] = useState(null);
  const [translatedDoc, setTranslatedDoc] = useState(null);
  const [objectURL, setObjectURL] = useState(null)
  const downloadLink = useRef(null)

	const translateDocument = async (e) => {
    try {
      e.preventDefault();
      if (!document) return alert('Please select a document for submission');
      const translatedDocument = await getTranslateDocument(document, languageSelection.targetLn.code);
      setTranslatedDoc(translatedDocument)
      console.log(translatedDocument)
      const blob  = new Blob([translatedDocument.translation], {type: document.type})
      setObjectURL(URL.createObjectURL(blob));
          
    } catch(err) {
      console.error(err)
    }
  }
  console.log(objectURL)

  const handleDocument = (e) => {
    setDocument(e.target.files[0])
  }

	const fetchSupportedLanguages=  async ()=> {
    setSupportedLanguages(await getLanguages());
  }

  useEffect (()=>{   
    fetchSupportedLanguages();
    }, [])

  return (
    <>
			<div className='h-[50vh] mb-56'>

		<div className='flex items-center gap-4 justify-center mt-12 mb-4'>
          { supportedLanguages.length > 0 && 
            <LangDropdown originLn languageSelection={languageSelection} setLanguageSelection={setLanguageSelection} languages={supportedLanguages} />
          }
          <button id='arrowsBtn' className='w-4 aspect-square'>
            <svg fill="#fff" height="100%" width="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 495.795 495.795" xmlSpace="preserve">
              <g id="XMLID_120_">
                <path
                  id="XMLID_122_"
                  d="M479.751,134.804L346.7,1.763c-1.711-1.719-4.291-2.235-6.553-1.308c-2.242,0.937-3.711,3.132-3.711,5.561
                  v64.328H206.921c-8.215,0-14.863,6.659-14.863,14.866v107.702c0,8.207,6.648,14.865,14.863,14.865h129.516v64.329
                  c0,2.429,1.469,4.624,3.711,5.561c2.262,0.926,4.842,0.411,6.553-1.308l133.051-133.05c1.131-1.13,1.774-2.656,1.774-4.252
                  C481.525,137.46,480.882,135.935,479.751,134.804z"
                />
              </g>
            </svg>
          </button>
          {/* languages is a prop from LangDropdown (line 3) */}
          { supportedLanguages.length > 0 && 
            <LangDropdown languageSelection={languageSelection} setLanguageSelection={setLanguageSelection} languages={supportedLanguages} />
          }
        </div>
        <form onSubmit={translateDocument} className='mb-4 text-center'>
          <input type='file' name='translateDocument' onChange={handleDocument} />
          <button><Button>Translate Document</Button></button> 
          <div className='block mt-4'>
          { objectURL && ( <Button >
             
                  <a href={objectURL} download={`translated-${document?.name}`} ref={downloadLink}onClick={() => setObjectURL(null)} >
                    Download your Translated document
                  </a>
             
            </Button>     )}   
            </div>          
        </form>
			</div>
		</>
  )
}

export default FileTranslate