import {useState} from "react"
import axios from 'axios';
export const Register=()=>{
     const [Name,newName]=useState("")
    const [Email,newEmail]=useState("")
    const [Password,newPass]=useState("")
    const [Role,newRole]=useState("")
 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:5000/api/Register", {
            userName: Name,
            email: Email,
            password: Password,
            role: Role
        });

        console.log("success", response.data);
        return(
            <h1>success</h1>
        )

    } catch (error) {
        console.log("error", error.response?.data || error.message);
     }
 }

    return(
        <>
            <form method="POST" onSubmit={handleSubmit}>
                <table cellpadding="20" align="center" className="border-2 border-red-900  rounded-full p-4">
                    <tr>
                        <td colSpan="2" align="center" className=""><h1>REGISTRATION FORM</h1></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="userName">UserName: </label></td>
                        <td><input type="text" className="border-2 border-blue-400 rounded-full" name="userName" value={Name} onChange={(e)=>newName(e.target.value)} placeholder=" Enter your username"></input></td>
                    </tr>
                
                    <tr>
                        <td><label htmlFor="email">Email: </label></td>
                        <td><input type="email" className="border-2 border-blue-400 rounded-full" name="email" value={Email} onChange={(e)=>newEmail(e.target.value)} placeholder=" Enter your email"></input></td>
                    </tr>
                    
                    <tr>
                        <td><label htmlFor="password">Password: </label></td>
                        <td><input type="password" className="border-2 border-blue-400 rounded-full" name="password" value={Password} onChange={(e)=>newPass(e.target.value)} placeholder=" Enter your password"></input></td>
                    </tr>
              
                    <tr>
                        <td><label htmlFor="role">Role: </label></td>
                        <td><input type="text" className="border-2 border-blue-400 rounded-full" name="role" value={Role} onChange={(e)=>newRole(e.target.value)} placeholder=" Enter your Role"></input></td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="center"><button type="submit" className=" bg-blue-600 p-2 rounded-full hover:bg-violet-700 active:bg-violet-500 focus:outline-2 focus:outline-offset-2 hover:outline-violet-500">submit</button></td>
                    </tr>
                    
                </table>
                
            </form>

        </>
    )
}
