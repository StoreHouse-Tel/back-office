"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation';

type Order = {
  
  containerName: string
  quantity: number
 
}
function CreateOrder() :JSX.Element {
  
  const [containerName, setContainerName] = useState("");
  
  const [quantity, setQuantity] = useState(0);
 

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8085/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         containerName,
          
          quantity,
          
        }),
      });
      const data = await response.json();

      if (response.ok) {
        alert("Order created successfully");
        router.push("/Orders")
      } else {
        throw new Error("Failed to create Order");
      }
      console.log(data);
    } catch (error) {

      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col space-y-2'>

      <input required value={containerName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContainerName(e.target.value)} type="text" placeholder='Conatiner Name' className='border border-pink-300 rounded-lg px-8 py-2' />
      <input required value={quantity} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantity(+e.target.value)} type="number" placeholder='Quantity' className='border border-pink-300 rounded-lg px-8 py-2' />

      <button type="submit" className='text-white font-bold uppercase bg-green-500 rounded-lg p-2'>Create Order</button>


    </form>
  )
}

export default CreateOrder