"use client";

// import { Button } from "@/components/Button";
// import {
//   BUTTON_ROLES,
//   BUTTON_SIZES,
//   BUTTON_STATES,
//   BUTTON_TYPES,
// } from "@/components/Button/type";
import Input from "@/components/Input";
import { FormikHelpers, useFormik } from "formik";
import styles from "./style.module.scss";
import { IApartments } from "@/types/apartment";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { INPUT_TYPES } from "@/types/shared";
import { ApartmentSchema } from "@/utils/validation";
import { useState } from "react";
import Spinner from "@/components/LoadingSpinner";
import { addApartment } from "@/services/apartment";
export interface IApartment {
  _id?: string;
  title: string;
  description: string;
  price: string;
  location: string;
  images: string;
}
const initialFormValues: IApartment = {
  title: "",
  description: "",
  price: "",
  location: "",
  images: "",
};

export default function AddApartmentForm({}: {}) {
  const { push } = useRouter();
  const [images, setImages] = useState<string[]>([]);

  const {
    handleChange,
    values,
    handleBlur,
    errors,
    setFieldValue,
    handleSubmit,
    touched,
    isSubmitting,
    isValid,
    dirty,
    submitForm,
  } = useFormik({
    initialValues: initialFormValues as IApartment,
    onSubmit: addNewApartment,
    validationSchema: ApartmentSchema,
  });

  async function addNewApartment(
    values: IApartment,
    { setErrors, setSubmitting, resetForm }: FormikHelpers<any>
  ) {
    setSubmitting(true);

    const body = { ...values, images };

    const resp = await addApartment(body);
    setSubmitting(false);

    if (resp && resp.status === 0) {
      // resetForm();
    } else {
      push(ROUTES.Home);
    }
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        label='Enter Title'
        type={INPUT_TYPES.TEXT}
        name='title'
        error={touched.title ? errors.title : ""}
        value={values.title}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder='Title'
      />

      <Input
        label='Enter Description'
        type={INPUT_TYPES.TEXT}
        name='description'
        error={touched.description ? errors.description : ""}
        value={values.description}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder='Description'
      />
      <Input
        label='Enter Price'
        type={INPUT_TYPES.TEXT}
        name='price'
        error={touched.price ? errors.price : ""}
        value={values.price}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder='Price'
      />
      <Input
        label='Enter Location'
        type={INPUT_TYPES.TEXT}
        name='location'
        error={touched.location ? errors.location : ""}
        value={values.location}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder='Location'
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Input
          label='Enter Images'
          type={INPUT_TYPES.TEXT}
          name='images'
          error={touched.images ? errors.images : ""}
          value={values.images}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder='Enter image link'
        />
        <div
          className={styles.addImgStyle}
          onClick={() => {
            setImages([...images, values.images]);
          }}
        >
          +
        </div>
      </div>

      <button
        type={"submit"}
        className={styles.add}
        disabled={!(isValid && dirty)}
      >
        {isSubmitting ? (
          <Spinner size={"20px"} borderThickness={"2px"} />
        ) : (
          "Add"
        )}
      </button>
    </form>
  );
}
