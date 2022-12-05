import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import About from "./pages/About";
import Home from "./pages/Home";

function AppRoutes() {
  return (    
    <BrowserRouter>
    <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="*" element={<div>Pagina não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
