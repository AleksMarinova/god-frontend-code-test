import React, { FC } from "react";
import cars from "../../public/api/cars.json";

interface iProps {
  props: {
    cars: {}[];
  };
}

export const HelloWorld: FC<iProps> = () => {
  return (
    <div className="cars.container">
      {cars.map((car: any) => (
        <div className="car" key={car.id}>
          <h1>{car.modelName}</h1>
          <p>{car.bodyType}</p>
          <p>{car.modelType}</p>
          <div className="car.image">
            <img src={car.imageUrl} alt={car.modelName} />
            </div>
            </div>
      ))}
    </div>
  );
};

