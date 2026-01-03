import axios from 'axios'
import {useState} from 'react'

const handleCategory=async(type)=>{
try {
   // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NGJkZTM4ZDBjMTIxYjlhODI0NDllYiIsImVtYWlsIjoiYkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NjY2MjczOTUsImV4cCI6MTc2NjYzMDk5NX0.JcKf4j4Cyz7CCd-VTHNGNW6P7jM9RX917ySlNgBaW9o"

    const response = await axios.get(`http://localhost:5000/api/category/${type}`,{headers:{Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5N…g4NX0.nGPe0IPjhCW0IMZSwV1PxbytBnBj9QdKM93T54z4C5s`}});
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching category:", error.response?.data || error.message);
  }
}
export const Category=()=>{
    return(
        <>
            <button onClick={handleCategory}>get categories</button>
            <div className="flex rounded-lg flex-col bg-white gap-4 w-1/5 h-screen overflow-y-auto">
                <button onClick={()=>handleCategory("Electronics")} className="bg-blue-500 rounded-lg justify-items-center hover:bg-white">Electronics</button>
                <button onClick={()=>handleCategory("Clothes")} className="bg-blue-500 rounded-lg justify-items-center hover:bg-white active:bg-blue-800 active:scale-95 focus:bg-white">Clothes</button>
                <button onClick={()=>handleCategory("Books")} className="bg-blue-500 rounded-lg justify-items-center hover:bg-white">Books</button>
                <button onClick={()=>handleCategory("Furniture")} className="bg-blue-500 rounded-lg justify-items-center hover:bg-white">Furniture</button>
                <button onClick={()=>handleCategory("Furniture")} className="bg-blue-500 rounded-lg justify-items-center hover:bg-white">Furniture</button>
                <button onClick={()=>handleCategory("Furniture")} className="bg-blue-500 rounded-lg justify-items-center hover:bg-white">Furniture</button>
                <button onClick={()=>handleCategory("Furniture")} className="bg-blue-500 rounded-lg justify-items-center hover:bg-white">Furniture</button>
                <button onClick={()=>handleCategory("Furniture")} className="bg-blue-500 rounded-lg justify-items-center hover:bg-white">Furniture</button>
                <button onClick={()=>handleCategory("Furniture")} className="bg-blue-500 rounded-lg justify-items-center hover:bg-white">Furniture</button>
                <button onClick={()=>handleCategory("Furniture")} className="bg-blue-500 rounded-lg justify-items-center hover:bg-white">Furniture</button>
                <button onClick={()=>handleCategory("Furniture")} className="bg-blue-500 rounded-lg justify-items-center hover:bg-white">Furniture</button>
            </div>
        </>
    )
}

export const Account=()=>{
    return(
        <h1>Account Details</h1>
    )
}

export const Cart=(items)=>{
    const [cartItem,changeCart]=useState([items])
    return(
        <>
            <h1>Welcome To Cart</h1>
            <input type="text" placeholder="searchitem"></input>
            <table>
                {cartItem.map((item)=>(
                    <h1>{item}</h1>
                ))}
            </table>
        </>
    )
}