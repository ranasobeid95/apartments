"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { getAllApartments } from "@/services/apartment";
import Spinner from "@/components/LoadingSpinner";

export default function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getApartmentsList() {
      const { status, data } = await getAllApartments();

      if (status === 1) {
        setIsLoading(false);
        setApartments(data);
      }
    }
    getApartmentsList();
  }, []);
  return (
    <div className={styles.apartmentsContainerStyle}>
      {isLoading ? (
        <Spinner centered={true} size='40px' borderThickness='4px' />
      ) : (
        <div className={styles.apartmentsListStyle}>data loaded</div>
      )}
    </div>
  );
}
