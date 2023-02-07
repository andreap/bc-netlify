// components/Logo.js

import styles from "../styles/Logo.module.scss";
import Image from "next/legacy/image";

export const Logo = ({ data }) => {
  return (
    <div className={styles.logo}>
      {data[0]?.media?.length && (
        <div className={styles.logoImg}>
          <Image
            layout='intrinsic'
            src={data[0]?.media[0]?.fields?.url[0]?.url}
            alt={data[0]?.media[0]?.fields?.alt}
            objectFit='fill'
            width={400}
            height={400}
          />
        </div>
      )}
    </div>
  );
};