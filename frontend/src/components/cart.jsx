import {useRecoilState, useRecoilValue} from 'recoil';
import { cartAtom } from '../atoms/cartAtom';

export default function Cart(){
    // const cart = useRecoilValue(cartAtom);
    const [cart, setCart] = useRecoilState(cartAtom)

    let total = 0;
    cart.forEach(x => {
        total += (x.price * (x.quantity || 1));
    });
    
    function decQuantity(index) {
        const cartCopy = [...cart];
        if(cartCopy[index].quantity === 1){
            removeFromCart(index);
            return;
        }
        cartCopy[index] = {...cartCopy[index], quantity: (cartCopy[index].quantity -1)};
        setCart(cartCopy);
    }

    function incQuantity(index){
        const cartCopy = [...cart];
        cartCopy[index] = {...cartCopy[index], quantity: (cartCopy[index].quantity +1)};
        setCart(cartCopy);
    }

    function removeFromCart(index){
        setCart(prevCart =>{
            const cartCopy = [...prevCart];
            cartCopy.splice(index,1);
            return cartCopy;
        })
    }
    
    return(
        <div className="bg-gray-200 p-6 pt-24 min-h-screen">
        <div className='text-center text-2xl text-black pb-12 pt-8 sm:pt-auto'>Cart</div>
        <div className="max-w-4xl mx-auto">
        <div>
            {cart.map((x,index)=>(
            <div className="flex p-4 m-2 justify-between bg-white shadow-lg rounded-lg items-center">
                <h3 className="px-5 py-2 text-gray-900">{x.title}</h3>
                <span className="flex justify-between items-center space-x-4 text-sm">
                    <span className="px-5 py-2 bg-green-100 text-green-800 font-medium rounded-full">₹{x.price}</span>
                    <span>
                        <button onClick={()=>decQuantity(index)} className="bg-gray-400 text-white px-5 py-2 border rounded-full hover:bg-black">-</button>
                        <span className='p-2'>{x.quantity || 1}</span>
                        <button onClick={()=>incQuantity(index)} className="bg-gray-400 text-white px-5 py-2 border rounded-full hover:bg-black">+</button>
                    </span>
                    <span><button onClick={()=>removeFromCart(index)} className="bg-rose-500 text-white px-5 py-2 border rounded-full hover:bg-rose-600">X</button></span>
                </span>
            </div>
            ))}
            </div>
            <div className="flex p-4 m-2 justify-between bg-black text-white shadow-lg rounded-lg items-center font-semibold text-xl">
                <h3 className="px-5 py-2">TOTAL :</h3>
                <span className="flex justify-between items-center space-x-4"> ₹{total} </span>
            </div>
            <span className='flex justify-end'><button className='p-4 m-2 justify-end bg-green-500 hover:bg-green-600 text-white shadow-lg rounded-lg items-center font-semibold'>MAKE PAYMENT</button></span>
        </div>
        
    </div>
    )
}