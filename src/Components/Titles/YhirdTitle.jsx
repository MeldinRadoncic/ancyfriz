// ThirdTitle.js
const ThirdTitle = ({title, className = ''}) => {
    return (
        <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-medium leading-normal ${className}`}>
            {title}
        </h3>
    );
};

export default ThirdTitle;
