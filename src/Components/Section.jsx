const Section = ({ children, className = '', style = {} }) => {
    return (
      <section
      style={style}
        className={`w-full
                    px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 
                    py-12 sm:py-16 md:py-32 lg:py-24
                       sm:min-h-0 min-h-screen
                    flex flex-col items-center overflow-hidden
          
                    ${className}`}
        >
          {children}
        </section>
    );
  };
  
  export default Section;
  