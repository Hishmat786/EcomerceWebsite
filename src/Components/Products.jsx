import React, { useEffect, useState } from 'react'

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => {
        const firstTwentyProducts = json.slice(0, 20);
        setProducts(firstTwentyProducts);
      })
      .catch(err => console.log(err));
  }, []);

  function pTitle(t) {
    console.log(t)
    console.log("thek")
    console.log(t.split(' ').slice(0, 2).join(' '))

    return t.split(' ').slice(2).join(' ')
  }
  return (
    <div className='flex flex-col '>
      <div className="font-sans">
        <h1 className='text-4xl font-edu font-bold ml-16 text-center'>Featured Products</h1>
      </div>
      <div className='flex flex-row flex-wrap gap-7 mt-8 p-11'>
        {products.map((product) => (
          <div key={product.id} className='flex flex-col border border-black rounded-2xl w-56 h-80 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-lg hover:shadow-blue-500/50'>
            <div className='flex-shrink-0 mt-3'>
              <img src={product.image} className='w-full h-40 object-contain' />
            </div>
            <div className='flex flex-col items-start p-3'>
              <h1 className='text-sm mt-1 w-full truncate'>{product.title.split(' ').slice(2).join(' ')}</h1>
              <p className='text-xs text-red-400'>{product.category}</p>
              <p className='font-bold text-sm'>{product.price}$</p>
              <div className='mt-3 w-full'>
                <button className='p-2 mt-auto w-full rounded-3xl font-bold text-white bg-slate-600'>Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products

