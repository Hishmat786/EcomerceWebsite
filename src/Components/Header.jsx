import React from 'react'

function Header() {
   const NavItems=[
    {
        name:'Home',
        href:'#'
    },
    {
        name:'Products',
        href:'#'
    },
    {
        name:'Contacts',
        href:'#'
    },
   ]
  return (
    <>
    <nav className="flex justify-between flex-row bg-gray-800 text-white p-2 ">
        <div className="flex center space-x-2">
            <img src="src/assets/logo.png" className='w-10 '/>
            <h2 className='text-xl'>DraShop</h2>
        </div>

        <ul className='flex space-x-6 list-none px-3'>
            {NavItems.map((item,index)=>(
                <li key={index} className='transition-transform transform hover:scale-110'>
                    <a href={item.href} className='no-underline hover:'> {item.name}
                    </a>
                </li>
            ))}
        </ul>    
  
    </nav> 
    </>
  )
}

export default Header

