import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Worldview from './pages/Worldview';
import Activations from './pages/Activations';
import CultureEngine from './pages/CultureEngine';
import Investment from './pages/Investment';
import Leadership from './pages/Leadership';
import Brand from './pages/Brand';
import Gallery from './pages/Gallery';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/worldview" element={<Worldview />} />
          <Route path="/activations" element={<Activations />} />
          <Route path="/culture-engine" element={<CultureEngine />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Layout>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
