import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Button = ({ text, color }) => {
    return (
        <DrawOutlineButton color={color}>{text}</DrawOutlineButton>
    );
};

const DrawOutlineButton = ({ children, color, ...rest }) => {
    return (
        <button
            {...rest}
            className={`group relative px-4 py-2 font-medium text-${color} transition-colors duration-[400ms] hover:text-${color}`}
        >
            <span className='flex items-center'>{children} <FaArrowRight className={`text-sm ml-2 transition-all duration-100 group-hover:ml-4`} /></span>

            {/* TOP */}
            <span className={`absolute left-0 top-0 h-[2px] w-0 bg-${color} transition-all duration-100 group-hover:w-full`} />

            {/* RIGHT */}
            <span className={`absolute right-0 top-0 h-0 w-[2px] bg-${color} transition-all delay-100 duration-100 group-hover:h-full`} />

            {/* BOTTOM */}
            <span className={`absolute bottom-0 right-0 h-[2px] w-0 bg-${color} transition-all delay-200 duration-100 group-hover:w-full`} />

            {/* LEFT */}
            <span className={`absolute bottom-0 left-0 h-0 w-[2px] bg-${color} transition-all delay-300 duration-100 group-hover:h-full`} />
        </button>
    );
};

export default Button;