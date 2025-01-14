import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    article: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OrderArticle",
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    date: {
      type: Date,
      required: true,
    },
    total_value: {
      type: Number,
      required: true,
    },
    processed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
