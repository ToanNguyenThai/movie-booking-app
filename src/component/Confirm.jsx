import React, { Component } from 'react'
import { DataContext } from '../context/Context';
export default class Confirm extends Component {
    static contextType = DataContext;
    state = {
        confirm: false
    }
    render() {
        return (
            <>
                <div className='btn__area'>
                    <button onClick={() => this.setState({ confirm: true })}>Confirm Selection</button>
                </div>
                <table className='confirm__table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number of Seats</th>
                            <th>Seats</th>
                        </tr>
                    </thead>
                    {
                        this.state.confirm
                            ? <tbody>
                                <tr>
                                    <td>{this.props.name}</td>
                                    <td>{this.props.seatNumber}</td>
                                    <td>{this.context.seatArray}</td>
                                </tr>

                            </tbody>
                            : <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                    }

                </table>

            </>
        )
    }
}
