import React from "react";

const Layout = ({ children }) => {
  return (
    // Here we can change the layout of the whole website by changing margin or padding.

    <main className='flex flex-col overflow-hidden'>
      {children}
    </main>
  );
};

export default Layout;
