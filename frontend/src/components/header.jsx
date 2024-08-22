export default function Header(){
    return(
        <>
            <div className="flex justify-between items-center p-4 border-b border-gray-600">
                <span><a href="/" className="p-3 text-xl font-semibold">anurag.</a></span>
                <span className="flex space-x-2">
                    <a href="/login" class="bg-blue-500 text-white px-5 py-3 border rounded hover:bg-blue-600">Login</a>
                    <a href="/registration" class="bg-rose-500 text-white px-5 py-3 border rounded hover:bg-rose-600">Register</a>
                    <a href="/cart" className="bg-gray-200 text-white px-5 py-3 border rounded-full hover:bg-gray-300">🛒</a>
                </span>
            </div>
        </>
    )
}