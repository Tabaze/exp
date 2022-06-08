import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import Dropdown from './Dropdown'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const [dropdown,setDropdown]=useState(false)
    
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        if (window.innerWidth <= 960) {
            setDropdown(false);
        }
        else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth <= 960) {
            setDropdown(false);
        }
        else {
            setDropdown(false);
        }
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    },[])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbars" id='nav' >
                <div className="navbar-containers">
                    <Link to="/" className="navbar-logos" onClick={closeMobileMenu}>
                        Fund'Greenness
                    </Link>
                    <div className='menu-icons' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> {/*to change the menu icon to X*/}
                    </div>
                    <ul className={click ? 'nav-menus active' : 'nav-menus'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/create-new-project' className='nav-links' onClick={closeMobileMenu}>
                                Create new project
                            </Link>
                        </li>
                        <li className='nav-items dropdowns' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                                Projects <i className='fas fa-caret-down'/>
                            </Link>
                            {dropdown && <Dropdown/>}
                        </li>
                        <li className='nav-items'>
                            <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                                Contact us
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/log-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Log in
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' onClick={()=>{
                        document.getElementById('nav').classList.add('active')
                    }}>LOGIN</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar