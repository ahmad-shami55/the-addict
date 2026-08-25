import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollBurger from './components/ScrollBurger';
import About from './components/About';
import Footer from './components/Footer';
import MenuCategories from './pages/MenuCategories';
import MenuCategoryPage from './pages/MenuCategoryPage';

function Home() {
  return (
    <>
      <Hero />
      <ScrollBurger />
      <About />
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuCategories />} />
          <Route path="/menu/:categorySlug" element={<MenuCategoryPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}