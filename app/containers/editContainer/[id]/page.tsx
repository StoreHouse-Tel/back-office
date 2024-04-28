
import React from 'react'
import EditContainerForm from '@/components/EditContainerForm'

const getContainerById = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/containers/${id}`, {
      cache: 'no-cache',
    })
    if (!response.ok) {
      throw new Error('Failed to fetch')
    }
    return response.json()
    
  } catch (error) {
    console.log("Error loading container: ", error)
  }
}

export default async function EditConainer({params}: {params: {id: string}}): Promise<JSX.Element> {
  const {id} = params
  console.log("id: ", id)
  const container = await getContainerById(id)
  const { name, unit, maxCapacity, quantity, threshold } = container.getContainer
  console.log(name)
  
  return (
    <EditContainerForm _id={id} name={name} unit={unit} maxCapacity={maxCapacity} quantity={quantity} threshold={threshold}  />
  )
}
