import { FastAverageColor } from 'fast-average-color';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Category } from '../../utils/types';

interface props {
    category: Category;
}

export const CategoryCard = ({ category }:props) => {

  const fac = new FastAverageColor();

  const [bgColor, setBgColor] = useState('#000000')

  const getColor = async () => {
    const dominantColor = await fac.getColorAsync(category.icons[0].url);
    setBgColor( dominantColor.hex )
  }

  useEffect(() => {
    getColor();
  }, [])
  
  return(
    <NavLink className="category" style={{ backgroundColor: bgColor }} to={`/genre/${category.id}`} >
      <div className='category__wrapper'>
        <img className="category__img" src={category.icons[0].url} alt={category.name} loading='lazy' />
        <span className="category__name"> {category.name} </span>
      </div>
    </NavLink>
  )
}
