import React, { Component } from "react";
import BTProductItem from "./BTProductItem";

export default class BTProductList extends Component {
  state = {
    smartPhoneList: [
      {
        image: "./img/sp_iphoneX.png",
        name: "iPhone X",
      },
      {
        image: "./img/sp_note7.png",
        name: "Note 7",
      },
      {
        image: "./img/sp_blackberry.png",
        name: "Blackberry",
      },
      {
        image: "./img/sp_vivo850.png",
        name: "Vivo850",
      },
    ],
  };

  renderSmartPhoneList = () => {
    return this.state.smartPhoneList.map((smartPhone, index) => {
      return (
        <div className="col-3" key={index}>
          <BTProductItem item={smartPhone} />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <h3 className="container">BEST SMARTPHONE</h3>
        <div className="row">{this.renderSmartPhoneList()}</div>
      </div>
    );
  }
}
