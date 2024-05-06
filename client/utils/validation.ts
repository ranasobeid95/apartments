import { object, string } from "yup";

export const ApartmentSchema = object().shape({
  title: string().required("This field is required"),
  description: string().required("This field is required"),
  price: string().required("This field is required"),
  location: string().required("This field is required"),
  images: string().required("This field is required"),
});
