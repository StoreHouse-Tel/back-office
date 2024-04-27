import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='flex justify-between items-center py-4 px-3 bg-pink-600 rounded-lg mb-3'>

            <Link className=' text-white font-bold uppercase  bg-black rounded-lg p-2' href='/'>Home</Link>
            <Link className='text-white font-bold uppercase  bg-black rounded-lg p-2' href='/orders'>Orders</Link>
            <Link className='text-white font-bold uppercase bg-black rounded-lg p-2' href='/containers'>Containers</Link>
        </nav>
    )
}

export default Navbar