import { IProduct } from "@/types/products";

interface IResponse {
    products: IProduct[]
    count: number
}
export const getProducts = async (page: number, rows: number = 10)=>{
    const res = await fetch(`https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=id&orderBy=DESC`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return await res.json()  as IResponse;
  
}