import { useEffect, useState } from "react"
import { useRecoilState } from 'recoil';
import {cartAtom} from '../atoms/cartAtom'

interface Course{
    title: string,
    desc: string,
    lang: string[],
    price: number
}

interface CartItem{
    title: string,
    quantity: number,
    price: number
}

export default function Courses(){
    const [courses, setCourses] = useState<Course[]>([])

    const base_url = 'http://localhost:3001';

    useEffect(()=>{
        fetch(`${base_url}`)
        .then(res=>res.json())
        .then(data =>setCourses(data))
    },[])

    const [cart, setCart] = useRecoilState<CartItem[]>(cartAtom);

    const addToCart = (x:Course) => {
        const itemToAdd = { ...x, quantity: 1 };
    
        setCart(prevCart => {
            const itemIndex = prevCart.findIndex(item => item.title === itemToAdd.title);
    
            if (itemIndex !== -1) {
                const cartCopy = [...prevCart];
                cartCopy[itemIndex] = {...cartCopy[itemIndex], quantity: cartCopy[itemIndex].quantity + 1};
                return cartCopy;
            } else {
                return [...prevCart, itemToAdd];
            }
        });
    };

    return(
        <div className="bg-gray-200 p-6 pt-24 min-h-screen">
        <div className='text-center text-2xl text-black pb-12 pt-8 sm:pt-auto'>Courses</div>
        <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {courses.map(x=>{
            const cartItem= cart.find(i => i.title === x.title);
            const quantity= cartItem? cartItem.quantity : 0;

                return(
                    <div className="bg-white shadow-lg rounded-lg transition ease-in-out hover:scale-105 duration-200 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                            <h3 className="text-xl font-semibold text-gray-900">{x.title}</h3>
                            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Public</span>
                        </div>
                        <div className="px-6 py-4">
                            <p className="text-gray-700 text-base">
                            {x.desc}
                            </p>
                        </div>
                        <div className="px-6 py-4 text-gray-700 border-t">
                            ₹ {x.price}
                        </div>
                        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between text-sm">
                            <div className="flex items-center">
                                <span className="inline-block w-3 h-3 rounded-full bg-gray-400 mr-2"></span>
                                <span className="text-gray-700">{x.lang.join(', ')}</span>
                            </div>
                            {/* <div> */}
                            <div className="relative">
                                <button className="bg-blue-500 text-white px-5 py-2 border rounded hover:bg-blue-600" onClick={() => addToCart(x)}>ADD TO CART</button>
                                {/* <span className=" -ml-4 -mt-1 bg-blue-500 text-white px-4 py-3 border rounded-full hover:bg-blue-600">2</span> */}
                                {quantity > 0 && (<span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-sm bg-blue-500 text-white px-3 py-1 border rounded-full hover:bg-blue-600">{quantity}</span>)}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
        </div>
    )
}