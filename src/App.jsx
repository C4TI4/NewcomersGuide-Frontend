import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import TranslationPage from './Pages/TranslationPage';

import  ArticleList  from './Components/ArticleList.jsx';
import  SingleArticle  from './Components/SingleArticle.jsx';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route index element={<Home />} />
        <Route path="/article" element={<ArticleList />} />
        <Route path="/article/:id" element={<SingleArticle />} />
        <Route path="/translate" element={<TranslationPage/>} />
      </Route>
    </Routes>
  );
}


