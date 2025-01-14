import mongoose from "mongoose";

const VendorSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true
        },
        address: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "VendorAddress",
        },
        contact: {
            type: String,
            required: true
        },
    }
    ,{timestamps: true})

export const Vendor = mongoose.model("Vendor", VendorSchema)