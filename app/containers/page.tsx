import React from 'react'
import Link from 'next/link'
import ContainerList from '@/components/ContainerList'

function Containers() {
  return (
    <div>

    <Link href='/containers/createContainer' className='text-white font-bold uppercase bg-green-500 rounded-lg p-2'>Create Container</Link>
    <ContainerList />
    </div>
  )
}

export default Containers