"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const apartmentsSchema = new mongoose_1.Schema({
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
    images: {
        type: [String],
        required: true,
    },
});
const Apartments = (0, mongoose_1.model)("Post", apartmentsSchema);
exports.default = Apartments;
//# sourceMappingURL=apartments.js.map