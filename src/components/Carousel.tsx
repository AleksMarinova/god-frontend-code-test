
import CarCard from './CarCard';
import { iProps, iCarouselProps } from '../../interfaces';
import { FC, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import styles from '../../styles/Carousel.module.css'
import Image from 'next/image'
import Buttons from './Buttons';
import { Icon } from 'vcc-ui'
import { useEffect } from 'react';



const CarCarousel:FC<iCarouselProps> = ({cars}) => {
 
  const [emblaRef, emblaApi] = useEmblaCarousel({
  containScroll: 'trimSnaps',
  })

  useEffect(() =>{
    emblaApi && emblaApi.scrollTo(0)
  }, [emblaApi, cars])

  const scrollNext=useCallback(() => {
    if(emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollPrev=useCallback(() => {
    if(emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  return(
    <div className={styles.embla} >
      <div className='embla__viewport' ref={emblaRef}>
    <div className={styles.embla__container}>
      {cars.map(car =>{
        return(
          <div className={styles.embla__slide} key={car.id}>
            <CarCard car={car} />
          </div>
        )
      })}
    </div>
    <div className={styles.buttonsContainer}> 
    <button className={styles.embla__prev} onClick={scrollPrev}>
    <Icon type="media-previous-32" />
      </button>
      <button className={styles.embla__next} onClick={scrollNext}>
      <Icon type="media-next-32" />
      </button>
    </div>
    
    </div>
    
  </div>
  )
}

  
  

export default CarCarousel;