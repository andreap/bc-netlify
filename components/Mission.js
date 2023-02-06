// components/Mission.js

import styles from "../styles/Mission.module.css";

export const Mission = ({ data }) => {
  return (
    <div className={styles.mission}>
      <div className={styles.missionContent}>
        <p>{data[0]?.fields?.content}</p>
      </div>
    </div>
  );
};