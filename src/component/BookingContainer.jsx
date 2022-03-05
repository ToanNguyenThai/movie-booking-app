import React, { Component } from 'react'

export default class BookingContainer extends Component {
    render() {
        return (
            <div className='wrap'>
                <div className='content'>
                    <h4>Fill The Required Details Below And Select Your Seats</h4>
                    <form>
                        <label for="name">Name</label>
                        <input type='text' id='name'></input>
                        <label for="seat">Number of Seats</label>
                        <input type='number' id='seat' min='1'></input>
                        <button type='submit'>Start Selecting</button>
                    </form>
                </div>
            </div>
        )
    }
}
