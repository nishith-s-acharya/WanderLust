import { Outlet } from 'react-router-dom';
import { LocationProvider } from './context/LocationContext';
import { ThemeProvider } from './context/ThemeContext';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  // Initialize butter-smooth inertial scroll & GSAP ticker
  useSmoothScroll();

  return (
    <ThemeProvider>
      <LocationProvider>
        <ScrollProgressBar />
        <Navbar />
        <Outlet />
        <ScrollToTop />
        <Footer />
      </LocationProvider>
    </ThemeProvider>
  );
}
