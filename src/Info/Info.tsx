import React from 'react';
import styles from './Info.module.scss';
import SvgSelector from '../SvgSelector';
import Description from '../Description/Description';

type TInfoProps = { onClick: () => void };

const Info: React.FC<TInfoProps> = ({ onClick }) => {
  return (
    <div className={styles.main}>
      <div onClick={onClick} className={styles.close_wrapper}>
        <SvgSelector id={'close'} className={styles.close} />
      </div>
      <Description
        title={'Карты от 2 до 6'}
        text={'Ход передается следующему игроку.'}
      />
      <Description
        title={'Карта 7'}
        text={
          'Каждый игрок по очереди называет число по порядку, которое не содержит в себе цифры 7 и которое не будет кратно 7. Пример: 25, 26, 29. Число 27 не было названо, потому что в ней содержится цифра 7, а число 28 не было названо, потому что оно кратно 7.'
        }
      />
      <Description
        title={'Карта 8'}
        text={
          'Тут всё просто. Выбери с кем ты выпьешь, не забывая о ритуале(ритуалах), которые были придуманы картой 9.'
        }
      />
      <Description
        title={'Карта 9'}
        text={
          'Придумай ритуал, который все игроки должны будут выполнить каждый раз перед тем, как в следующий раз выпить. Ритуалы сохраняются до конца игры. Если ритуалов несколько, то игроки должны выполнить все друг за другом.'
        }
      />
      <Description
        title={'Карта 10'}
        text={
          'Никому нельзя отвечать на вопросы того, кто вытянул данную карту. Одновременно в игре данная карта действует только на 1 человека.'
        }
      />
      <Description
        title={'Карта J'}
        text={
          'Игрок, который вытянул данную карту, должен придумать какую-либо тематику. После этого каждый игрок по очереди должен назвать слово, относящееся к тематике.'
        }
      />
      <Description
        title={'Карта Q'}
        text={'Как только вы видите эту карту - вы должны поднять руку.'}
      />
      <Description
        title={'Карта K'}
        text={'Выбери кто выпьет из других игроков.'}
      />
      <Description
        title={'Карта A'}
        text={'Выпей сам, не забывая о ритуале(ритуалах) от карты 9.'}
      />
    </div>
  );
};

export default Info;
