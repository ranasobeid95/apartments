"use client";

import styles from "./style.module.scss";
interface ErrorMsgProps {
  error: string | undefined;
  style?: any;
}

export default function ErrorMsg({ error = "", style }: ErrorMsgProps) {
  return (
    <>
      {error && (
        <h4
          className={`${styles.error} ${error ? styles.invalid : ""}`}
          style={style}
        >
          {" "}
          {error}
        </h4>
      )}
    </>
  );
}
