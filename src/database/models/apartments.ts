import { Schema, model, Document } from "mongoose";

export interface IApartments extends Document {
  title: string;
  description: string;
  price: string;
  location: string;
  images: string[];
}

const apartmentsSchema = new Schema<IApartments>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
});

const Apartments = model<IApartments>("Post", apartmentsSchema);

export default Apartments;
