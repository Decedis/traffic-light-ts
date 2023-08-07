import { Component } from "react";

export class ClassTrafficLight extends Component {
  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className="circle red"></div>
          <div className="circle black"></div>
          <div className="circle black"></div>
        </div>
        <button className="next-state-button">Next State</button>
      </div>
    );
  }
}
