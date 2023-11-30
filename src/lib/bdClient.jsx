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



export {
    getAllArticle,
    getSingleArticle,
    getSearchedContent
}


