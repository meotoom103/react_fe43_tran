import React, { Component } from 'react'
import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils';
import styleDatabinding from './DataBinding.module.css';

export default class DataBinding extends Component {

    //Thuộc tính sanPham
    sanPham = {
        ma: 1,
        ten: 'Iphone x',
        Gia: 1000,
        hinhAnh: 'https://picsum.photos/200/100'
    }
    //Phương thức
    renderThongTin = () => {
        return <div className="w-25">
        <div class="card">
            <img class="card-img-top" src={this.sanPham.hinhAnh} alt={this.sanPham.hinhAnh} />
            <div class="card-body">
                <h4 className={`${styleDatabinding.header} card=title`}>{this.sanPham.ten}</h4>
                <p class="card-text">{this.sanPham.Gia} $</p>
            </div>
        </div>
        </div>
    }

    //Phương thức render là phương thức có sẵn của component để hiện thị giao diện
    render() {
        let title = "CYBERSOFT";
        let srcImg = `https://picsum.photos/200/300`
        let hocVien = {
            ma: 1,
            ten: 'Nguyễn Văn a',
            tuoi: 18
        }
        const renderImg = () => {
            //return về component (jsx); nội dung hàm phải trả về 1 số, chuỗi, hoặc thẻ html, hoặc component có duy nhất 1 thẻ bao phủ
            return (
                <div>
                    <img src="https://picsum.photos/200/300" />
                </div>
            )
        }

        let objectStyle = {background:'#000', color:'#fff'}

        return (
            <div className="container">
                {this.renderThongTin()}
                <h1 style={objectStyle} className="titleDemo" id="title">{title}</h1>
                <img src={srcImg} alt={srcImg} />
                <div className="card">
                    <img className="card-img-top" src="https://picsum.photos/200/300" alt />
                    <div className="card-body">
                        <h4 className="card-title">Họ tên: {hocVien.ten}</h4>
                        <p className="card-text">Tuổi: {hocVien.tuoi}</p>
                    </div>
                </div>
                <div className="container">
                    {renderImg()}
                </div>

            </div>

        )
    }
}
