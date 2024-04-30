"use client"

import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from 'next/navigation';

function RemoveBtnOrder({name}: {name: string}): JSX.Element {
  const router = useRouter();
    const removeOrder = async () => {
      const confirmed = confirm("Are you sure you want to delete this order?");
      if(confirmed) {
        try {
          const response = await fetch(`http://localhost:8085/orders/remove/${name}`, {
            method: "DELETE",
          });
          
          if(response.ok) {
            alert("Order deleted successfully");
            router.refresh();
          }
        } catch (error) {
          console.error(error);
        }
    }
  }


  return (
    <button onClick={removeOrder} className='bg-red-500 text-white p-2 rounded-lg'>
        <HiOutlineTrash size={24}/>
    </button>

  )
}

export default RemoveBtnOrder;