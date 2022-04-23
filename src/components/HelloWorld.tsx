import React, { FC, useState } from "react";
import cars from "../../public/api/cars.json";
import {  Flex, SelectInput } from "vcc-ui";
import CarCard from "./CarCard";
import { iCar, iProps } from "../../interfaces";

export const CarsContainer: FC<iProps> = () => {
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

  return (
    <>
      <div className="filter">
        <SelectInput
          label="Filter"
          name="type of car"
          onChange={(e) => handleChange(e)}
        >
          <option label="All" value="">
            All
          </option>
          <option label="Sedan" value="sedan">
            Sedan
          </option>
          <option label="Suv" value="suv">
            SUV
          </option>
          <option label="Estate" value="estate">
            Estate
          </option>
        </SelectInput>
      </div>

      <Flex
        extend={{
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
          gap: "2rem",
          padding: "3rem",
          border: "1px solid #ccc",
        }}
      >
        {displayedCars.map((car: iCar) => (
          <CarCard car={car} key={car.id} />
        ))}
      </Flex>
    </>
  );
};
