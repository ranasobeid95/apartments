"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apartments_1 = __importDefault(require("../database/models/apartments")); // Import apartment model and interface
const router = express_1.default.Router();
// Submits a apartment
router.post("/", async (req, res) => {
    const { title, description, price, images } = req.body;
    console.log("req.body :>> ", req.body);
    try {
        const savedApartment = await apartments_1.default.create({
            title,
            description,
            price,
            images,
        });
        console.log("res.json(savedApartment) :>> ", res.json(savedApartment));
        res.json(savedApartment);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to create apartment", error });
    }
});
// Get back all the apartments
router.get("/", async (req, res) => {
    console.log("111 :>> ", 111);
    try {
        const apartments = await apartments_1.default.find();
        res.json(apartments);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetch apartments", error });
    }
});
// Get a specific apartment by ID
router.get("/:apartmentId", async (req, res) => {
    const { apartmentId } = req.params;
    try {
        const apartment = await apartments_1.default.findById(apartmentId);
        if (!apartment) {
            return res.status(404).json({ message: "apartment not found" });
        }
        res.json(apartment);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetch apartment", error });
    }
});
// Delete apartment by ID
router.delete("/:apartmentId", async (req, res) => {
    const { apartmentId } = req.params;
    try {
        const deletedApartment = await apartments_1.default.findOneAndDelete({
            _id: apartmentId,
        });
        if (!deletedApartment) {
            return res.status(404).json({ message: "apartment not found" });
        }
        res.json(deletedApartment);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to delete apartment", error });
    }
});
// Update apartment by ID
router.patch("/:apartmentId", async (req, res) => {
    const { apartmentId } = req.params;
    const { title } = req.body;
    try {
        const updatedApartment = await apartments_1.default.findByIdAndUpdate(apartmentId, { title }, { new: true });
        if (!updatedApartment) {
            return res.status(404).json({ message: "apartment not found" });
        }
        res.json(updatedApartment);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to update apartment", error });
    }
});
exports.default = router;
//# sourceMappingURL=apartments.js.map