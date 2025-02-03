import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { Main } from "@pages/Main";
import { About } from "@pages/About";
import { NothingFound } from "@pages/NothingFound";
import { Header } from "@widgets/Header";
import { Categories } from "@pages/Categories";
import { Collection } from "@pages/Collection";
import { Footer } from "@widgets/Footer";

function App() {
  return (
    <div className="max-w-[1400px] overflow-hidden">
      <BrowserRouter>
        <Header style={{}} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="*" element={<NothingFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
