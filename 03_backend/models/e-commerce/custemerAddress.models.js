import mongoose from "mongoose";

const customerAddressSchema = new mongoose.Schema(
    {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        zip: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
    }
    ,{timestamps: true})

export const CustomerAddress = mongoose.model("CustomerAddress", customerAddressSchema)