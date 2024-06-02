// import React, { useState } from 'react'
// import { addNewProduct } from '../services/productService'

// interface NewData {
//   id: number
//   image: string
//   date: string
//   price: number,
// }

// const AddProductForm: React.FC = () => {
//   const [product, setProduct] = useState<NewData>({ id: 0, image: '', date: '', price: 0 })
//   const [message, setMessage] = useState<string>('')

//   const baseUrl = "https://6655a02d3c1d3b60293a623f.mockapi.io/transaction"

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     try {
//       const newProduct = await addNewProduct(baseUrl, product)
//       console.log('Product added:', newProduct)
//       setMessage('Product added successfully!')
//       // Optionally, reset the form
//       setProduct({ id: 0, image: '', date: '', price: 0 })
//     } catch (error) {
//       console.error('Failed to add product:', error)
//       setMessage('Failed to add product.')
//     }
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setProduct(prevProduct => ({ ...prevProduct, [name]: value }))
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="number"
//           name="id"
//           value={product.id}
//           onChange={handleChange}
//           placeholder="ID"
//           required
//         />
//         <input
//           type="text"
//           name="image"
//           value={product.image}
//           onChange={handleChange}
//           placeholder="Image URL"
//           required
//         />
//         <input
//           type="text"
//           name="date"
//           value={product.date}
//           onChange={handleChange}
//           placeholder="Date"
//           required
//         />
//         <input
//           type="number"
//           name="price"
//           value={product.price}
//           onChange={handleChange}
//           placeholder="Price"
//           required
//         />
//         <button type="submit">Add Product</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   )
// }

// export default AddProductForm
