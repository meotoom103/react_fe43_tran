import React, { Component } from "react";
import data from "./data.json";

import ProductList from "./ProductList";
import Card from "./Card";
export default class ExampleCard extends Component {
  state = {
    proList: data,
    proSelected: null,
    cardList: [],
  };

  handleDelete = (card) => {
    /**
     * 1 tìm vị trí
     * 2 cắt ra khỏi mảng
     * 3 setState
     */
    let cardListUpdate = [...this.state.cardList];
    let index = cardListUpdate.findIndex((item) => item.maSP == card.maSP);
    if (index >= 0) {
      cardListUpdate = cardListUpdate.splice(index, 1);
      this.setState({
        cardList: cardListUpdate,
      });
    }
  };
  handleBuy = (card) => {
    //tạo cardList mới
    let cardListUpdate = [...this.state.cardList]; //this.state.cardList.push(card)
    //tìm vị của phần tử trong mảng
    let index = cardListUpdate.findIndex((item) => item.maSP === card.maSP);
    if (index >= 0) {
      //tìm thấy
      cardListUpdate[index].soLuong += 1;
    } else {
      //ko tìm thấy
      card.soLuong = 1;
      console.log(card);
      cardListUpdate = [...cardListUpdate, card];
    }
    //setState
    this.setState({
      cardList: cardListUpdate,
    });
  };
  handerSelectPro = (sp) => {
    this.setState({
      proSelected: sp,
    });
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <div className="container">
              <Card
                handleDelete={this.handleDelete}
                cardList={this.state.cardList}
              />
              <ProductList
                handleBuy={this.handleBuy}
                handerSelectPro={this.handerSelectPro}
                proList={this.state.proList}
              />

              {this.state.proSelected ? (
                <div className="row">
                  <div className="col-sm-5">
                    <img
                      className="img-fluid"
                      src={this.state.proSelected.hinhAnh}
                    />
                  </div>
                  <div className="col-sm-7">
                    <h3>Thông số kỹ thuật</h3>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Màn hình</td>
                          <td>{this.state.proSelected.manHinh}</td>
                        </tr>
                        <tr>
                          <td>Hệ điều hành</td>
                          <td>{this.state.proSelected.heDieuHanh}</td>
                        </tr>
                        <tr>
                          <td>Camera trước</td>
                          <td>{this.state.proSelected.cameraTruoc}</td>
                        </tr>
                        <tr>
                          <td>Camera sau</td>
                          <td>{this.state.proSelected.cameraSau}</td>
                        </tr>
                        <tr>
                          <td>RAM</td>
                          <td>{this.state.proSelected.ram}</td>
                        </tr>
                        <tr>
                          <td>ROM</td>
                          <td>{this.state.proSelected.rom}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        ;
      </div>
    );
  }
}
