import React from 'react'

function Home() {
  return (
    <div className='flex flex-row justify-around'>
      <div className='grid place-items-center items-center bg-gradient-to-r text-black p-10 my-12 '>
        <div className='text-center'>

        <h2 className='text-3xl text-red-500 font-semibold mb-2'>40% Discount</h2>
        <h1 className='text-5xl font-bold mb-1'>Special Summer</h1>
        <h1 className='text-5xl font-bold mb-4'>Collection</h1>
        <p className='text-xl font-light'>Best Collection Of 2024</p>
        </div>
      </div>
      <div>
        <img src="src/assets/sale.png" alt="" />
      </div>
       
    </div>
  )
}

export default Home
