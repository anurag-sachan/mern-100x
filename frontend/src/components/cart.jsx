import {useRecoilValue} from 'recoil';
import { cartAtom } from '../atoms/cartAtom';

export default function Cart(){
    const cart = useRecoilValue(cartAtom);

    return(
        <div className="bg-gray-100 p-6">
        <div className='text-center text-2xl text-black pb-12 pt-8 sm:pt-auto'>Cart</div>
        <div className="max-w-4xl mx-auto">
        <div>
            {cart.map(x=>(
            <div className="flex p-4 m-2 justify-between bg-white shadow-lg rounded-lg items-center">
                <h3 className="px-5 py-2 text-xl text-gray-900">{x.title}</h3>
                <span className="flex justify-between items-center space-x-4">
                    <span className="px-5 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-full">₹{x.price}</span>
                    <span><button className="bg-gray-400 text-white px-5 py-2 border rounded hover:bg-black">X</button></span>
                </span>
            </div>
            ))}
            </div>
        </div>
        
    </div>
    )
}