import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import TranslationPage from './Pages/TranslationPage';
import Articles from './Pages/Articles';
import OneArticle from './Pages/SingleArticle';


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />

        <Route index element={<Home />} />
        <Route path="/article" element={<Articles />} />
        <Route path="/article/:id" element={<OneArticle />} />
        <Route path="/translate" element={<TranslationPage/>} />
      </Route>
    </Routes>
  );
}


