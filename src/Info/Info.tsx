import React from 'react';
import styles from './Info.module.scss';

type TInfoProps = { onClick: () => void };

const Info: React.FC<TInfoProps> = ({ onClick }) => {
  return (
    <div className={styles.main}>
      <button onClick={onClick}></button>
    </div>
  );
};

export default Info;
