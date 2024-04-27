import React from 'react'

function EditOrderForm() {
  return (
    <form className='flex flex-col space-y-2'>
    <input type="text" placeholder='Container Name'  className='border border-pink-300 rounded-lg px-8 py-2'/>
    <input type="number" placeholder='Quantity'  className='border border-pink-300 rounded-lg px-8 py-2'/>

    <button className='text-white font-bold uppercase bg-green-500 rounded-lg p-2'>Update order</button>
    </form>  
  )
}

export default EditOrderForm