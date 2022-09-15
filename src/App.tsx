import Header from './components/HeaderItems/Header';
import HomePage from './components/HeaderItems/HomePage';
import BlogPage from './components/HeaderItems/BlogPage';
import TopContent from './components/TopItems/TopContent';
import AboutUsTable from './components/AboutUs/AboutUsTable';
import BottomContent from './components/BottomItems/BottomContent';
import Footer from './components/FooterItems/Footer';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { css } from '@emotion/css'



const App = ()=>{
  return (
    <Router>
      <div className={css`
                        width: 100%;
                        height: 100vh;
                        font-size: 18px;
                        background-color: #10020a`}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <TopContent />
        <AboutUsTable />
        <BottomContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
