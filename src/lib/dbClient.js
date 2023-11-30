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

const getTranslateDocument = async (document) => {
    try {
        const sendDocument = await axios.post(`${backend}/translate/document`, document, { headers: {'Content-type': 'multipart/form-data'} } );
        return sendDocument.data;
    } catch (error) {
        console.error(error);
    }
};


const loginUser = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      });
      console.log('Login Successful:', response.data);
      return response.data;
    } catch (error) {
      console.error('Login Error:', error);
      throw new Error('Login failed');
    }
  };
  
  
  const createUser = async (userData) => {
    try {
        const response = await axios.post(`${backend}/auth/register`, userData);
        console.log('User Created:', response.data);
        return response.data;
    } catch (error) {
        console.error('User Creation Error:', error);
        throw new Error('Failed to create user');
    }
  };

export {
    getAllArticle,
    getSingleArticle,
    getTranslateText,
    getTranslateDocument,
    getSearchedContent,
    loginUser,
    createUser
}


