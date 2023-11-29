import React, { useState } from 'react';
import styles from './Card.module.scss';
import SvgSelector from '../SvgSelector';
import { clsx } from 'clsx';
import Info from '../Info/Info';

type TCardProps = {};

const generateCards = () => {
  const array: number[] = [];
  for (let i = 1; i <= 52; i++) {
    array.push(i);
  }
  return array;
};

const Card: React.FC<TCardProps> = ({}) => {
  const [cards, setCards] = useState(generateCards());
  const [selectedCard, setSelectedCard] = useState<number>(2);
  const [isCardsEmpty, setIsCardsEmpty] = useState<boolean>(false);
  const [isInfoVisible, setIsInfoVisible] = useState<boolean>(false);

  const getRandomCard = (arr: number[]): number => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  const handlePressCard = () => {
    const newCards = cards.filter((item: number) => item !== selectedCard);
    setCards(newCards);
    setSelectedCard(getRandomCard(newCards));
    if (newCards.length === 0) {
      setCards(generateCards());
      setSelectedCard(getRandomCard(cards));
      setIsCardsEmpty(true);
    }
  };

  const handlePressMessage = () => {
    setIsCardsEmpty(false);
  };

  const handlePressInfo = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <div className={styles.wrapper}>
      <div onClick={handlePressInfo}>
        <SvgSelector id={'info'} className={styles.info_button} />
      </div>
      {/*<div*/}
      {/*  className={clsx(styles.info, {*/}
      {/*    [styles.openInfo]: isInfoVisible,*/}
      {/*    [styles.openClose]: !isInfoVisible,*/}
      {/*  })}*/}
      {/*>*/}
      {/*  <Info onClick={handlePressInfo} />*/}
      {/*</div>*/}

      {isCardsEmpty ? (
        <div
          className={styles.isCardsEmpty_message}
          onClick={handlePressMessage}
        >
          Колода закончилась. Желаете продолжить?
        </div>
      ) : (
        <img
          src={require(`src/assets/${selectedCard}.png`)}
          className={styles.img}
          alt={`${selectedCard}.png`}
          onClick={handlePressCard}
        />
      )}
    </div>
  );
};

export default Card;
