import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        srcImg: './img/steel-car.jpg'
      }

    changeColor = (color) => {
        let imgColor = `./img/${color}-car.jpg`;
        //setState cho src tấm hình thay đổi để giao diện render lại
        this.setState({
            srcImg:imgColor
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-6">
                        <img className="w-100" src={this.state.srcImg} alt="123"/>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                            <button onClick={()=>{this.changeColor('red')}} class="btn text-white" style={{backgroundColor:'red'}}>Xe đỏ</button>
                            </div>
                            <div className="col-3">
                            <button onClick={()=>{this.changeColor('silver')}} class="btn text-white" style={{backgroundColor:'gray'}}>Xe xám</button>
                            </div>
                            <div className="col-3">
                            <button onClick={()=>{this.changeColor('black')}} class="btn text-white" style={{backgroundColor:'black'}}>Xe đen</button>
                            </div>
                            <div className="col-3">
                            <button onClick={()=>{this.changeColor('steel')}} class="btn text-white" style={{backgroundColor:'silver'}}>Xe steel</button>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }
}
