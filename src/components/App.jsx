import React from "react";
import FileUpload from "./FileUpload";
import heroImage from "../images/turners_hero.png";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Navbar />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.heroImageContainer}>
            <img className={styles.heroImage} src={heroImage} alt="Hero" />
          </div>
          <div className={styles.fileUploadArea}>
            <FileUpload />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
