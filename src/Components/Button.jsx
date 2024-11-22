import React from 'react';


const Button = ({ children, className }) => {
    return (
        <button className={`bg-accent-rose-gold text-neutral-pearl px-4 py-2 mt-4 ${className}`}>
            {children}
        </button>
    )
}

export default Button;