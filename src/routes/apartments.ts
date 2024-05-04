import express, { Router } from "express";
import Apartments, { IApartments } from "../database/models/apartments"; // Import apartment model and interface

const router: Router = express.Router();

// Submits a apartment
router.post("/", async (req: express.Request, res: express.Response) => {
  const { title, description, price, images } = req.body as {
    title: string;
    description: string;
    price: String;
    images: [String];
  };
  console.log("req.body :>> ", req.body);
  try {
    const savedApartment = await Apartments.create({
      title,
      description,
      price,
      images,
    });
    console.log("res.json(savedApartment) :>> ", res.json(savedApartment));
    res.json(savedApartment);
  } catch (error) {
    res.status(500).json({ message: "Failed to create apartment", error });
  }
});

// Get back all the apartments
router.get("/", async (req: express.Request, res: express.Response) => {
  console.log("111 :>> ", 111);
  try {
    const apartments = await Apartments.find();
    res.json(apartments);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch apartments", error });
  }
});

// Get a specific apartment by ID
router.get(
  "/:apartmentId",
  async (req: express.Request, res: express.Response) => {
    const { apartmentId } = req.params;
    try {
      const apartment = await Apartments.findById(apartmentId);
      if (!apartment) {
        return res.status(404).json({ message: "apartment not found" });
      }
      res.json(apartment);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch apartment", error });
    }
  }
);

// Delete apartment by ID
router.delete(
  "/:apartmentId",
  async (req: express.Request, res: express.Response) => {
    const { apartmentId } = req.params;
    try {
      const deletedApartment = await Apartments.findOneAndDelete({
        _id: apartmentId,
      });
      if (!deletedApartment) {
        return res.status(404).json({ message: "apartment not found" });
      }
      res.json(deletedApartment);
    } catch (error) {
      res.status(500).json({ message: "Failed to delete apartment", error });
    }
  }
);

// Update apartment by ID
router.patch(
  "/:apartmentId",
  async (req: express.Request, res: express.Response) => {
    const { apartmentId } = req.params;
    const { title } = req.body as { title: string };
    try {
      const updatedApartment = await Apartments.findByIdAndUpdate(
        apartmentId,
        { title },
        { new: true }
      );
      if (!updatedApartment) {
        return res.status(404).json({ message: "apartment not found" });
      }
      res.json(updatedApartment);
    } catch (error) {
      res.status(500).json({ message: "Failed to update apartment", error });
    }
  }
);

export default router;
