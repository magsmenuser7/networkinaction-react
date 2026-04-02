import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import NIAGuntur from './pages/NIAGuntur';
import CityPartners from './pages/CityPartners';
import SandeepN from './pages/SandeepN';
import VinodT from './pages/VinodT';
import Event from './pages/Event';
import Join from './pages/Join';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        {/* <Route
          path="/nia-guntur"
          element={
            <PageTransition>
              <NIAGuntur />
            </PageTransition>
          }
        />
        <Route
          path="/city-partners"
          element={
            <PageTransition>
              <CityPartners />
            </PageTransition>
          }
        />
        <Route
          path="/sandeep-n"
          element={
            <PageTransition>
              <SandeepN />
            </PageTransition>
          }
        />
        <Route
          path="/vinod-t"
          element={
            <PageTransition>
              <VinodT />
            </PageTransition>
          }
        />
        <Route
          path="/event"
          element={
            <PageTransition>
              <Event />
            </PageTransition>
          }
        />
        <Route
          path="/join"
          element={
            <PageTransition>
              <Join />
            </PageTransition>
          }
        /> */}
      </Routes>
    </AnimatePresence>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-nia-white text-nia-black">
        <Navigation />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
