import { Link } from "react-router-dom"
import CartPopUp from "./cartPopUp"

export default function Header(){
    return(
        <>
            <div className="fixed w-full z-10 bg-gray-100 h-20 flex justify-between shadow-lg items-center px-32 border-b border-gray-300">
                <span><Link to="/" className="text-xl font-semibold">💎 anurag.</Link></span>
                <span className="flex space-x-2">
                    {/* <a href="/login" class="bg-blue-500 text-white px-5 py-3 border rounded hover:bg-blue-600">Login</a>
                    <a href="/registration" class="bg-rose-500 text-white px-5 py-3 border rounded hover:bg-rose-600">Register</a> */}
                    <Link to="/cart"><CartPopUp/></Link>
                </span>
            </div>
        </>
    )
}