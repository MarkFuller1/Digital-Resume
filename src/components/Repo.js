import React, { Component } from "react";

export class Repo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.name} , {this.props.description} , {this.props.url},
        {this.props.updated}
      </div>
    );
  }
}

export default Repo;
