import styles from './App.module.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.welcome_wrapper}>
        <div className={styles.welcome_block}>
          <div className={styles.insertion_point}></div>
        </div>
        <div className={styles.welcome_block_with_img}>
          <img src="" />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
