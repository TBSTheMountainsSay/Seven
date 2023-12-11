import React from 'react';
import styles from './Description.module.scss';
import donate from "src/assets/donate.png";
import {clsx} from "clsx";

type TDescriptionProps = {
  title: string;
  text: string;
  img?: boolean;
  src?: string;
};

const Description: React.FC<TDescriptionProps> = ({ title, text, img, src }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
      {src?<a href={src} className={clsx(styles.text, styles.src)}>Поддержать</a>:<div></div>}

      {img?<img className={styles.img} src={donate}></img>:<div></div>}
    </div>
  );
};

export default Description;
