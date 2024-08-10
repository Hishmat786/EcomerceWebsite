import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header';
import TestMonial from './TestMonial';
import About from './About';
import Footer from './Footer';
function ProductsDetails() {
    const [productcount, setProductCount] =useState(0)
    const location = useLocation()
    const product = location.state;

    function decProduct(){
        if(productcount > 0){
            setProductCount(productcount-1)
        }else{
            alert('Add product')
        }
    }
    function addProduct(){
        setProductCount(productcount+1)
    }
    return (
    <div>
        <Header/>
        <div key={product.id} className='flex flex-row m-10 gap-10    hover:cursor-pointer  '>
            <div className='flex-shrink-0 mt-3'>
              <img src={product.image} className='w-full h-64 object-contain transform transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50' />
            </div>
            <div className='flex flex-col gap-4 items-start p-3 h-64'>
              <h1 className='text-2xl mt-1 w-full font-bold '>{product.title}</h1>
              <p className='text-s font-serif '>{product.description}</p>
              <p className='text-xl text-red-400 '>{product.category}</p>
              <p className='text-sm font-bold '>{product.price}$</p>
              <p className='bg-green-500  rounded-3xl w-14 text-center'>{product.rating.rate}⭐</p>
              <div className='flex flex-row  '>
                <p className='w-10 h-10 flex items-center justify-center text-2xl border border-slate-400' onClick={decProduct}> -</p>
                <p className='w-10 h-10 flex items-center justify-center text-2xl border border-slate-400'>{productcount}</p>
                <p className='w-10 h-10 flex items-center justify-center text-2xl border border-slate-400' onClick={addProduct}>+</p>
              </div>
              <div className='mt-2 mb-1 w-full'>
                <button className='p-2 mt-auto w-56 rounded-3xl font-bold text-white bg-slate-600'>Add To Cart</button>
              </div>
            </div>
        </div>
        <About/>
        <Footer/>
    </div>
  )
}

export default ProductsDetails
