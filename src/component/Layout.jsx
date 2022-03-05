import React, { Component } from 'react'
import BookingContainer from './BookingContainer'

export default class Layout extends Component {
    render() {
        return (
            <div className='layout'>
                <h1 className='title'>MOVIE SEAT SELECTION</h1>
                <BookingContainer></BookingContainer>
            </div>
        )
    }
}

