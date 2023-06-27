import React from 'react'
import {FaPlus} from 'react-icons/fa'
const AddItem = ({newItem, setNewItem, handleSubmit }) => {
  return (
    <form className="AddForm" onSubmit={handleSubmit}> {/*
     the event e is implicitely passed so we don't have to pass it like that (e)=>handleSubmit(e) */}
      <label htmlFor='AddItem'></label>
      <input 
        autoFocus
        type='text'
        placeholder='Add Item'
        required
        value={newItem} 
        onChange={(e)=>setNewItem(e.target.value)}
        />
      <button
        type='submit'
        aria-label='add item'
      >
        <FaPlus />
      </button>
    </form>
  )
}

export default AddItem
