"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { getAllApartments } from "@/services/apartment";
import Spinner from "@/components/LoadingSpinner";
import Card from "@/components/Card";
import { IApartments } from "@/types/apartment";

export default function ApartmentsPage() {
  const [apartments, setApartments] = useState<IApartments[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getApartmentsList() {
      const { status, data } = await getAllApartments();

      if (status === 1) {
        setIsLoading(false);
        setApartments(data.reverse());
      }
    }
    getApartmentsList();
  }, []);
  return (
    <div className={styles.apartmentsContainerStyle}>
      {isLoading ? (
        <Spinner centered={true} size='40px' borderThickness='4px' />
      ) : (
        <div className={styles.apartmentsListStyle}>
          {apartments.length > 0 &&
            apartments.map((apartment: IApartments) => {
              const { _id, title, description, price, location, images } =
                apartment;
              return (
                <Card
                  _id={_id}
                  title={title}
                  description={description}
                  price={price}
                  location={location}
                  images={images}
                  key={_id}
                />
              );
            })}
        </div>
      )}
    </div>
  );
}
