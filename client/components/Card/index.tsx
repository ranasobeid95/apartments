import { IApartments } from "@/types/apartment";
import Image from "next/image";
import styles from "./style.module.scss";
import truncateText from "@/utils/shared";
import LocationIcon from "../Icons/LocationIcon";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";

export default function Card({
  title,
  description,
  price,
  location,
  images,
  _id,
}: IApartments) {
  return (
    <Link
      href={`${ROUTES.APARTMENTS}/${_id}`}
      className={`${styles.cardContainer}`}
    >
      <Image
        className={`${styles.imageStyle}`}
        width={800}
        height={200}
        src={images[0]}
        alt={title}
      ></Image>
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
