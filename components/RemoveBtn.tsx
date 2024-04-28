"use client"

import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from 'next/navigation';

function RemoveBtn({name}: {name: string}) {
  const router = useRouter();
    const removeContainer = async () => {
      const confirmed = confirm("Are you sure you want to delete this container?");
      if(confirmed) {
        try {
          const response = await fetch(`http://localhost:3000/api/containers?name=${name}`, {
            method: "DELETE",
          });
          
          if(response.ok) {
            alert("Container deleted successfully");
            router.refresh();
          }
        } catch (error) {
          console.error(error);
        }
    }
  }


  return (
    <button onClick={removeContainer} className='bg-red-500 text-white p-2 rounded-lg'>
        <HiOutlineTrash size={24}/>
    </button>

  )
}

export default RemoveBtn;