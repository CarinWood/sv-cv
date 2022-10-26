import React, { useState } from 'react'
import './responsiveNav.css'
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-scroll'

const ResponsiveNav = () => {
    const [menu, setMenu] = useState(false)

    const toggleMenuFunc = () => {
        setMenu(!menu)
    }

  return (
      <>
        <FiMenu className="menu" onClick={() => toggleMenuFunc()}/>
        <div className={menu ? "nav-links open": "nav-links"}> 
            <ul className='link-list'>
                <li className={menu ? "link fade": "link"}>
                <Link 
                onClick={()=>toggleMenuFunc()}
                to="home" 
                spy={true} 
                smooth="true"
                offset={-50} 
                duration={500} 
                > Home
                </Link>
                </li>

                <li className={menu ? "link fade": "link"}>
                <Link 
                    onClick={()=>toggleMenuFunc()}
                    to="about" 
                    spy={true} 
                    smooth="true"
                    offset={-50} 
                    duration={500} 
                    > About 
                </Link>
                </li>
                <li className={menu ? "link fade": "link"}>
                <Link 
                    onClick={()=>toggleMenuFunc()}
                    to="education" 
                    spy={true} 
                    smooth="true"
                    offset={-50} 
                    duration={500} 
                    > Education 
                </Link>
                </li>
                <li className={menu ? "link fade": "link"}>
                <Link 
                    onClick={()=>toggleMenuFunc()}
                    to="work" 
                    spy={true} 
                    smooth="true"
                    offset={-50} 
                    duration={500} 
                    > Work Experience 
                </Link>
                </li>
            </ul>
        </div>
      </>
  )
}

export default ResponsiveNav