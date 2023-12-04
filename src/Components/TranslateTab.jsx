import { useState } from "react";
import {Button} from "@nextui-org/react";
import TextTranslate from "./TextTranslate";
import FileTranslate from "./FileTranslate";

const TranslateTab = () => {
  const [translationMode, setTranslationMode] = useState(true)
  return (
  <>
    <div className='flex items-center gap-4 justify-center mt-12 mb-4'>
    {/* Tab nav */}
      <button className={`m-2`}>
        <Button color="danger" 
          className={`${translationMode ? "border-4 border-indigo-200 border-b-indigo-500" : ""}`} 
          onClick={() => setTranslationMode(true)}>
            Translate Text
            <p>31 languages</p>
        </Button>
      </button>          
      <button>
        <Button color="danger" 
        onClick={() => setTranslationMode(false)}
        className={`${translationMode ? "border-4 border-indigo-200 border-b-indigo-500" : ""}`} >
          Translate file
          <p>.txt</p>
        </Button>
      </button>       
    </div>
    <div className="currentTab">
        {/* content will be shown here */}
        {translationMode ? <TextTranslate/> : <FileTranslate/>}
    </div>
</>

  )
}

export default TranslateTab