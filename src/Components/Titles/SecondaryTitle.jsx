// SecondaryTitle.js
const SecondaryTitle = ({title, className = '', animation}) => {
    return (
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug drop-shadow-sm mb-4 ${className}`} data-aos={animation}>
            {title}
        </h2>
    );
};

export default SecondaryTitle;
