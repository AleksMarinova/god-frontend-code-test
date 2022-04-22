import React, { FC, useState } from "react";
import cars from "../../public/api/cars.json";
import { Card, Flex, Text, CardContent, Spacer, SelectInput } from "vcc-ui";
import Image from "next/image";

interface iProps {
  props: {
    cars: {}[];
  };
}

interface iCar {
  id: string;
  modelName: string;
  modelType: string;
  bodyType: string;
  imageUrl: string;
}

export const CarsContainer: FC<iProps> = () => {
  const [displayedCars, setDisplayedCars] = useState(cars);
  return (
    <>
      <div className="filter">
        <SelectInput
          label="Filter"
          name="type of car"
          onChange={(e) => {
            const selectedCar = e.target.value;
            if (selectedCar === "") {
              return setDisplayedCars(cars);
            }
            const filteredCars = cars.filter((car) => {
              return car.bodyType === selectedCar;
            });
            setDisplayedCars(filteredCars);
          }}
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
          width: "100%",
          gap: "2rem",
        }}
      >
        {displayedCars.map((car: iCar) => (
          <Card
            key={car.id}
            extend={{
              width: "300px",
              padding: "20px",
            }}
          >
            <Image
              src={car.imageUrl}
              alt={car.modelName}
              height="300px"
              width="300px"
            ></Image>
            <CardContent>
              <Flex>
                <Text>{car.modelName}</Text>
                <Spacer />
                <Text>{car.modelType}</Text>
              </Flex>
            </CardContent>
          </Card>
        ))}
      </Flex>
    </>
  );
};
