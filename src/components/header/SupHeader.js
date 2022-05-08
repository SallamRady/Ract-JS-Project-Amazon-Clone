import React from 'react';
import './MainHeader.css';
import {headerItems} from "../../units/ProductsData";
const SubHeader = () => {
    const Item = headerItems.map(
        item=> <a key={item} href='#'>{item}</a>
    )
    return (
        <div className='subHeader'>
            {Item}
        </div>
    );
};

export default SubHeader;
