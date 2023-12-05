import { useState, useEffect } from "react";
import {Button} from "@nextui-org/react";
import TextTranslate from "./TextTranslate";
import FileTranslate from "./FileTranslate";
import { getLanguages } from "../lib/dbClient";

const TranslateTab = () => {
  const [translationMode, setTranslationMode] = useState(true)
  const [supportedLanguages, setSupportedLanguages]=useState([]);
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

  const fetchSupportedLanguages=  async ()=> {
    setSupportedLanguages(await getLanguages());
  }

  useEffect (()=>{   
    fetchSupportedLanguages();
  }, [])

  return (
  <>
    <div className='flex items-center gap-4 justify-center mt-12 mb-4 h-fit'>
    {/* Tab nav */}
      <Button color="danger"
        // className={`block h-fit py-1 ${translationMode ? "border-b-3 border-b-indigo-500" : ""}`} 
        className={`block h-fit py-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 !focus:outline-none ${translationMode ? "border-b-3 border-b-danger" : ""}`} 
        onClick={() => setTranslationMode(true)}>
          Translate Text <span className='text-[11px] block'>31 languages</span>
      </Button>
      <Button color="danger" 
        onClick={() => setTranslationMode(false)}
        // className={`block h-fit py-1 ${translationMode ? "" : "border-b-3 border-b-indigo-500"}`} >
        className={`block h-fit py-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none ${translationMode ? "" : "border-b-3 border-b-danger"}`} >
          Translate file
        <span className='text-[11px] block'>.txt</span>
      </Button>
    </div>
    <div>
        {/* content will be shown here */}
        {translationMode ? 
          <TextTranslate languageSelection={languageSelection} setLanguageSelection={setLanguageSelection} supportedLanguages={supportedLanguages} setSupportedLanguages={setSupportedLanguages} /> : 
          <FileTranslate languageSelection={languageSelection} setLanguageSelection={setLanguageSelection} supportedLanguages={supportedLanguages} setSupportedLanguages={setSupportedLanguages} />}
    </div>
  </>
  )
}

export default TranslateTab