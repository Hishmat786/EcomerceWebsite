import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header';
function ProductsDetails() {
    const location = useLocation()
    const product = location.state;
    return (
    <div>
        <Header/>
        <div key={product.id} className='flex flex-col  w-56 h-80 overflow-hidden  hover:cursor-pointer  '>
            <div className='flex-shrink-0 mt-3'>
              <img src={product.image} className='w-full h-40 object-contain transform transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50' />
            </div>
            <div className='flex flex-col items-start p-3'>
              <h1 className='text-sm mt-1 w-full truncate'>{product.title}</h1>
              <p className='text-xs text-red-400'>{product.category}</p>
              <p className='font-bold text-sm'>{product.price}$</p>
              <p className='bg-green-500  rounded-3xl w-14 text-center'>{product.rating.rate}⭐</p>
              <div className='mt-2 mb-1 w-full'>
                <button className='p-2 mt-auto w-full rounded-3xl font-bold text-white bg-slate-600'>Add To Cart</button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ProductsDetails
