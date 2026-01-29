import {useState} from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import {Category,Account,Cart} from './Hello.js'
import {Login} from './Login.jsx'
import {Register} from './Register.jsx'
const Header=()=>{
    const [search,changeSearch]=useState("")    
    return(
        <div className="grid grid-flow-col gap-4 bg-gray-300 p-4">
             <input type="text" placeholder="     searchitem    " name="search" onChange={(e)=>changeSearch(e.target.value)}value={search} className="border-2 border-black bg-white rounded-full"></input>
            <div className="">
                <Link to="/Register">Register</Link>
                <Link to="/Login">Login</Link>
            </div>
        </div>
       
    )

}
const Footer=()=>{
    return(
        <div className="grid grid-flow-col gap-4 bg-gray-300 p-4">
        <Link to="/Category">Category</Link>
        <Link to="/Account">Account</Link>
        <Link to="/Cart">Cart</Link>
        </div>
    )

}
const Body=()=>{
    return(
        <div height="50cm" width="100%" className="flex-1 bg-gray-100 overflow-y-auto">
            <Routes>
                <Route path="/Category" element={<Category></Category>}></Route>
                <Route path="/Account" element={<Account></Account>}></Route>
                <Route path="/Cart" element={<Cart></Cart>}></Route>
                
                <Route path="/Register" element={<Register></Register>}></Route>
            </Routes>
        </div>
    )
}
const App = () => {
  return (<>
    <BrowserRouter>
      {/* FULL SCREEN LAYOUT */}
      <div className="h-screen flex flex-col">
        
        {/* HEADER (fixed height) */}
        <Header />

        {/* BODY (FIXED SPACE ALWAYS) */}
        <main className="flex-1 bg-gray-100 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </main>

        {/* FOOTER (fixed height) */}
        <Footer />
      </div>
    </BrowserRouter>
  
        </>
    )
}
export default App;
// const App=()=>{
//     return(
//         <div className="grid grid-flow-col grid-rows-4 gap-4 ">
//             <div className="border-2 border-red-500 bg-red-500">01</div>
//             <div className="border-2 border-red-500 bg-red-500">02</div>
//             <div className="border-2 border-red-500 bg-red-500">03</div>
//             <div className="border-2 border-red-500 bg-red-500">04</div>
//             <div className="border-2 border-red-500 bg-red-500">05</div>
//             <div className="row-span-3">
//                 <div className="row-start-2">06</div>
//             </div>
//             {/* <div class="row-span-3 grid grid-rows-subgrid gap-4">
//                 <div class="row-start-2">06</div>
//             </div> */}
//             <div className="border-2 border-red-500 bg-red-500">07</div>
//             <div className="border-2 border-red-500 bg-red-500">08</div>
//             <div className="border-2 border-red-500 bg-red-500">09</div>
//         </div>
//     )
// }

//------------------------------------------------------