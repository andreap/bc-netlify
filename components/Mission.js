// components/Mission.js

import styles from "../styles/Mission.module.css";

export const Mission = ({ data }) => {
  return (
    <div className={styles.mission}>
      <h1 className={styles.missionTitle}>{data[0]?.fields?.title}</h1>
      <p className={styles.missionContent}>{data[0]?.fields?.excerpt}</p>
    </div>
  );
};