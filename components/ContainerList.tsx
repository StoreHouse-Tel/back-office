import React, { useState } from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'


const getContainers = async () => {
    try {
       const response = await fetch('http://localhost:3000/api/containers', {
            
            cache: 'no-cache',
        })
        if(!response.ok) {
            throw new Error('Failed to fetch')
        }

        return response.json()
    } catch (error) {
        console.log("Error loading containers: ", error)
    }
}
type Container = {
    _id: string
    name: string
    unit: string
    maxCapacity: number
    quantity: number
    threshold: number
    populatorCurrentPercentage: number
}

async function ContainerList(): Promise<JSX.Element> {

    const  containers : Container[] = await getContainers();
    console.log(containers)

  return (
    <>
        {containers && containers.map((container: Container) => (
            <div key={container._id} className='p-4 border border-pink-800 rounded-lg my-3 flex justify-between gap-5'>
                <div>
                    <h2>Name: <span className='text-pink-500 font-bold'>{container.name} </span></h2>
                    <p>Unit: <span className='text-pink-500 font-bold'>{container.unit} </span></p>
                    <p>Max Capacity: <span className='text-pink-500 font-bold'>{container.maxCapacity}</span></p>
                    <p>Current Quantity: <span className='text-pink-500 bold font-bold'>{container.quantity}</span> </p>
                    <p>Threshold Alert: <span className='text-pink-500 font-bold'>{container.threshold} %</span></p>
                    <p>Current Threshold: <span className='text-pink-500 font-bold'>{container.populatorCurrentPercentage} %</span></p>
                </div>
                <div className='flex space-x-2'>
                    <RemoveBtn name={container.name}/>
                    <Link className='bg-green-500 text-white p-2 rounded-lg' href={`/containers/editContainer/${container._id}`}>
                        <HiPencilAlt className='flex items-center justify-center bg-center' size={24}/>
                    </Link>
                </div>
                </div>))
                || <p>No containers</p>}
        
        </>
  )
}

export default ContainerList