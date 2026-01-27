import mongoose from "mongoose";

const productItem = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true, // ✅ URL string
    },
    color: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {   // ✅ lowercase
      type: String,
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productItem);
export default Product;
