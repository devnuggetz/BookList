import React, { Component, useContext } from 'react'
import { ThemeContext } from '../ contexts/ThemeContext'

const BookList = () => {
    const {isLightTheme, light, dark}=useContext(ThemeContext);
    const theme= isLightTheme?light:dark;
    return ( 
        <div className='book-list' style={{color: theme.syntax, background: theme.bg}}>
        <ul>
            <li style={{background: theme.ui}}>Harry Potter</li>
            <li style={{background: theme.ui}}>Ranodm Book</li>
            <li style={{background: theme.ui}}>XYZ book</li>
        </ul>
    </div>
     );
}
 
export default BookList;
