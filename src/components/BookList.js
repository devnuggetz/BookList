import React, { Component } from 'react'
import { ThemeContext } from '../ contexts/ThemeContext'

export class BookList extends Component {
    static contextType= ThemeContext;
    render() {
        const {isLightTheme, light, dark}= this.context;
        const theme= isLightTheme?light:dark;
        return (
            <div className='book-list' style={{color: theme.syntax, background: theme.bg}}>
                <ul>
                    <li style={{background: theme.ui}}>Harry Potter</li>
                    <li style={{background: theme.ui}}>Ranodm Book</li>
                    <li style={{background: theme.ui}}>XYZ book</li>
                </ul>
            </div>
        )
    }
}

export default BookList
