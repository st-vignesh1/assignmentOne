import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchProductsByCategory } from '../../redux/reducers/productsReducer';
import LoadingSpinner from '../core/LoadingSpinner';
import Button from '../core/Button';

export default function CategoryButton({allCategory,setIsCategorySelected,isCategorySelected,setSelectedCategory,setCategoryPage,setSearchParams,selectedCategory}) {
const dispatch = useDispatch()
    function handleSelectCategory(e, {content:category}) {
        e.preventDefault();
    
        if (!isCategorySelected) setIsCategorySelected(true);
    
        const selectedCategory = allCategory.find((cat) => category === cat.name);
    
        if (selectedCategory) {
            setSelectedCategory(selectedCategory.name);
            setSearchParams({ category: selectedCategory.slug });
            dispatch(setCategoryPage(0)); 
            dispatch(fetchProductsByCategory({ category: selectedCategory.slug, page: 0 }));
        }
    }
  return (
    <div className='flex gap-4 mb-8 justify-center'>
       {allCategory?.length>0 ?
       allCategory.map((category,index)=><Button content={category.name} key={index} onClick={handleSelectCategory} selectedCategory={selectedCategory}/>)
       :<LoadingSpinner spinnerHeight="h-10"/>}
          </div >
  )
}
