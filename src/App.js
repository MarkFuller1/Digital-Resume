import React, { Component } from "react";
import { BackgroundImage } from '@patternfly/react-core';

//var index = 0;

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,

      images: [
        "https://i.ytimg.com/vi/TwZ8RYKn5MY/maxresdefault.jpg",
        "http://4k.com/wp-content/uploads/2014/06/4k-image-santiago.jpg"
      ]
    };
  }

  // onScroll = (e) => {
  //   e.preventDefault();

  //   this.setState({ count: (this.count + 1) % 2 });
  //   console.log("scroll" + this.count);
  // };

  // onWheel = (e) => {
  //   e.preventDefault();
  //   console.log("WHEEL!!", e);
  // };

  handleScroll = () => {
    this.setState({ index: (this.state.index + 1) % this.state.images.length });
    //console.log(this.state.images[this.state.index]);
  };

  render() {
    const style = {
      //overflowY: "scroll",
      height: 5000,
      width: "100%",
      backgroudImage: `url(${this.state.images[this.state.index]})`, // "url(" + this.state.images[this.state.index] + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    };
    return (
      <div>
        <div style={style} onWheel={this.handleScroll}>
          <h1>{this.state.images[this.state.index]}</h1>
          <BackgroundImage src={this.state.images[this.state.index]}/>
        </div>
      </div>
    );
  }
}

export default App;
