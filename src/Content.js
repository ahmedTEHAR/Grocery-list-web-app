import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import "./index.css"

const Content = ({items, HandleCheck, HandleDelete}) => {

   
  return (
    <main className="grocery-list">

     { items.length ? (
        <ul>
          {items.map((item) => (
            <li  key="item.id" className='item' >
              <input  type='checkbox'
                      onChange={()=>HandleCheck(item.id)}
                      checked ={item.checked} 
                      />
              
              <label
              style={(item.checked) ? {textDecoration : 'line-through' }: null}
              onDoubleClick={()=>HandleCheck(item.id)}
              >{item.item}</label>


              <FaTrashAlt className='delete-icon' onClick = {()=> HandleDelete(item.id)} 
              role="button" tabIndex="0"/>

            </li>
          )
          )}
        </ul>
      ):(
        <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
      )
      }
    </main>
  )
}

export default Content
