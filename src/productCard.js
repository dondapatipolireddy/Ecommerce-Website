import axiosInstance from './axiosInstance'
import {useState} from 'react'
const ProductCard=({itemName,price,Description,color})=>{
     const [message,setM]=useState("")
    const handleCart=async()=>{
        const response=await axiosInstance.post('/Cart',{itemName,price,Description,color}
    )
    setM(response.data.message)
    setTimeout(()=>{
        setM("")
    },5000)
    }
    return(
        <>
            <div className="max-w-sm bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
                <img src="https://via.placeholder.com/400x250" alt="Realme zpro" className="w-full h-52 object-cover rounded-t-xl"></img>
                <div className="p-4">
                    <h2 className="text-xl font-semibold">{itemName}</h2>
                    <p className="text-sm text-gray-500">{color}</p>
                    <p className="text-sm text-gray-600 mt-2">{Description}</p>
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-lg font-bold text-green-600">{price}</span>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={handleCart}>Add to cart</button>
                    </div>
                </div>
                <div>
                    {message && (
          <p className="mt-3 text-sm font-medium text-green-600 ">
            {message}
          </p>
        )}
                </div>
            </div>
        </>
    )
}
export default ProductCard;