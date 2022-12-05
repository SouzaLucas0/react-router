import Home from "pages/Home";
import About from "pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "components/Menu";
import Footer from "components/Footer/Footer";
import DefaultPage from "components/DefaultPage/DefaultPage";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />



      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />}/>          
          <Route path="sobre" element={<About />} /> 
          <Route path="*" element={<div>Página não encontrada</div>} />
        </Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
