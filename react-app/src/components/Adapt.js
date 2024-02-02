import React from "react";
export default class Adapt extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <h1 className="example-letter">{this.props.letter}</h1>
        <div className="hover-effect">
          <h2 className="hover-h">{this.props.ability}</h2>
          <p className="hover-p">{this.props.text}</p>
        </div>
      </div>
    );
  }
}
