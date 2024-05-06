"use client";
import { IApartments } from "@/types/apartment";
import Image from "next/image";
import styles from "./style.module.scss";
import truncateText from "@/utils/shared";
import LocationIcon from "../Icons/LocationIcon";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
import { useEffect, useState } from "react";

export default function Card({
  title,
  description,
  price,
  location,
  images,
  unClickable = false,
  showSlider = false,
  _id,
}: IApartments) {
  const [imgs, setImgs] = useState<{ url: string }[]>();
  useEffect(() => {
    let newImgs: { url: string }[];
    if (images && images.length > 0) {
      newImgs = images.map((img) => {
        return { url: img };
      });
      setImgs(newImgs);
    }
  }, [images]);
  return (
    <Link
      href={`${ROUTES.APARTMENTS}/${_id}`}
      className={`${styles.cardContainer} ${unClickable ? styles.disable : ""}`}
    >
      {imgs && showSlider ? (
        <Slider
          imageList={imgs}
          loop={true}
          autoPlay={true}
          autoPlayInterval={5000}
          width={"100%"}
          height={200}
        />
      ) : (
        <Image
          className={`${styles.imageStyle}`}
          width={800}
          height={200}
          src={images[0]}
          alt={title}
        ></Image>
      )}

      <div className={`${styles.detailsStyle}`}>
        <div className={`${styles.detailsHeaderStyle}`}>
          <span className={`${styles.titleStyle}`}>{title}</span>
          <span className={`${styles.priceStyle}`}>
            {" "}
            Price : <span>{price} </span> / month
          </span>
        </div>

        <span className={`${styles.detailsContentStyle}`}>
          {truncateText(description, 80)}
        </span>
        <div className={`${styles.locationStyle}`}>
          {" "}
          <LocationIcon />
          {location}
        </div>
      </div>
    </Link>
  );
}
