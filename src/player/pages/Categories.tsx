import { useEffect, useRef, useState } from 'react'
import { getCategories } from '../../api'
import { Category } from '../../utils/types'

import {
  CloseXSvg,
  SearchSvg,
} from '../../assets/svg';


import './Categories.scss';
import { CategoryCard } from '../components/CategoryCard';
import { NavbarPortal, PlayerViewFooter } from '../components';
import { useInput } from '../hooks';

export const Categories = () => {
  
  const [categories, setCategories] = useState<Category[]>([]);
  
  const setInitialCategories = async (): Promise<void> => {
    try {
      const initialCategories = await getCategories(0, 50)
      setCategories(initialCategories.items);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    setInitialCategories();
  }, [])

  // handle input
  const {
    inputText,
    onInputChange,
    focusInput,
    clearInput,
    inputRef,
  } = useInput();

  return (
    <>
      <NavbarPortal>
        <div className="categories__search" onClick={ focusInput }>
            <SearchSvg className='categories__search-icon' />
            <input 
                type="text" 
                placeholder='¿Qué quieres escuchar?' 
                className='categories__search-input'
                onChange={ onInputChange }
                value={ inputText }
                ref={ inputRef }
                />
            {
                inputText.length > 0 
                ? ( <CloseXSvg className='categories__x-icon' onClick={ clearInput } /> )
                : null
            }
        </div>
      </NavbarPortal>

      <div className="categories">
        <h2 className="categories__title">Explorar todo</h2>
        <div className="categories__grid">

          {
            categories.length > 0
              ? categories.map(category =>
                <CategoryCard category={category} key={category.id} />
              )
              : null
          }

        </div>
      </div>
      <PlayerViewFooter />
    </>

  )
}
