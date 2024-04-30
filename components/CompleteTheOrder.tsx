"use client"

import { useRouter } from 'next/navigation';
const getContainers = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/containers', {

            cache: 'no-cache',
        })
        if (!response.ok) {
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
 function CompleteTheOrder(order: { name: string, quantity: number }) {
    const router = useRouter();
    const completeOrder = async () => {

        const containers: Container[] = await getContainers();
        const container = containers.find((container) => container.name === order.name);
        if (!container) {
            throw new Error('Container not found');
        }
        const confirmed = confirm("Are you sure you want to complete this order?");
        if (confirmed) {
            try {
                const response = await fetch(`http://localhost:3000/api/containers/${container._id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        quantity: container.quantity + order.quantity,
                    }),
                });
                if (response.ok) {
                    
                    await removeOrder();
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
    const removeOrder = async () => {
        try {
            const response = await fetch(`http://localhost:8085/orders/remove/${order.name}`, {
                method: "DELETE",
            });

            if (response.ok) {
                alert("Order deleted successfully");
                router.refresh();
            }
        } catch (error) {
            console.error(error);
        }
    }


return (
    <button onClick={completeOrder} className='text-white font-bold uppercase bg-green-500 rounded-lg p-2'>Complete The Order</button>
);
};

export default CompleteTheOrder