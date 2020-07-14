import React, { Component } from 'react'
import BT2Banner from './BT2Banner'
import BT2Item from './BT2Item'

export default class BT2Body extends Component {
    render() {
        return (
            <div>
                <BT2Banner />
                <BT2Item />
            </div>
        )
    }
}
