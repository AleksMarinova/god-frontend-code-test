
import CarCard from './CarCard';
import { iProps, iCarouselProps } from '../../interfaces';
import { FC } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import styles from '../../styles/Carousel.module.css'
import source from '../../docs/chevron-small.svg'
import Image from 'next/image'


const CarCarousel:FC<iCarouselProps> = ({cars}) => {
  const [emblaRef] = useEmblaCarousel()

  return(
    <div className={styles.embla} ref={emblaRef}>
    <div className={styles.embla__container}>
      {cars.map(car =>{
        return(
          <div className={styles.embla__slide} key={car.id}>
            <CarCard car={car} />
          </div>
        )
      })}
    </div>
    <div>
      <div>
        <Image
          src={source}
          width={150}
          height={150}
          alt="chevron"
          />
      </div>
      <div></div>
    </div>
  </div>
  )
}

  
  

export default CarCarousel;