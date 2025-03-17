import React, { useState } from 'react'
import LabelInput from '../core/LabelInput/LabelInput'
import Button from '../core/Button/Button'
import { useDispatch } from 'react-redux'
import { fetchAddedProduct } from '../../redux/reducers/productsReducer'

export default function ModalContent({setIsModalOpen}) {
    const [title,setTitle]=useState("")
    const [category,setCategory]=useState("")
    const [price,setprice]=useState("")
    const dispatch=useDispatch()

    function handleCloseModal(e){
        e.preventDefault();
        setIsModalOpen(false)
    }
    function handleAddNewProduct(e){
        e.preventDefault();
        const newProduct={title,category,price}
        dispatch(fetchAddedProduct(newProduct))

    }
  return (
    <div>
      <h1 className='text-center font-semibold text-2xl mb-6'>ADD ITEM</h1>
      <form >
        <LabelInput label="title" value={title} setValue={setTitle}/>
        <LabelInput label="category" value={category} setValue={setCategory}/>
        <LabelInput label="price" value={price} setValue={setprice}/>
        <div className='flex justify-between'>
            <Button content="add" onClick={handleAddNewProduct}/>
            <Button content="cancel" onClick={handleCloseModal}/>
        </div>
      </form>
    </div>
  )
}
