import React, { Component } from 'react'

export default class EventBinding extends Component {

    handleClick = () => {
        alert('hello REACT');
    }
    showMessage = (mess) => {
        alert("Hello " + mess);
    }
    render() {
        return (
            <div>
                {/* Cách 1: Truyền callback function xử lý sự kiện */}
                <h3>Cách 1: Truyền callback function xử lý sự kiên</h3>
                <button onClick={this.handleClick}>click me!</button>
                <button onClick={this.showMessage.bind(this,'cybersoft')}>Click me</button>
                <br />
                <hr />
                {/* Cách 2: */}
                <h3>Cách 2: Dùng arrow function</h3>
                <button onClick={() => {
                    this.handleClick();
                }}>click me</button>
                <button onClick={() => {
                    this.showMessage('cybersoft');
                }}>click me</button>
            </div>
        )
    }
}
