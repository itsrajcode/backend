import mongoose from "mongoose";

const vendorAddressSchema = new mongoose.Schema(
    {
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        zipCode: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const VendorAddress = mongoose.model("VendorAddress", vendorAddressSchema)