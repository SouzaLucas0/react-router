import Home from "pages/Home";
import About from "pages/About";
import Post from "pages/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "components/Menu";
import Footer from "components/Footer/Footer";
import DefaultPage from "components/DefaultPage/DefaultPage";
import NotFound from "pages/NotFound";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />



      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />}/>          
          <Route path="sobre" element={<About />} />
        </Route>
          <Route path="posts/:id" element={<Post />} />
          <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
