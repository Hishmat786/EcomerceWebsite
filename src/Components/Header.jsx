import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
    const NavItems = [
        { name: 'Home', href: '#' },
        { name: 'Products', href: '#' },
        { name: 'Latest', href: '#' },
        { name: 'Contacts', href: '#' },
    ]
    return (
        <>
            <nav className="flex justify-around flex-row bg-gray-800 text-white p-2 ">
                <div className="flex center space-x-2">
                    <img src="src/assets/logo.png" className='w-10  ' />
                    <h2 className='text-4xl'>DraShop</h2>
                </div>

                <ul className='flex justify-start space-x-6 list-none px-3 py-2 text-xl'>
                    {NavItems.map((item, index) => (
                        <li key={index} className='transition-transform transform hover:scale-110'>
                            <a href={item.href} className='no-underline hover:'> {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-row my-1">
                    <div className="flex flex-row my-1 items-center relative">
                        <i className="fas fa-search absolute left-3 mx-1 text-gray-400"></i>
                        <input
                            type="text"
                            placeholder="Find Product"
                            className="rounded-xl pl-10 pr-2 py-2 mx-2 border border-gray-300 text-black w-full"
                        />
                    </div>
                    <i className='fas fa-shopping-cart py-2 mx-3 text-3xl hover:cursor-pointer' ></i>
                </div>

            </nav>
        </>
    )
}

export default Header

