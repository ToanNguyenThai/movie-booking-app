import React, { Component } from 'react'
import Confirm from './Confirm'
import Seat from './Seat'

export default class BookingContainer extends Component {
    state = {
        name: '',
        seatNumber: 0,
        inputStatus: false
    }
    handleSubmit = () => {


        if (this.state.name.length > 0 && this.state.seatNumber > 0) {
            this.setState({
                inputStatus: true
            })
        }


    }
    render() {
        return (
            <div className='wrap'>
                <div className='content'>
                    <h4>Fill The Required Details Below And Select Your Seats</h4>
                    <form>
                        <label htmlFor="name">Name</label>
                        <input onChange={(e) => this.setState({ name: e.target.value })} type='text' id='name'></input> <br></br>
                        <label className="seat__title" htmlFor="seat">Number of Seats</label>
                        <input onChange={(e) => this.setState({ seatNumber: e.target.value })} type='number' id='seat' min='1'></input> <br></br>
                        <button onClick={this.handleSubmit} type='button'>Start Selecting</button>
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

                    {
                        this.state.inputStatus
                            ? <>
                                <Seat seatNumber={this.state.seatNumber}></Seat>
                                <Confirm name={this.state.name} seatNumber={this.state.seatNumber}></Confirm>
                            </>
                            : ''
                    }



                </div>
            </div >
        )
    }
}
