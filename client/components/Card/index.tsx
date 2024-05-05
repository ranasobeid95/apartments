import styles from "./style.module.scss";
interface SpinnerProps {
  name: string;
  details: string;
  price: string;
  location: string;
}

export default function Card({ name, details, price, location }: SpinnerProps) {
  return <div className={`${styles.cardContainer}`}></div>;
}
