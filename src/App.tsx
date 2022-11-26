import React from 'react';
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";

import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}

export default App;
