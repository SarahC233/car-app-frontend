import React from "react";
import styles from "../styles/ResultDisplay.module.css";

const ResultDisplay = ({ result }) => {
  return (
    <div className={styles.resultDisplay}>
      <h3 className={styles.resultTitle}>Result:</h3>
      <p className={styles.resultItem}>
        Vehicle Type:{" "}
        <span className={styles.resultValue}>{result.vehicleType}</span>
      </p>
      <p className={styles.resultItem}>
        Confidence:{" "}
        <span className={styles.resultValue}>{result.confidence}</span>
      </p>
      <p className={styles.resultItem}>
        Premium Estimate:{" "}
        <span className={styles.resultValue}>{result.premiumEstimate}</span>
      </p>
    </div>
  );
};

export default ResultDisplay;
