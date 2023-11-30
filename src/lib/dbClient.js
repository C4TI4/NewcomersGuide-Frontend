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

const getSearchedContent = async (query) => {
    try {
        const { data } = await axios(`${backend}/search?query=${query}`)
        return data;
    } catch (error) {
        console.error('failed to fetch searched articles from backend')
    }
}

const getTranslateText = async (inputText, target_lang) => {
    try {
        const allTranslation = await axios.post(`${backend}/translate`, {text: [inputText], target_lang} );
        // console.log(allTranslation);
        return allTranslation.data;
    } catch (error) {
        console.error(error);
    }
};

   {/* <form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="filename" />
</form> */}
// to send/post uploaded file to backend
const getTranslateDocument = async (document) => {
    try {
        const formData = new FormData();
        formData.append("translateDocument", document)
        const sendDocument = await axios.post(`${backend}/translate/document`, formData, { headers: {'Content-type': 'multipart/form-data'} } );
        console.log(sendDocument)
        return sendDocument.data;
    } catch (error) {
        console.error(error);
    }
};

export {
    getAllArticle,
    getSingleArticle,
    getTranslateText,
    getTranslateDocument,
    getSearchedContent
}


