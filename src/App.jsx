
    import React from 'react';
    import { Routes, Route, useLocation } from 'react-router-dom';
    import { AnimatePresence } from 'framer-motion';
    import Header from '@/components/layout/Header';
    import Footer from '@/components/layout/Footer';
    import HomePage from '@/pages/HomePage';

    function App() {
      const location = useLocation();

      return (
        <div className="flex flex-col min-h-screen bg-slate-900 text-white overflow-x-hidden">
          <Header />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      );
    }

    export default App;
  