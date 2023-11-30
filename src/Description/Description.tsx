import React from 'react';
import styles from './Description.module.scss';

type TDescriptionProps = {
  title: string;
  text: string;
};

const Description: React.FC<TDescriptionProps> = ({ title, text }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Description;
