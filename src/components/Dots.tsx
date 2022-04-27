import { FC } from "react";
import styles from "../../styles/Dots.module.css";
import { iDotsProps } from "../../interfaces";


const Dots: FC<iDotsProps> = ({ cars, selectedIndex, scrollTo }) => {
  return (
    <div className={styles.container}>
      {cars.map((car, index: number) => {
        return (
          <button
            key={car.id}
            className={`${styles.dot} ${
              index === selectedIndex ? styles.dotActive : ""
            }`}
            onClick={() => scrollTo(index)}
          />
        );
      })}
    </div>
  );
};

export default Dots;
