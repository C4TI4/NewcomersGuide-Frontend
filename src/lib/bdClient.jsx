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
    loginUser,
    createUser
}


