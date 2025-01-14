import React, { FC, useState } from "react";
import cars from "../../public/api/cars.json";
import { Flex, SelectInput } from "vcc-ui";
import dynamic from "next/dynamic";
const CarCarousel = dynamic(() => import("./Carousel"), { ssr: false });
import { iProps } from "../../interfaces";
import styles from "../../styles/CarsContainer.module.css";

const CarsContainer: FC<iProps> = () => {
  const [displayedCars, setDisplayedCars] = useState(cars);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (selectedValue === "") {
      return setDisplayedCars(cars);
    } else {
      const filteredCars = cars.filter((car) => car.bodyType === selectedValue);
      setDisplayedCars(filteredCars);
    }
  };

  const uniqueCarBodyTypes = cars
    .map((car) => car.bodyType)
    .filter((bodyType, index, self) => self.indexOf(bodyType) === index);

  return (
    <section className={styles.container}>
      <div className={styles.filter}>
        <SelectInput
          label="Body Type"
          name="Car Body Type"
          onChange={(e) => handleChange(e)}
        >
          <option value="">All</option>
          {uniqueCarBodyTypes.map((bodyType, i) => (
            <option key={i} value={bodyType} label={bodyType}>
              {bodyType}
            </option>
          ))}
        </SelectInput>
      </div>

      <Flex
        extend={{
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
          height: "70vh",
          flexWrap: "nowrap",
          gap: "2rem",
          overflow: "hidden",
        }}
      >
        <CarCarousel cars={displayedCars} />
      </Flex>
    </section>
  );
};

export default CarsContainer;
