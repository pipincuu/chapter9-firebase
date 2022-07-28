import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import BranchBali from "./pages/BranchBali";
import BranchJakarta from "./pages/BranchJakarta";
import BranchPadang from "./pages/BranchPadang";
import ArticleDetail from "./pages/ArticleDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang-kami" element={<h1>Tentang kami</h1>} />
          <Route path="/hubungi-kami" element={<ContactUs />}>
            <Route index element={<h1>Silahkan pilih cabang</h1>} />
            <Route path="bali" element={<BranchBali />} />
            <Route path="jakarta" element={<BranchJakarta />} />
            <Route path="padang" element={<BranchPadang />} />
          </Route>
          <Route path="/article/:id" element={<ArticleDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
