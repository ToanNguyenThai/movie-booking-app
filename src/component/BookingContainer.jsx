import React, { Component } from 'react'
import Confirm from './Confirm'
import Seat from './Seat'

export default class BookingContainer extends Component {

    render() {
        return (
            <div className='wrap'>
                <div className='content'>
                    <h4>Fill The Required Details Below And Select Your Seats</h4>
                    <form>
                        <label htmlFor="name">Name</label>
                        <input type='text' id='name'></input> <br></br>
                        <label className="seat__title" htmlFor="seat">Number of Seats</label>
                        <input type='number' id='seat' min='1'></input> <br></br>
                        <button type='submit'>Start Selecting</button>
                    </form>
                    <div className='note'>
                        <div className="yourSeat">
                            <div className="statusBox" style={{ backgroundColor: 'green' }} />
                            <p className="status">Selected Seat</p>
                        </div>
                        <div className="notAvailable">
                            <div className="statusBox" style={{ backgroundColor: 'red' }} />
                            <p className="status">Reserved Seat</p>
                        </div>
                        <div className="empty">
                            <div className="statusBox" style={{ backgroundColor: 'white' }} />
                            <p className="status">Emtpy Seat</p>
                        </div>

                    </div>
                    <Seat></Seat>
                    <Confirm></Confirm>
                </div>
            </div >
        )
    }
}
