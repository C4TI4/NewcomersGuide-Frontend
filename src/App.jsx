import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import TranslationPage from "./Pages/TranslationPage";
import SearchResults from "./Pages/SearchResults";
import Articles from "./Pages/Articles";
import SingleArticle from "./Pages/SingleArticle";
import InteractiveMap from "./Pages/InteractiveMap";
import NotFound from "./Pages/NotFound";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/article" element={<Articles />} />
        <Route path="/article/:id" element={<SingleArticle />} />
        <Route path="/translate" element={<TranslationPage />} />
        <Route path="/InteractiveMap" element={<InteractiveMap />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
