import React, { useState } from 'react';
import styles from './Card.module.scss';
import SvgSelector from '../SvgSelector';
import { clsx } from 'clsx';
import Info from '../Info/Info';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

type TCardProps = {};

const generateCards = () => {
  const array: number[] = [];
  for (let i = 1; i <= 52; i++) {
    array.push(i);
  }
  return array;
};

const getRandomCard = (arr: number[]): number => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const Card: React.FC<TCardProps> = ({}) => {
  const [cards, setCards] = useState(generateCards());
  const [selectedCard, setSelectedCard] = useState<number>(getRandomCard(cards));
  const [isCardsEmpty, setIsCardsEmpty] = useState<boolean>(false);
  const [isInfoVisible, setIsInfoVisible] = useState<boolean>(false);
  const [isStartOfGame, setIsStartOfGame] = useState<boolean>(true);

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
    setIsStartOfGame(false);
  };

  const handlePressInfo = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <div className={styles.wrapper}>
      <div onClick={handlePressInfo}>
        <SvgSelector id={'info'} className={styles.info_button} />
      </div>
      <div
        className={clsx(styles.info, {
          [styles.openInfo]: isInfoVisible,
          [styles.closeInfo]: !isInfoVisible,
        })}
      >
        <Info onClick={handlePressInfo} />
      </div>

      {isStartOfGame || isCardsEmpty ? (
        <div
          className={styles.isCardsEmpty_message}
          onClick={handlePressMessage}
        >
          {isStartOfGame ? "Вы готовы начать игру?" : "Колода закончилась. Начать заново?"}
        </div>
      ) : (
        <TransitionGroup component={React.Fragment}>
          <CSSTransition
            key={selectedCard}
            timeout={{ enter: 900, exit: 500 }}
            classNames={'item'}
          >
            <div className={'item'}>
              <img
                src={require(`src/assets/${selectedCard}.png`)}
                className={styles.img}
                alt={`${selectedCard}.png`}
                onClick={handlePressCard}
              />
            </div>
          </CSSTransition>
        </TransitionGroup>
      )}
    </div>
  );
};

export default Card;
