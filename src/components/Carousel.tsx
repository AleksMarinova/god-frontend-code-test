import CarCard from "./CarCard";
import { iCarouselProps } from "../../interfaces";
import { FC, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "../../styles/Carousel.module.css";
import Image from "next/image";
import Buttons from "./Buttons";
import { Icon } from "vcc-ui";
import { useEffect, useState } from "react";

const CarCarousel: FC<iCarouselProps> = ({ cars }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [width, setWidth] = useState(0);
  const breakpoint = 500;

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi && emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    emblaApi && setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [setSelectedIndex, emblaApi]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    onSelect();
    emblaApi && emblaApi.on("select", onSelect);
  }, [emblaApi, setSelectedIndex, onSelect]);

  useEffect(() => {
    emblaApi && emblaApi.scrollTo(0);
  }, [emblaApi, cars]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const Arrows = () => {
    return (
      <div className={styles.buttonsContainer}>
        <button className={styles.embla__prev} onClick={scrollPrev}>
          <Icon type="media-previous-32" />
        </button>
        <button className={styles.embla__next} onClick={scrollNext}>
          <Icon type="media-next-32" />
        </button>
      </div>
    );
  };

  const Dots = () => {
    return (
      <div className={styles.dotsContainer}>
        {cars.map((car, index) => {
          return (
            <button
              key={car.id}
              className={`${styles.dot} ${
                index === selectedIndex ? styles.dotActive : ""
              }`}
              onClick={() => scrollTo(index)}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.embla}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className={styles.embla__container}>
          {cars.map((car) => {
            return (
              <div className={styles.embla__slide} key={car.id}>
                <CarCard car={car} />
              </div>
            );
          })}
        </div>

        {width > breakpoint ? <Arrows /> : <Dots />}
      </div>
    </div>
  );
};

export default CarCarousel;
