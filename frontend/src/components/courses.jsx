import { useEffect, useState } from "react"

export default function Courses(){
    const [courses, setCourses] = useState([])

    const base_url = 'http://localhost:3001';

    useEffect(()=>{
        fetch(`${base_url}`)
        .then(res=>res.json())
        .then(data =>setCourses(data))
    },[])

    return (
        <div className="bg-gray-100 p-6">
        <div className='text-center text-2xl text-black pb-12 pt-8 sm:pt-auto'>Courses</div>
        <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {courses.map(x=>
            <div className="bg-white shadow-lg rounded-lg transition ease-in-out hover:scale-105 duration-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-900"><a href='https://github.com/anurag-sachan/Fullstack-SpringBoot-React-Store' target='_blank' rel='noreferrer'>{x.title}</a></h3>
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
                        <span className="inline-block w-3 h-3 rounded-full bg-yellow-600 mr-2"></span>
                        <span className="text-gray-700">{x.lang.join(', ')}</span>
                    </div>
                    <div>
                        <button className="bg-blue-500 text-white px-5 py-2 border rounded hover:bg-blue-600">BUY</button>
                    </div>
                </div>
            </div>
            )}
            </div>
        </div>
    </div>
  )
}