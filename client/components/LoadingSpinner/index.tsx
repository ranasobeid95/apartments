import styles from "./style.module.scss";
interface SpinnerProps {
  size: string;
  borderThickness: string;
  className?: string;
  centered?: boolean;
}

export default function Spinner({
  size,
  borderThickness,
  className = "",
  centered = false,
}: SpinnerProps) {
  return (
    <div
      className={`${styles.spinnerContainer} ${centered && styles.centered}`}
    >
      <div
        className={`${className ? className : ""}  ${styles.loadingSpinner}`}
        style={{
          width: size,
          height: size,
          borderWidth: borderThickness,
        }}
      ></div>
    </div>
  );
}
