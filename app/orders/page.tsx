

import Link from 'next/link'
import React from 'react'
import OrderLists from '@/components/OrderLists'

function Orders() {
  return (
    <div>
        <div>
            <Link href="/orders/createOrder" className='text-white font-bold uppercase bg-green-500 rounded-lg p-2'>Create Order</Link>
        </div>
        <p>Orders</p>
        <div>
        <OrderLists />
        <OrderLists />
        <OrderLists />
        <OrderLists />
        </div>
    </div>
   
  )
}

export default Orders