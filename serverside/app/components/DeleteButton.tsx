"use client"
import { deleteProductByID } from '../services/productService';

interface DeleteButtonProps {
    id: number;
    url: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, url }) => {

    const handleDelete = async () => {
        try {
            await deleteProductByID(url,id)
            console.log("Alindi");
            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <li className='text-red-600 cursor-pointer' onClick={handleDelete}>Delete</li>
    )
}

export default DeleteButton