import axios from "axios"

interface NewData {
    id: number,
    image: string,
    date: number,
    price: number,
    name: string,
    description: string
}

export const getAllProducts = async (Base_Url: string) => {
    const res = await fetch(Base_Url)
    const jsonData = await res.json()
    return jsonData
}

export const getProductByID = async (Base_Url: string, id: number) => {
    const res = await fetch(`${Base_Url}/${id}`, {
        next: {
            revalidate: 10
        }
    })
    const jsonData = await res.json()
    return jsonData
}

export const deleteProductByID = async (Base_Url: string, id: number) => {
    const res = await fetch(`${Base_Url}/${id}`, {
        method: "Delete"
    })
    const jsonData = await res.json()
    return jsonData
}

///Axiosla

export const addNewProductWithAxios = async (Base_Url: string,newData:NewData) =>{
    const res = await axios.post(`${Base_Url}`,newData)
    return res.data
}

///Fetchle
export const addNewProduct = async (Base_Url: string, newData: NewData) => {
    try {
        const res = await fetch(`${Base_Url}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData)
        })
        const jsonData = await res.json()
        return jsonData
    } catch (error) {
        console.log(error);
    }
}