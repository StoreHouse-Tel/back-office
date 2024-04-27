import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

function RemoveBtn() {
  return (
    <button className='bg-red-500 text-white p-2 rounded-lg'>
        <HiOutlineTrash size={24}/>
    </button>

  )
}

export default RemoveBtn