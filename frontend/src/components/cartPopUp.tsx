import { useRecoilValue } from 'recoil';
import { cartAtom } from '../atoms/cartAtom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

interface CartItem{
    title: string,
    quantity: number,
    price: number
}

export default function CartPopUp() {
    const cart = useRecoilValue<CartItem[]>(cartAtom);
    const [showCart, setShowCart] = useState(false);
    
    let total = 0;
    cart.forEach(x => {
        total += (x.price * x.quantity);
    });
    
    const location = useLocation();
    if (location.pathname === '/cart') {
        return null;
    }

    return (
        <div className="relative">
            <div onMouseEnter={() => setShowCart(true)} onMouseLeave={() => setShowCart(false)} className="bg-gray-300 text-black cursor-pointer px-5 py-3 border rounded-full hover:bg-gray-300">🛒</div>
            {showCart && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10" onMouseEnter={() => setShowCart(true)} onMouseLeave={() => setShowCart(false)}>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-center border-b p-2">Cart</h3>
                        <div className="divide-y divide-gray-200">
                            {cart.length === 0 ? (<div className="text-center text-gray-500 py-4">Cart is empty</div>) : 
                            (
                                cart.map(x => (
                                    <div className="py-2 flex justify-between items-center space-x-4">
                                        <span className="text-gray-700">{x.title}</span>
                                        <span className="text-gray-700">x{x.quantity}</span>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="pt-4 flex justify-between items-center font-semibold border-t">
                            <span>Total:</span>
                            <span>₹{total}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
