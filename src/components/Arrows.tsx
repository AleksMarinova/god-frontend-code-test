import { Icon } from 'vcc-ui';
import styles from '../../styles/Arrows.module.css';
import { FC } from 'react';

interface iArrowsProps{
  scrollPrev: () => void,
  scrollNext: () => void,
}

const Arrows:FC<iArrowsProps>= ({ scrollPrev, scrollNext }) => {
  return (
    <div className={styles.container}>
      <button className={styles.embla__prev} onClick={scrollPrev}>
        <Icon type="media-previous-32" />
      </button>
      <button className={styles.embla__next} onClick={scrollNext}>
        <Icon type="media-next-32" />
      </button>
    </div>
  );
};

export default Arrows;