import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTSlide from './BTSlide'
import BTFooter from './BTFooter'
import BTProductList from './BTProductList'

export default class BaiTapLayout extends Component {

    //Nội dung giao diện react class component chứa trong lệnh return của phương thức render
    render() {
        return (
            <div>
                <BTHeader />
                <BTSlide />
                <BTProductList />
                <BTFooter />
            </div>
        )
    }
}
