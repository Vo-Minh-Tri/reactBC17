import React, { Component } from "react";

export default class HandleEven extends Component {
  handleClick = () => {
    alert("Xin chào các bạn");
  };

  showMess = (name) => {
    alert("Xin chào ! " + name)
  }
  render() {
    return (
      <div className="container">
        <h3>HandleEven</h3>
        <button onClick={this.handleClick()}>Show message</button>

        <button
          onClick={() => {
            alert("Xin chào các bạn");
          }}
        >
          Click me!
        </button>
        <hr />

        <h3>Handle event param</h3>
        <button onClick={this.showMess.bind(this, 'DŨng')}>Show Mess</button>
        <button onClick={()=>{
          this.showMess('DŨng')
        }}>show mess param</button>
      </div>
    );
  }
}
