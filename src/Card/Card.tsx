import React, { useState } from 'react';
import styles from './Card.module.scss';

type TCardProps = {};

const generateCards = (array: number[]) => {
  array.splice(0, array.length);
  for (let i = 1; i <= 52; i++) {
    array.push(i);
  }
};

const allCards: number[] = [];

generateCards(allCards);

const Card: React.FC<TCardProps> = ({}) => {
  const [selectedImage, setSelectedImage] = useState<number>(2);

  const getRandomNumber = () => {
    return Number(Math.floor(Math.random() * allCards.length) + 1);
  };

  const handlePress = () => {
    allCards.splice(selectedImage - 1, 1);
    setSelectedImage(getRandomNumber());
    if (allCards.length === 0) generateCards(allCards);
  };

  return (
    <div className={styles.wrapper} onClick={handlePress}>
      <img
        src={require(`src/assets/${selectedImage}.png`)}
        className={styles.img}
      />
    </div>
  );
};

export default Card;
