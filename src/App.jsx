import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import TranslationPage from './Pages/TranslationPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />       
        <Route path="/translate" element={<TranslationPage/>} />
      </Route>
    </Routes>
  );
}