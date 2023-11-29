import axios from "axios";
const backend = import.meta.env.VITE_BACKEND;

const getTranslate = async (inputText, target_lang) => {
    try {
        const allTranslation = await axios.post(`${backend}/translate`, {text: [inputText], target_lang} );
        // console.log(allTranslation);
        return allTranslation.data;
    } catch (error) {
        console.error(error);
    }
};





export {
    getTranslate 
}


