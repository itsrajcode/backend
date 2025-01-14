import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
    },
    contact: {},
  },
  { timestamps: true }
);

export const Customer = mongoose.model("Customer", customerSchema)
