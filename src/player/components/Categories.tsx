import { useEffect, useState } from 'react'
import { getCategories } from '../../api'
import { Category } from '../../utils/types'


export const Categories = () => {

  const [categories, setCategories] = useState<Category[]>([]);

  const setInitialCategories = async ():Promise<void> => {
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
  
  // TODO: Categories cards with colors
  // TODO: extract domain color of each category using 'color-thief'

  return (
    <div>
      Categories
    </div>
  )
}
