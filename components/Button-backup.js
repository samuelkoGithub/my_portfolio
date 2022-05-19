import React from 'react';
import {Link} from 'react-router-dom';
import './Button.css';



/* Declare the button style such as Primary or outline, Medium or Large, etc */
const STYLES = [`btn--primary`, `btn-outline`];
const SIZES = [`btn--medium`, `btn-large`];

/* Declare the Button function */
const Button = ({children, type, onClick, buttonStyles, buttonSizes}) => {
  const checkButtonStyle = STYLES.includes(buttonStyles) ? buttonStyles : STYLES[0];

   const checkButtonSize = SIZES.includes(buttonSizes) ? buttonSizes : SIZES[0];

    return(
        <Link to="/sign-up" className='btn-mobile'>
          <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type} >
          {children}</button>
        </Link>
    );
};

export default Button;