import React from 'react';

const DropDown = (props) => {
    const {isHover} = props;
    console.log(isHover)
    if(isHover)
   { return (
        <div className='dropDownContainer'>
            <ul className='dropDownMenu'>
                <li>Hoodies & Sweatshirts</li>
                <li>Jackets</li>
                <li>T-shirts</li>
                <li>Oversized t-shirts</li>
                <li>Shirts</li>
                <li>Jogers</li>
                <li>Shorts</li>
            </ul>
        </div>
    );}
};

export default DropDown;