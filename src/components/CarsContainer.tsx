import React, { FC } from "react";
import cars from "../../public/api/cars.json";
import { Card, Flex, Text, CardContent, Spacer } from "vcc-ui";
import Image from "next/image";

interface iProps {
  props: {
    cars: {}[];
  };
}

export const CarsContainer: FC<iProps> = () => {
  return (
    <Flex
    extend={{
      flexDirection: "row",
    }}
    >
      {cars.map((car: any) => (
        <Card key={car.id}
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
  );
};
