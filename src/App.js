import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { ImagesList } from "./components";
import { Header } from "./components";
import { HeroPage } from "./pages";
import { GalleryPage } from "./pages";
import { FavoritePage } from "./pages";
import { NotFound } from "./pages";
import { Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
