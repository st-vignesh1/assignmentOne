import React, { useState } from 'react'
import LabelInput from '../core/LabelInput'
import Button from '../core/Button'
import { useDispatch } from 'react-redux'
import { fetchAddedProduct, fetchModifiedProduct } from '../../redux/reducers/productsReducer'

export default function ModalContent({setIsModalOpen,editProduct}) {
    const [title,setTitle]=useState(editProduct? editProduct.title : "")
    const [category,setCategory]=useState(editProduct?editProduct.category:"")
    const [price,setprice]=useState(editProduct?editProduct.price:"")
    const dispatch=useDispatch()

    function handleCloseModal(e){
        e.preventDefault();
        setIsModalOpen(false)
    }
    function handleAddNewProduct(e){
        e.preventDefault();
        const newProduct={title,category,price}
        dispatch(fetchAddedProduct({category:"beauty",newProduct}))
        setIsModalOpen(false)

    }
    function handleEditProduct(e){
        e.preventDefault();
        const editedProduct = {title,category,price};
        dispatch(fetchModifiedProduct({id:editProduct.id,updatedProduct:editedProduct}))
        setIsModalOpen(false)
    }
    
  return (
    <div>
      <h1 className='text-center font-semibold text-2xl mb-6'>{editProduct?"EDIT ITEM":"ADD ITEM"}</h1>
      <form >
        <LabelInput label="title" value={title} setValue={setTitle}/>
        <LabelInput label="category" value={category} setValue={setCategory}/>
        <LabelInput label="price" value={price} setValue={setprice}/>
        <div className='flex justify-between'>
            <Button content={editProduct?"Edit":"add"} onClick={editProduct?handleEditProduct:handleAddNewProduct}/>
            <Button content="cancel" onClick={handleCloseModal}/>
        </div>
      </form>
    </div>
  )
}
