import { FC } from "react";
import { iCar } from "../../interfaces";
import styles from "../../styles/Dots.module.css";

interface iDotsProps {
  selectedIndex: number;
  scrollTo: (index: number) => void;
  cars: iCar[];
}

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
