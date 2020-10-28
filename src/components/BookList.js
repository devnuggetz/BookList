import React, { Component } from 'react'

export class BookList extends Component {
    render() {
        return (
            <div className='bookList'>
                <ul>
                    <li>Harry Potter</li>
                    <li>Ranodm Book</li>
                    <li>XYZ book</li>
                </ul>
            </div>
        )
    }
}

export default BookList
