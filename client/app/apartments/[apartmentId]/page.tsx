"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { IApartments } from "@/types/apartment";
import { getApartmentByID } from "@/services/apartment";
import Spinner from "@/components/LoadingSpinner";
import Card from "@/components/Card";

export default function ApartmentDetailsPage({
  params: { apartmentId },
}: {
  params: { apartmentId: string };
}) {
  const [apartment, setApartment] = useState<IApartments>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getApartment() {
      const { status, data } = await getApartmentByID(apartmentId);
      console.log("data :>> ", data);
      if (status === 1) {
        setIsLoading(false);
        setApartment(data);
      }
    }
    getApartment();
  }, []);
  return (
    <div className={styles.apartmentDetailsContainerStyle}>
      {isLoading ? (
        <Spinner centered={true} size='40px' borderThickness='4px' />
      ) : (
        <div className={styles.apartmentsListStyle}>
          {apartment && (
            <Card
              unClickable={true}
              _id={apartment._id}
              title={apartment.title}
              description={apartment.description}
              price={apartment.price}
              location={apartment.location}
              images={apartment.images}
            />
          )}
        </div>
      )}
    </div>
  );
}
