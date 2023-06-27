import React from 'react'
import "./index.css"
import {FaShoppingCart} from "react-icons/fa"
const Header = ({title , length, items }) => {
    return (
        <header>
            <h1>{title}</h1>
            <div className='shopping-cart'>
                <div className="counter">
                    {length}
                </div>
                <FaShoppingCart size={24} color='white' />
                {length > 0 && (
                <ul className="selected-items">
                    {items
                    .filter((item) => item.checked) // Filter out unchecked items
                    .map((item) => (
                        <li key={item.id}>{item.item}</li>
                    ))}
                </ul>
                )}
            </div>
        </header>
    )
}
Header.defaultProps = {
    title : "Default Title"
}
export default Header