'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

type Container = {
  _id: string;
  name: string;
  unit: string;
  maxCapacity: number;
  quantity: number;
  threshold: number;
  
};

function EditContainerForm({_id, name, unit, maxCapacity, quantity, threshold}: Container) {
  const [container , setContainer] = useState<Container>({_id,name, unit, maxCapacity, quantity, threshold});

  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/containers/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: container.name,
          unit: container.unit,
          maxCapacity: container.maxCapacity,
          quantity: container.quantity,
          threshold: container.threshold
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update container");
      }
      alert("Container updated successfully");
      router.push("/containers");
    } catch (error) {
      console.error(error);
    }
    }
  return (
    
    <form onSubmit={handleSubmit} className='flex flex-col space-y-2'>
      <p>Name</p>
    <input value={container.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContainer({...container, name: String (e.target.value)})} type="text" placeholder='Name'  className='border border-pink-300 rounded-lg px-8 py-2'/>
    <p>Unit</p>
    <input value={container.unit} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContainer({...container, unit:String( e.target.value)})} type="text" placeholder='Unit'  className='border border-pink-300 rounded-lg px-8 py-2'/>
    <p>Max Capacity</p>
    <input value={container.maxCapacity} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContainer({...container, maxCapacity: Number(e.target.value)})} type="number" placeholder='Max capacity'  className='border border-pink-300 rounded-lg px-8 py-2'/>
   <p>Quantity</p>
    
    <input value={container.quantity} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContainer({...container, quantity: Number(e.target.value)})} type="number" placeholder='Quantity'  className='border border-pink-300 rounded-lg px-8 py-2'/>
    <p>Threshold</p>
    <input  value={container.threshold} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContainer({...container, threshold: Number(e.target.value)})} type="number" placeholder='Threshold'  className='border border-pink-300 rounded-lg px-8 py-2'/>


    <button className='text-white font-bold uppercase bg-green-500 rounded-lg p-2'>Update Container</button>
    </form> 
  )
}

export default EditContainerForm