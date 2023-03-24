import { useEffect, useState } from 'react'
import { getCategories } from '../../api'
import { Category } from '../../utils/types'


import './Categories.scss';
import { CategoryCard } from '../components/CategoryCard';
import { PlayerViewFooter } from '../components';

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

  return (
    <>
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
