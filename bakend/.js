import express from 'express'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import {PORT} from 'env'
import {Category,Account,Cart} from "index.js"
const app=express();

const Body=()=>{
    return(
        <h1>BODY PART</h1>
    )
}
const Footer=()=>{
    return(
        <>
        <Link to="/Category">Category</Link>
        <Link to="/Account">Account</Link>
        <Link to="/Cart">Cart</Link>
          <Routes>
            <Route path="/Category" element={<Category></Category>}>Category</Route>
            <Route path="/Account" element={<Account></Account>}>Account</Route>
            <Route path="/Cart" element={<Cart></Cart>}>Cart</Route>
            </Routes>  
        </>
    )
}
const home=()=>{
    return(
        <>
            <BrowserRouter>
            {/* <Header>
            </Header> */}
            <Body>
            </Body>
            <Footer>
            </Footer>
            </BrowserRouter>

        </>
    )
}


app.listen(PORT,()=>{
    console.log("app is running at port no http://localhost:5000")
})
