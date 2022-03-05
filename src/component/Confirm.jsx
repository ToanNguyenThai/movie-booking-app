import React, { Component } from 'react'

export default class Confirm extends Component {
    render() {
        return (
            <>
                <div className='btn__area'>
                    <button>Confirm Selection</button>
                </div>
                <table className='confirm__table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number of Seats</th>
                            <th>Seats</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Toàn</td>
                            <td>5</td>
                            <td>gg gg gg</td>
                        </tr>

                    </tbody>
                </table>

            </>
        )
    }
}
