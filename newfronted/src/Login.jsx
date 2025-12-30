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
};

    return(
        <>
            <form align="center" method="POST" onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td><label htmlFor="userName">UserName: </label></td>
                        <td><input type="text" className="userName" name="userName" value={Name} onChange={(e)=>newName(e.target.value)} placeholder="Enter your username"></input><br/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Email: </label></td>
                        <td><input type="email" className="email" name="email" value={Email} onChange={(e)=>newEmail(e.target.value)} placeholder="Enter your email"></input><br/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="password">Password: </label></td>
                        <td><input type="password" className="password" name="password" value={Password} onChange={(e)=>newPass(e.target.value)} placeholder="Enter your password"></input><br/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="role">Role: </label></td>
                        <td><input type="text" className="role" name="role" value={Role} onChange={(e)=>newRole(e.target.value)} placeholder="Enter your password"></input><br/></td>
                    </tr>
                    <button type="submit">Register</button>
                </table>
                
            </form>

        </>
    )
}
export default Register;
export const Login=()=>{
    return(
        <>

        </>
    )
}
