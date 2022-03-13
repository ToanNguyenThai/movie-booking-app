import React, { Component } from 'react'
import { DataContext } from '../context/Context';
export default class Seat extends Component {
    static contextType = DataContext;

    render() {

        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th className='rowNumber'></th>
                            <th className='rowNumber'>1</th>
                            <th className='rowNumber'>2</th>
                            <th className='rowNumber'>3</th>
                            <th className='rowNumber'>4</th>
                            <th className='rowNumber'>5</th>
                            <th className='space'></th>
                            <th className='rowNumber'>6</th>
                            <th className='rowNumber'>7</th>
                            <th className='rowNumber'>8</th>
                            <th className='rowNumber'>9</th>
                            <th className='rowNumber'>10</th>
                            <th className='rowNumber'>11</th>
                            <th className='rowNumber'>12</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.context.seat.map((item, index) => (
                                <tr>
                                    <td className='columnName' key={index}>{item.hang}</td>
                                    {
                                        item.danhSachGhe.map((seatItem, key) => (
                                            <>
                                                {
                                                    (seatItem.daDat === 'not empty')
                                                        ? <>
                                                            {
                                                                (seatItem.soGhe.includes("5"))
                                                                    ? <>
                                                                        <td onClick={() => this.context.chooseSeat(seatItem.soGhe, seatItem.daDat, this.props.seatNumber)} key={seatItem.daDat} className='ghe gheDuocChon'></td>
                                                                        <td className='space'></td>
                                                                    </>
                                                                    : <td onClick={() => this.context.chooseSeat(seatItem.soGhe, seatItem.daDat, this.props.seatNumber)} key={seatItem.daDat} className='ghe gheDuocChon'></td>
                                                            }
                                                        </>
                                                        :

                                                        <>
                                                            {
                                                                (seatItem.daDat === 'empty')
                                                                    ? <>
                                                                        {
                                                                            (seatItem.soGhe.includes("5"))
                                                                                ? <>
                                                                                    <td onClick={() => this.context.chooseSeat(seatItem.soGhe, seatItem.daDat, this.props.seatNumber)} key={seatItem.daDat} className='ghe'></td>
                                                                                    <td className='space'></td>
                                                                                </>
                                                                                : <td onClick={() => this.context.chooseSeat(seatItem.soGhe, seatItem.daDat, this.props.seatNumber)} key={seatItem.daDat} className='ghe'></td>
                                                                        }
                                                                    </>
                                                                    : <>
                                                                        {
                                                                            (seatItem.soGhe.includes("5"))
                                                                                ? <>
                                                                                    <td onClick={() => this.context.chooseSeat(seatItem.soGhe, seatItem.daDat, this.props.seatNumber)} key={seatItem.daDat} className='ghe gheDangChon'></td>
                                                                                    <td className='space'></td>
                                                                                </>
                                                                                : <td onClick={() => this.context.chooseSeat(seatItem.soGhe, seatItem.daDat, this.props.seatNumber)} key={seatItem.daDat} className='ghe gheDangChon'></td>
                                                                        }
                                                                    </>
                                                            }
                                                        </>
                                                }

                                            </>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className='screen'>SCREEN THIS WAY</div>
            </>


        )
    }
}
