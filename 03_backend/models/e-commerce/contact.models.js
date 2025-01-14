import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        address:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "CustomerAddress",
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
    }
    ,{timestamps: true})


export const Contact = mongoose.model("Contact", contactSchema)