import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom/dist';
import styles from './App.module.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';

function App() {
  const [headerIsActive, setHeaderActive] = useState(false);
  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 100) {
        setHeaderActive(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className={styles.wrapper}>
        {headerIsActive ? <Header /> : ''}
        <Routes>
          <Route path="/" element={<Home arrowIsActive={headerIsActive} />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
