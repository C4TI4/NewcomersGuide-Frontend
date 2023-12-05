import { Button } from "@nextui-org/react";
import { useCallback, useState, useRef } from 'react';
import {useDropzone} from 'react-dropzone';
import { getTranslateDocument } from "../lib/dbClient";
import LangDropdown from '../Components/LangDropdown';
import useThemeContext from '../context/ThemeContext';

const FileTranslate = ({ languageSelection, setLanguageSelection, supportedLanguages }) => {
  const { isDarkMode } = useThemeContext()
	const [document, setDocument] = useState(null);
  const [translatedDoc, setTranslatedDoc] = useState(null);
  const [objectURL, setObjectURL] = useState(null)
  const downloadLink = useRef(null)

	const translateDocument = async (e) => {
    try {
    //   e.preventDefault();
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

   const swapLanguages = () => {
    setLanguageSelection((prev) => ({
      originLn: prev.targetLn,
      targetLn: prev.originLn,
    }));
  }

	const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
		setDocument(acceptedFiles[0])
		console.log(acceptedFiles[0])
  }, [])

	const {acceptedFiles, getRootProps, getInputProps} = useDropzone({onDrop, maxFiles:1, accept: {"text/plain": [".txt"]}});  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <>
			<div className='h-[50vh] mb-56'>
				<div className='flex items-center gap-4 justify-center mt-12 mb-4'>
							{ supportedLanguages.length > 0 && 
								<LangDropdown originLn languageSelection={languageSelection} setLanguageSelection={setLanguageSelection} languages={supportedLanguages} />
							}
							<button id='arrowsBtn' className='w-4 aspect-square' onClick={swapLanguages}>
								<svg fill={isDarkMode ? "#fff" : '#000' } height="100%" width="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 495.795 495.795" xmlSpace="preserve">
									<g id="XMLID_120_">
										<path
											id="XMLID_122_"
											d="M479.751,134.804L346.7,1.763c-1.711-1.719-4.291-2.235-6.553-1.308c-2.242,0.937-3.711,3.132-3.711,5.561
											v64.328H206.921c-8.215,0-14.863,6.659-14.863,14.866v107.702c0,8.207,6.648,14.865,14.863,14.865h129.516v64.329
											c0,2.429,1.469,4.624,3.711,5.561c2.262,0.926,4.842,0.411,6.553-1.308l133.051-133.05c1.131-1.13,1.774-2.656,1.774-4.252
											C481.525,137.46,480.882,135.935,479.751,134.804z"
										/>
										<path
											id="XMLID_121_"
											d="M288.858,288.019H159.36v-64.33c0-2.428-1.469-4.622-3.711-5.559c-2.261-0.927-4.844-0.412-6.553,1.307
											L16.047,352.478c-1.13,1.13-1.776,2.656-1.776,4.252c0,1.598,0.646,3.124,1.776,4.254l133.05,133.048
											c1.709,1.719,4.292,2.236,6.553,1.308c2.242-0.936,3.711-3.13,3.711-5.56v-64.33h129.498c8.216,0,14.863-6.657,14.863-14.864
											V302.883C303.721,294.678,297.074,288.019,288.858,288.019z"
										/>
									</g>
								</svg>
							</button>
							{/* languages is a prop from LangDropdown (line 3) */}
							{ supportedLanguages.length > 0 && 
								<LangDropdown languageSelection={languageSelection} setLanguageSelection={setLanguageSelection} languages={supportedLanguages} />
							}
						</div>
						<section className="mx-auto max-w-lg hover:cursor-pointer ">
								<div className="p-10 border-2 border-purple-500 rounded-xl mx-1.5" {...getRootProps()}>
									<input {...getInputProps()} />
									<p>Drag &apos;n&apos; drop some files here, or click to select files</p>
								</div>
								<div>
									<h4>Files</h4>
									<ul>{files}</ul>
								</div>
						</section>
						<div className='flex flex-col gap-4 flex-wrap justify-center items-center mt-16'>
							{/* <form onSubmit={translateDocument} className='text-center w-fit border-2 border-red-600'> */}
								{/* <input type='file' 
									name='translateDocument'
									onChange={handleDocument} 
									className="basis-full sm:basis-auto w-fit border-2 border-grey-800 rounded-lg" /> */}
								<div className='flex gap-4'>
									<Button color="danger" 
										className='h-fit py-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none' 
										onPress={translateDocument}>
											Translate Document
									</Button>
									{document && <Button color="danger" 
										className='w-fit h-fit py-2 mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none' isDisabled={!objectURL}>             
											<a href={objectURL} 
												download={`translated-${document.name}`}
												ref={downloadLink}
												// onClick={() => setObjectURL(null)}
											>
												Download translation
											</a>             
									</Button>}
								</div> 
						</div>          
					</div>
		</>
  )
}

export default FileTranslate