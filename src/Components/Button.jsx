import React from 'react';


const Button = ({ link='',
    title,
    type='button',
    disabled=false,
    className,
    
  }) => {
    return (
        <a href={link}>
          <button disabled={disabled} className={`px-8 py-3 text-lg font-semibold rounded-sm shadow-lg transition duration-300' ${className}`} type={type}>
            {title}
          </button>
          </a>
    )
}

export default Button;