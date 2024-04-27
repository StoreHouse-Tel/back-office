import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

function ContainerList() {
  return (
    <>

            <div className='p-4 border border-pink-800 rounded-lg my-3 flex justify-between gap-5'>
                <div>
                    <h2>Container Name</h2>
                    <p>Unit Name</p>
                    <p>Quantity</p>
                    <p>Threshold</p>
                    <p>Populator Current Percentage</p>
                </div>

                <div className='flex space-x-2'>
                    <RemoveBtn />
                    <Link className='bg-green-500 text-white p-2 rounded-lg' href='/orders/editOrder/123'>
                        <HiPencilAlt className='flex items-center justify-center bg-center' size={24}/>
                    </Link>
                </div>
            </div>
            
        </>
  )
}

export default ContainerList