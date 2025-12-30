import {useState} from 'react'
export const Category=()=>{
    return(
        <h1>Category</h1>
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