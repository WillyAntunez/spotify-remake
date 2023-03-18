import { FastAverageColor } from 'fast-average-color';
import { useEffect, useState } from 'react';

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
    <a className="category" style={{ backgroundColor: bgColor }} >
      <div className='category__wrapper'>
        <img className="category__img" src={category.icons[0].url} alt={category.name} loading='lazy' />
        <span className="category__name"> {category.name} </span>
      </div>
    </a>
  )
}
