import { FC } from "react";
import { Card, CardContent, Flex, Text, Spacer, Link } from "vcc-ui";
import Image from "next/image";
import { iCarCardProps } from "../../interfaces";

const CarCard: FC<iCarCardProps> = (props: iCarCardProps) => {
  const { car } = props;
  return (
    <Card key={car.id} >
      <CardContent >
        <Flex extend={{
          justifyContent: "space-between",
         padding: "0",
         margin: "0"
        }} >
          <Text>{car.modelType}</Text>
          <Spacer />
          <Text subStyle={"emphasis"}
          >{car.modelName}</Text>
          <Spacer />
          <Text>{car.bodyType}</Text>
        </Flex>
      </CardContent>
      <Image
        src={car.imageUrl}
        alt={car.modelName}
        height="300px"
        width="300px"
      ></Image>
      <div className="links-container">
        <div className="link">
          <Link href={`/learn/${car.id}`} arrow={"right"}>
            LEARN
          </Link>
        </div>
        <div className="link">
          <Link href={`/shop/${car.id}`} arrow={"right"}>
            SHOP
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default CarCard;
