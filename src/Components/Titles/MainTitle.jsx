


const MainTitle = ({title, className='', animation}) => {

    return(
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md ${className}`} data-aos={animation}>{title}</h1>
    )


}


export default MainTitle;