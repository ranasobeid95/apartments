export interface IApartments {
  _id?: string;
  title: string;
  description: string;
  price: string;
  location: string;
  images: string[];
  unClickable?: boolean;
  showSlider?: boolean;
}
