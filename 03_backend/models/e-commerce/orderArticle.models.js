import mongoose from "mongoose";

const orderArticleSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        Vendor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vendor",
        },
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        code: {
            type: String,
            required: true
        },
    }
    ,{timestamps: true})

export const OrderArticle = mongoose.model("OrderArticle", orderArticleSchema)