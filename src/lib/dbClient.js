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
        console.log(data)
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

const getLanguages = async () => {
    try {
        const allLanguages = await axios(`${backend}/translate/languages`);
        console.log({allLanguages});
        return allLanguages.data;
    } catch (error) {
        console.error(error);
    }
};
// to send/post uploaded file to backend
const getTranslateDocument = async (document, targetLang) => {
    try {
        const formData = new FormData();
        formData.append("translateDocument", document)
        formData.append("target_lang", targetLang)
        const sendDocument = await axios.post(`${backend}/translate/document`, formData, { headers: {'Content-type': 'multipart/form-data'} } );
        console.log(sendDocument)
        return sendDocument.data;
    } catch (error) {
        console.error(error);
    }
};


const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${backend}/auth/login`, {
        email,
        password,
    });
    console.log('Login Successful:', response.headers.authorization);
    return response.headers.authorization;
    } catch (error) {
        console.error('Login Error:', error);
        throw new Error('Login failed');
    }
};


const createUser = async (userData) => {
    try {
        const response = await axios.post(`${backend}/auth/register`, userData);
        console.log('User Created:', response.headers.authorization);
        return response.headers.authorization;
    } catch (error) {
        console.error('User Creation Error:', error);
    }
};

const sendToken = async (token) => {
    try {
        const response = await axios(`${backend}/auth/me`, {headers:{"Authorization": token}});
        console.log('User retrieved:', response.data);
        return response.data;
    } catch (error) {
        console.error('Token could not be verify:', error);
    }
}

const getAllLaws = async () => {
    try {
        const response = await axios.get(`${backend}/law/`); 
        return response.data;
    } catch (error) {
        throw new Error('Error fetching laws:', error);
    }
};

const getOldpApi = async () => {
    try {
        const oldpApi = await axios.get(`${backend}/old/book/1176`);
        return oldpApi.data;
    } catch (error) {
        throw new Error ('Error fetching data from oldp-Api', error);
    }
}

const getOldpApiId = async(id) => {
    try {
        const oldpApi = await axios.get(`${backend}/old/law/${id}`);
        return oldpApi.data;
    } catch (error) {
        throw new Error ('Error fetching data from oldp-Api', error);
    }
}

export {
    getAllArticle,
    getSingleArticle,
    getTranslateText,
    getTranslateDocument,
    getSearchedContent,
    loginUser,
    createUser,
    getLanguages,
    sendToken,
    getAllLaws,
    getOldpApi,
    getOldpApiId
}


