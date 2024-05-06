"use client";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import ErrorMsg from "../Errors/ErrorMsg";
import { INPUT_TYPES, InputProps } from "@/types/shared";

export default function Input({
  type = INPUT_TYPES.TEXT,
  label,
  placeholder = "",
  className = "",
  name,
  value,
  error,
  disabled = false,
  readOnly = false,
  width = "100%",
  required = false,
  hide = false,
  height = "48px",
  onChange,
  onBlur,
  maxLength,
}: InputProps) {
  return (
    <div className={`${className ? className : ""} ${styles.inputContainer} `}>
      {label && <label className={`${styles.inputLabel}`}>{label} </label>}
      <div
        className={`${styles.formControl} ${error ? styles.invalid : ""} ${
          disabled ? styles.disabled : ""
        }`}
        style={{ width, height }}
      >
        <input
          className={styles.generalInput}
          tabIndex={0}
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          maxLength={maxLength}
        />
      </div>
      <div className={styles.hint}>
        <div>
          <ErrorMsg error={error} />
        </div>
      </div>
    </div>
  );
}
