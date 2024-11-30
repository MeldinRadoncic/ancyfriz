// ThirdTitle.js
const ThirdTitle = ({title, className = ''}) => {
    return (
        <h3 className={`text-xl sm:text-2xl font-medium leading-normal ${className}`}>
            {title}
        </h3>
    );
};

export default ThirdTitle;
