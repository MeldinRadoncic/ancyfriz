import React from "react";
import { NavLink } from "react-router-dom";

// The NavItem component is used to render a navigation link with optional icon and click handling
function NavItem({
  to,
  label,
  icon = null,
  textColor = "text-accent-rose-gold", // Default text color for the link
  onClick,
}) {
  // handleClick function calls the onClick function if it's provided
  const handleClick = () => {
    if (onClick) {
      onClick(); // Executes the onClick function passed as a prop (if defined)
    }
  };

  return (
    <NavLink
      to={to} // Sets the 'to' prop as the destination URL for navigation
      onClick={handleClick} // Attaches the handleClick function to the onClick event
      end // This ensures that the active class is applied only for exact matches of the URL
      className={
        ({ isActive }) =>
          // Dynamically applies classes based on whether the link is active
          isActive
            ? `${textColor} font-bold border-b-2 border-${textColor}` // Active link styles: primary text, bold, with a bottom border`
            : `${textColor} hover:text-accent-rose-gold transition` // Inactive link styles: neutral text, hover to neutral-gray, with transition effect`
      }>
      {/* Container for the icon and label */}
      <div className='flex items-center space-x-2'>
        {/* Renders the icon if available */}
        {icon}
        {/* The label text for the navigation item */}
        <span>{label}</span>
      </div>
    </NavLink>
  );
}

export default NavItem;
