import { spotifyApi } from "./"

import { AxiosError } from "axios";

import { Category } from "../utils/types";

interface ICategoryResponse  {
    categories: {
        href: string,
        limit: number,
        next: string | null,
        offset: number,
        previous: string | null,
        total: number,
        items: Category[],
    }
}

const getCategories = async (startFrom:number = 0, limit:number = 20, country:string = 'HN') => {
    try {

        if(limit > 50 || limit < 0 ){
            throw new Error('El limite maximo es 50 y el menor 0');
        }

        const categories = await spotifyApi.get<ICategoryResponse>(
            `/browse/categories?country=${country}&offset=${startFrom}&limit=${limit}`
        );
        
        return categories.data.categories; 
    } catch (error) {
        console.log( error );

        if( error instanceof AxiosError ){
            throw new Error(`Error con la peticion: ${error.message}`);
        }else{
            throw new Error(`Error desconocido: ${error}`)
        }
    }
}

export {
    getCategories,
}