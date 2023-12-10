import React from 'react';
import styles from './Description.module.scss';
import donate from "src/assets/donate.png";

type TDescriptionProps = {
  title: string;
  text: string;
  img?: boolean;
};

const Description: React.FC<TDescriptionProps> = ({ title, text, img }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
      {img?<img className={styles.img} src={donate}></img>:<div></div>}
    </div>
  );
};

export default Description;
