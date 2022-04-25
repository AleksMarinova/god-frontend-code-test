export interface iProps {
  props: {
    cars: iCar[];
  };
}

export interface iCar {
  id: string;
  modelName: string;
  modelType: string;
  bodyType: string;
  imageUrl: string;
}

export interface iCarCardProps {
  car: iCar
}

export interface iCarouselProps {
  cars: iCar[]
}