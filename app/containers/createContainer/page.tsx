"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation';

function CreateContainer() :JSX.Element {
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [maxCapacity, setMaxCapacity] = useState("");
  const [quantity, setQuantity] = useState("");
  const [threshold, setThreshold] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/containers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          unit,
          maxCapacity,
          quantity,
          threshold
        }),
      });
      const data = await response.json();

      if (response.ok) {
        alert("Container created successfully");
        router.push("/containers")
      } else {
        throw new Error("Failed to create container");
      }
      console.log(data);
    } catch (error) {

      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col space-y-2'>

      <input required value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} type="text" placeholder='Container Name' className='border border-pink-300 rounded-lg px-8 py-2' />
      <input required value={unit} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUnit(e.target.value)} type="text" placeholder='Unit' className='border border-pink-300 rounded-lg px-8 py-2' />
      <input required value={maxCapacity} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMaxCapacity(e.target.value)} type="number" placeholder='Max capacity' className='border border-pink-300 rounded-lg px-8 py-2' />
      <input required value={quantity} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantity(e.target.value)} type="number" placeholder='Quantity' className='border border-pink-300 rounded-lg px-8 py-2' />
      <input required value={threshold} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setThreshold(e.target.value)} type="number" placeholder='Threshold' className='border border-pink-300 rounded-lg px-8 py-2' />

      <button type="submit" className='text-white font-bold uppercase bg-green-500 rounded-lg p-2'>Create Container</button>


    </form>
  )
}

export default CreateContainer