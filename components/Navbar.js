import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from './Button';

function Navbar() {
  /* the below 2 functions (useState and setCLick) are used to handle the click event */
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  /* For showButton function
     Button style handling.  If the window has been scaled
     down to 960, the button will be shown; otherwise, the 
     whole menu will be shown instead 
  */
  const [button, setButton] = useState(false);
  const showButton = () => {
        // if(window.screenWidth <= 960) {
        if(window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
  };

  /* 
     To get rid of the display problem, useEffect will
     clearup the menu bar when we scale down the 
     browser window
  */
  useEffect (() => {
    showButton();  // set the showButton false!!!!
  }, []);
  // end of the useEffct arrow function here
  
  window.addEventListener('resize', showButton);

  /* 
    The below function handle the click event of Mobile Menu.
    To get rid of the floding menu by clicking the samuel logo,
    below function will set the button status back to "false" by
    passing the false to the setClick effect function.
  */
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container" >
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
          サミュエル<i className="fab fa-typo3" ></i>
          </Link>
          <div><img src="./samuel-folder/portfolio-5.png" heigh='60' width='70' onClick={closeMobileMenu} alt="Portfolio" /></div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'} >
            <li className='nav-item'>
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                 Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
                 Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/products" className='nav-links' onClick={closeMobileMenu}>
                 Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                 Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div> 
      </div>
    </>
  )
}

export default Navbar;