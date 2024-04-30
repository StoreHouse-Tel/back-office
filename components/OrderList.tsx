import Link from "next/link"
import { HiPencilAlt } from "react-icons/hi"
import RemoveBtnOrder from "./RemoveBtnOrder"
import CompleteTheOrder from "./CompleteTheOrder"



const getOrders = async () => {
    try {
       const response = await fetch('http://localhost:8085/orders', {
            method: 'GET',
            cache: 'no-cache',
        })
        if(!response.ok) {
            throw new Error('Failed to fetch')
        }

        return response.json()
    } catch (error) {
        console.log("Error loading orders: ", error)
    }
}
type Order = {
    _id: string
    containerName: string
    quantity: number
}
async function OrderList(): Promise<JSX.Element> {

    const orders: Order[] = await getOrders();
    console.log(orders)

  return (
    <>
        {orders && orders.map((order: Order) => (
            <div key={order._id} className='p-4 border border-pink-800 rounded-lg my-3 flex justify-between gap-5'>
                <div>
                    <h2>Container: <span className='text-pink-500 font-bold'>{order.containerName} </span></h2>
                    
                    <p>Order Quantity: <span className='text-pink-500 bold font-bold'>{order.quantity}</span> </p>
                    
                </div>
                <div className='flex space-x-2'>
                    <CompleteTheOrder name={order.containerName} quantity={order.quantity}/>
                    <RemoveBtnOrder name={order.containerName}/>
                    <Link className='bg-green-500 text-white p-2 rounded-lg' href={`/oreders/editOrder/${order._id}`}>
                        <HiPencilAlt className='flex items-center justify-center bg-center' size={24}/>
                    </Link>
                </div>
                </div>))
                || <p>No Orders</p>}
        
        </>
  )
}

export default OrderList