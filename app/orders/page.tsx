

import Link from 'next/link'
import React from 'react'

import OrderList from '@/components/OrderList'

function Orders() {
  return (
    <div>
        <div>
            <Link href="/orders/createOrder" className='text-white font-bold uppercase bg-green-500 rounded-lg p-2'>Create Order</Link>
        </div>
        
        <div>
        <OrderList />
        
        </div>
    </div>
   
  )
}

export default Orders