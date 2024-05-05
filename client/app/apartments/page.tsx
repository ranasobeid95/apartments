"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { getAllApartments } from "@/services/apartment";

export default function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);
  useEffect(() => {
    async function getApartmentsList() {
      const { status, data } = await getAllApartments();

      if (status === 1) setApartments(data);
    }
    getApartmentsList();
  }, []);
  return <div className={styles.apartmentsContainerStyle}></div>;
}
