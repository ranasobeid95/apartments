import React from "react";
import styles from "./style.module.scss";
import AddApartmentForm from "./AddApartmentForm";

export default function AddApartmentPage() {
  return (
    <div className={styles.addApartmentPageContainerStyle}>
      <h1>Add Apartment</h1>
      <AddApartmentForm />
    </div>
  );
}
