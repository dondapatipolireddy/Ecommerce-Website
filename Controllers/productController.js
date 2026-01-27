import Product from "../models/product.js";

export const createProduct = async (req, res) => {
  try {
    console.log("REQ BODY 👉", req.body);

    const product = await Product.create({
      itemName: req.body.itemName,        // ✅ FIXED
      image: req.body.image,
      color: req.body.color,
      price: Number(req.body.price),      // ✅ ensure number
      description: req.body.Description, // ✅ FIXED
      category: req.body.category,
    });

    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error("PRODUCT ERROR ❌", error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
