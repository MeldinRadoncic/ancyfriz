import React, { useState } from "react";

// Importing the NavbarData array and NavItem component for dynamic link rendering
import NavbarData from "../../../AppData/NavbarData";
import NavItem from "./NavItem";

const Navbar = () => {
  // State to track whether the mobile drawer is open or closed
  const [isOpen, setIsOpen] =
    useState(false);

  // Function to toggle the mobile drawer's open/close state
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the mobile drawer
  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <nav className='w-full bg-primary-charcoal px-4 sm:px-6 md:px-12 lg:px-42  py-8 shadow-md z-50'>
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div>
          <img
            src='/logo.jpg'
            alt='Ancy Friz Logo'
            width={50}
            height={50}
          />
        </div>

        {/* Hamburger Button for mobile screens */}
        {/* The button toggles the mobile drawer on click (appears only on smaller screens) */}
        <div
          className='text-3xl text-neutral-gray  cursor-pointer md:hidden'
          onClick={toggleDrawer}>
          {/* If the drawer is open, show nothing, else show the hamburger icon */}
          {isOpen ? "" : "☰"}
        </div>

        {/* Desktop Links */}
        {/* These links are shown only on larger screens (using 'md:flex' for medium and up) */}
        <div className='hidden md:flex space-x-6'>
          {/* Mapping over NavbarData to dynamically render each navigation link */}
          {NavbarData.map((item) => (
            <NavItem
              key={item.id} // Using unique 'id' for each link's key
              to={item.link} // The 'link' from NavbarData serves as the 'href'
              label={item.title} // The 'title' from NavbarData is displayed as the link text
            />
          ))}
        </div>
      </div>

      {/* Mobile Drawer */}
      {/* The mobile drawer appears when 'isOpen' is true and slides in from the right */}
      <div
        className={`fixed top-0 right-0 h-full bg-primary-charcoal shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        } w-1/2 md:hidden`}>
        {/* Close Button */}
        {/* This button allows the user to close the mobile drawer (appears at the top right) */}
        <div className='flex justify-end p-4'>
          <button
            className='text-2xl text-neutral-gray cursor-pointer'
            onClick={closeDrawer}>
            {/* The '✕' icon is used for closing the drawer */}
            ✕
          </button>
        </div>

        {/* Drawer Links */}
        {/* These links are shown inside the mobile drawer and render based on the NavbarData */}
        <div className='flex flex-col items-start space-y-4 p-6'>
          {NavbarData.map((item) => (
            <NavItem
              key={item.id}
              to={item.link}
              onClick={closeDrawer}
              icon={item.icon}
              label={item.title}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
