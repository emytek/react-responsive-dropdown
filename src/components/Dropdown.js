import { useState } from "react";
import {MenuItem} from './MenuItem';
import './Dropdown.css'
import { Link } from "react-router-dom";


function Dropdown() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

  return (
    <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
      {MenuItem.map((item, index) => {
        return(
          <li key={index}><Link className={item.Name} to={item.path}
          onClick={()=> setClick(false)}/>{item.title}</li>  
        )
      })}  
    </ul>
  )
}

export default Dropdown