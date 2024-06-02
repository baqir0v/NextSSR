import React from 'react'
import { getAllProducts } from '../services/productService'
import Link from 'next/link'
import DeleteButton from '../components/DeleteButton'

interface Item {
    id: number,
    image: string,
    date: number,
    price: number,
    // name:string,
    // description:string
}

const Products = async () => {
    const baseUrl = "https://6655a02d3c1d3b60293a623f.mockapi.io/transaction"
    const allProducts = await getAllProducts(baseUrl)

    return (
        <div className='w-full'>
            <h1 className='mr-auto ml-auto w-[100px]'>Products</h1>
            <div className='grid grid-cols-4 justify-items-center gap-y-5'>
                {allProducts?.map((item: Item) => (
                    <ul key={item.id}>
                        <li>{item.id})</li>
                        {/* <li>{item.name}</li>
                        <li className='max-w-xs'>{item.description}</li> */}
                        <li><img src={item.image} alt="" style={{ width: "100px" }} /></li>
                        <li>Date:{item.date}</li>
                        <li>Price:{item.price}</li>
                        <li><Link href={`/products/${item.id}`}>Details</Link></li>
                        <DeleteButton id={item.id} url={baseUrl} /> 
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default Products