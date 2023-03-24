import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { getCategoryById } from '../../api';

import { PlayerHero } from '../components';

import { Category } from '../../utils/types';
import './Genre.scss';


export const Genre = () => {    
    const { id = '' } = useParams();

    const [category, setCategory] = useState<Category>({
        name: '',
        href: '',
        icons: [],
        id: '',
    })

    const getGenreInfo = async () => {
        try {
            const [ categoryRes ] = await Promise.all( [ getCategoryById( id ) ] );

            setCategory( categoryRes )
        } catch (error) {
            if(error instanceof Error){
                console.log(error);
            }
        }
    }

    useEffect(() => {
        getGenreInfo();
    }, [])
    

    return (
        <div className='genre'>
            <div className='genre__hero'>
                <PlayerHero name={category?.name} />
            </div>

            <div className="genre__content">

            </div>
        </div>
    )
}
