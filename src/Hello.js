import axiosInstance from "./axiosInstance";
import { useState,useEffect } from "react";
import ProductCard from "./productCard";

export const Category = () => {
  const [products, setProducts] = useState([]);

  const handleCategory = async (type) => {
    try {
      const response = await axiosInstance.get(
        `/products/${type}`
      );
      setProducts(response.data);
    } catch (error) {
      console.error(
        "Error fetching category:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="flex">
      {/* LEFT SIDE - CATEGORY LIST */}
      <div className="flex rounded-lg flex-col bg-white gap-4 w-1/5 h-screen overflow-y-auto">
                 <button onClick={()=>handleCategory("Electronics")} className="bg-blue-500 rounded-lg justify-items-center hover:bg-white">Electronics</button>
                 <button onClick={()=>handleCategory("Groceries")} className="bg-blue-500 rounded-lg justify-items-center hover:bg-white active:bg-blue-800 active:scale-95 focus:bg-white">Groceries</button>
                 <button onClick={()=>handleCategory("Books")} className="bg-blue-500 rounded-lg justify-items-center hover:bg-white">Books</button>
                 <button onClick={()=>handleCategory("Furniture")} className="bg-blue-500 rounded-lg justify-items-center hover:bg-white">Furniture</button>
                 <button onClick={()=>handleCategory("Fashion")} className="bg-blue-500 rounded-lg justify-items-center hover:bg-white">Fashion</button>
                 <button onClick={()=>handleCategory("BeautyProducts")} className="bg-blue-500 rounded-lg justify-items-center hover:bg-white">BeautyProducts</button>
                 <button onClick={()=>handleCategory("Sports")} className="bg-blue-500 rounded-lg justify-items-center hover:bg-white">Sports</button>
                 <button onClick={()=>handleCategory("Home")} className="bg-blue-500 rounded-lg justify-items-center hover:bg-white">Home</button>
                 <button onClick={()=>handleCategory("Food & Health")} className="bg-blue-500 rounded-lg justify-items-center hover:bg-white">Food & Health</button>
           </div>

      {/* RIGHT SIDE - PRODUCTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-4/5 p-6">
        {products.map((item) => (
          <ProductCard
            key={item._id}
            itemName={item.itemName}
            price={item.price}
            Description={item.Description}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export const Account=()=>{
    return(
        <h1>Account Details</h1>
    )
}

export const Cart = () => {
  const [cartItem, changeCart] = useState([]);

  const handleCart = async () => {
    try {
      const response = await axiosInstance.get("/Cart");
      changeCart(response.data.data); // ⭐ FIX HERE
      console.log(response.data.data);
    } catch (error) {
      console.error(
        "Error fetching cart:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    handleCart();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-5/5 p-6">
      {cartItem.length > 0 ? (
        cartItem.map(item => (
          <ProductCard
            key={item._id}
            itemName={item.itemName}
            price={item.price}
            Description={item.Description}
            color={item.color}
          />
        ))
      ) : (
        <p>No items in cart</p>
      )}
    </div>
  );
};
