


const MainTitle = ({title, className=''}) => {

    return(
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md ${className}`}>{title}</h1>
    )


}


export default MainTitle;