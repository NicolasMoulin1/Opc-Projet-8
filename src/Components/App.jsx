import Header from "./Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Apartment from "./Apartment";
import Error404 from "./pages/Error404";
import Footer from "./Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="apartment/:id" element={<Apartment/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
