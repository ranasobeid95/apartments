import { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button onClick={goToPrevious} className={styles.navButton}>
        Previous
      </button>
      <Image
        src={images[currentImageIndex]}
        className={styles.image}
        alt='Carousel Item'
      />
      <button onClick={goToNext} className={styles.navButton}>
        Next
      </button>
    </div>
  );
}
