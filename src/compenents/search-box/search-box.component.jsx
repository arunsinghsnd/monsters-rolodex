import React from 'react';

import './search-box.styles.css';



export const SerachBox = ({ placeholder, handleChange }) =>(
    <input 
    className='search-box'
    type='search' 
    placeholder='Search Monsters'
    onChange={handleChange}
    />
)