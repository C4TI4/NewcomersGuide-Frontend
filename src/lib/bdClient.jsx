import axios from "axios";
const backend = import.meta.env.VITE_BACKEND;

const getAllArticle = async () => {
    try {
        const { data } = await axios.get(`${backend}/article/`)
        console.log("All article where fetched from backend successfully!")
        console.log(data)
        return data;
        
    } catch (error) {
        console.error("failed to fetch article from backend")
    }};

const getSingleArticle = async (id) => {
    try {
        if (!id) throw new Error('Id not found');
        const { data } = await axios.get(`${backend}/article/${id}`);
        return data;
    } catch (error) {
        console.error('failed to fetch single article fom backend')
    }
}

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
    getAllArticle,
    getSingleArticle,
    getTranslate
}


