import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

function OrderLists() {
    return <>

            <div className='p-4 border border-pink-800 rounded-lg my-3 flex justify-between gap-5'>
                <div>
                    <h2>Order Title</h2>
                    <p>Order Description</p>
                </div>

                <div className='flex space-x-2'>
                    <RemoveBtn />
                    <Link  href='/orders/editOrder/123'>
                        <HiPencilAlt className='bg-green-500 text-white p-2 rounded-lg' size={50}/>
                    </Link>
                </div>
            </div>
            
        </>
}

export default OrderLists