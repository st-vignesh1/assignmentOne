import React from 'react'
import LabelInput from '../core/LabelInput/LabelInput'
import Button from '../core/Button/Button'

export default function ModalContent({setIsModalOpen}) {

    function handleCloseModal(e){
        e.preventDefault();
        setIsModalOpen(false)
    }
  return (
    <div>
      <h1 className='text-center font-semibold text-2xl mb-6'>ADD ITEM</h1>
      <form >
        <LabelInput label="title"/>
        <LabelInput label="category"/>
        <LabelInput label="price"/>
        <div className='flex justify-between'>
            <Button content="add"/>
            <Button content="cancel" onClick={handleCloseModal}/>
        </div>
      </form>
    </div>
  )
}
