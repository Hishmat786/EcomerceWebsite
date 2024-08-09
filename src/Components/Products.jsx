import React from 'react'

function Products() {
  return (
    <div className='flex flex-col '>
        <div className="font-sans">
            <h1 className='text-4xl font-edu font-bold ml-16 text-center'>Featured Products</h1>
        </div>
        <div className='flex flex-row flex-wrap gap-7 mt-8 p-11'>
            <div className='flex flex-col border-black'>
                <div>
                    <img src="src/assets/show.jpg" alt="" className='w-48 h-56' />
                </div>
                <div className='flex flex-col items-start ml-3'>
                    <h1 className='text-xl mt-3'>DNK Yellow Shoes</h1>
                    <p className='text-s text-red-400'>Men</p>
                    <p className='font-bold'>1500$</p>
                    <button className='p-2 mt-3 rounded-3xl font-bold text-white bg-slate-600'>Add To Cart</button>
                </div>
            </div>
            <div className='flex flex-col border-black'>
                <div>
                    <img src="src/assets/show.jpg" alt="" className='w-48 h-56' />
                </div>
                <div className='flex flex-col items-start ml-3'>
                    <h1 className='text-xl mt-3'>DNK Yellow Shoes</h1>
                    <p className='text-s text-red-400'>Men</p>
                    <p className='font-bold'>1500$</p>
                    <button className='p-2 mt-3 rounded-3xl font-bold text-white bg-slate-600'>Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products

