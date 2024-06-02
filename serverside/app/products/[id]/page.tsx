import { getProductByID } from '@/app/services/productService'
import React from 'react'

interface Params {
    id: number,
}

const Details = async ({ params }: { params: Params }) => {
    const baseUrl = "https://6655a02d3c1d3b60293a623f.mockapi.io/transaction"
    const getByID = await getProductByID(baseUrl, params.id)
    return (
        <div>
            <div className='grid grid-cols-4 gap-y-5'>
                <ul>
                    <li>{getByID.id})</li>
                    {/* <li>Date:{getByID.name}</li>
                    <li>Date:{getByID.description}</li> */}
                    <li><img src={getByID.image} alt="" style={{ width: "100px" }} /></li>
                    <li>Date:{getByID.date}</li>
                    <li>Price:{getByID.price}</li>
                </ul>
            </div>
        </div>
    )
}

export default Details