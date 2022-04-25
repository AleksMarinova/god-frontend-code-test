import { FC } from "react";
import { Text, Link, Icon } from "vcc-ui";
import Image from "next/image";
import { iCarCardProps } from "../../interfaces";
import arrowLink from "../../docs/chevron-small.svg";

const CarCard: FC<iCarCardProps> = (props: iCarCardProps) => {
  const { car } = props;

  return (
    <div key={car.id} className="card-wrapper">
      <div className="card-info">
      <Text subStyle='inline-link' >{car.bodyType.toLocaleUpperCase()}</Text>
      <div className="card-info__model" >
      <Text subStyle='emphasis'><b>{car.modelName}</b></Text> 
      <Text subStyle="inline-link">{car.modelType}</Text>
      </div>
       
        
      </div>
      <Image
        src={car.imageUrl}
        alt={car.modelName}
        height="400px"
        width="500px"
      ></Image>
      <div className="links-container">
        <div className="link">
          <Link href={`/learn/${car.id}`} >
            LEARN
            <Icon type="navigation-chevronforward-12" />
          </Link>
        </div>
        <div className="link">
          <Link href={`/shop/${car.id}`} >
            SHOP
            <Icon type="navigation-chevronforward-12" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
