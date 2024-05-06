"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { IApartments } from "@/types/apartment";
import { getApartmentByID } from "@/services/apartment";
import Spinner from "@/components/LoadingSpinner";
import Card from "@/components/Card";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

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
      if (status === 1) {
        setIsLoading(false);
        setApartment(data);
      }
    }
    getApartment();
  }, [apartmentId]);
  return (
    <div className={styles.apartmentDetailsContainerStyle}>
      {isLoading ? (
        <Spinner centered={true} size='40px' borderThickness='4px' />
      ) : (
        <div className={styles.apartmentsListStyle}>
          <Link href={ROUTES.Home} className={styles.backButton}>
            {"<"}
          </Link>
          {apartment && (
            <Card
              unClickable={true}
              _id={apartment._id}
              title={apartment.title}
              description={apartment.description}
              price={apartment.price}
              location={apartment.location}
              images={apartment.images}
              showSlider={true}
            />
          )}
        </div>
      )}
    </div>
  );
}
