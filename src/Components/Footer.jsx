import React from 'react'
const NavItems = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Latest', href: '#' },
    { name: 'Contacts', href: '#' },
]
const social = [
    { name: 'fb', src: 'src/assets/icons/ico/fb.png' },
    { name: 'yt', src: 'src/assets/icons/ico/youtube.png' },
    { name: 'insta', src: 'src/assets/icons/ico/insta.png' },
    { name: 'tw', src: 'src/assets/icons/ico/twiter.png' },
    { name: 'gmail', src: 'src/assets/icons/ico/gmail.png' }
]

function Footer() {
    return (
        <div className='w-full h-64 bg-slate-800 flex flex-col items-center'>
            <div className='text-5xl text-white mt-3 font-edu'>DraShop</div>
            <div className='w-2/3 text-xl mt-2 text-white '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore enim, rem beatae facilis facere non consequatur laudantium tempora eligendi nisi molestias.</div>
            <div className='flex flex-row gap-6 mt-2 justify-start space-x-6 list-none px-3 py-2 text-xl'>
                {
                    social.map((item, index) => (
                        <li key={index} className='w-8 h-8 overflow-hidden  '>
                            <img src={item.src} alt=""  className='w-full h-full bg-white object-cover aspect-[3/2]  translate transition-transform scale-105 hover:cursor-pointer'/>
                        </li>
                    ))
                }
            </div>
            <div className='flex flex-row gap-6 mt-2 justify-start space-x-6 list-none px-3 py-2 text-xl'>
            <ul className='flex justify-start space-x-6 list-none px-3 py-2 text-xl'>
                    {NavItems.map((item, index) => (
                        <li key={index} className=' text-white  transition-transform transform hover:scale-110'>
                            <a href={item.href} className='underline hover:'> {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Footer
