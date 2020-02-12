import React, { Component } from "react";
import { BackgroundImage } from "@patternfly/react-core";
import image0 from "./components/images/frame_000_delay-0.1s.jpg";
import image1 from "./components/images/frame_001_delay-0.1s.jpg";
import image2 from "./components/images/frame_002_delay-0.1s.jpg";
import image3 from "./components/images/frame_003_delay-0.1s.jpg";
import image4 from "./components/images/frame_004_delay-0.1s.jpg";
import image5 from "./components/images/frame_005_delay-0.1s.jpg";
import image6 from "./components/images/frame_006_delay-0.1s.jpg";
import image7 from "./components/images/frame_007_delay-0.1s.jpg";
import image8 from "./components/images/frame_008_delay-0.1s.jpg";
import image9 from "./components/images/frame_009_delay-0.1s.jpg";
import image10 from "./components/images/frame_010_delay-0.1s.jpg";
import image11 from "./components/images/frame_011_delay-0.1s.jpg";
import image12 from "./components/images/frame_012_delay-0.1s.jpg";
import image13 from "./components/images/frame_013_delay-0.1s.jpg";
import image14 from "./components/images/frame_014_delay-0.1s.jpg";
import image15 from "./components/images/frame_015_delay-0.1s.jpg";
import image16 from "./components/images/frame_016_delay-0.1s.jpg";
import image17 from "./components/images/frame_017_delay-0.1s.jpg";
import image18 from "./components/images/frame_018_delay-0.1s.jpg";
import image19 from "./components/images/frame_019_delay-0.1s.jpg";
import image20 from "./components/images/frame_020_delay-0.1s.jpg";
import image21 from "./components/images/frame_021_delay-0.1s.jpg";
import image22 from "./components/images/frame_022_delay-0.1s.jpg";
import image23 from "./components/images/frame_023_delay-0.1s.jpg";
import image24 from "./components/images/frame_024_delay-0.1s.jpg";
import image25 from "./components/images/frame_025_delay-0.1s.jpg";
import image26 from "./components/images/frame_026_delay-0.1s.jpg";
import image27 from "./components/images/frame_027_delay-0.1s.jpg";
import image28 from "./components/images/frame_028_delay-0.1s.jpg";
import image29 from "./components/images/frame_029_delay-0.1s.jpg";
import image30 from "./components/images/frame_030_delay-0.1s.jpg";
//var index = 0;

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      scrollState: 0,

      images: [
        image0,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
        image20,
        image21,
        image22,
        image23,
        image24,
        image25,
        image26,
        image27,
        image28,
        image29,
        image30
      ]
    };
  }

  handleScroll = () => {
    var scrollState = window.pageYOffset || document.documentElement.scrollTop;
    if (this.state.scrollState < scrollState) {
      //down scroll
      //console.log("down " +  (this.state.index + 1) % this.state.images.length);
      this.setState({
        index: (this.state.index + 1) % this.state.images.length
      });
    } else {
      //upscroll
      //console.log("up " +  (this.state.index - 1) % this.state.images.length);
      if (this.state.scrollState === 0) {
        //do nothing
      } else {
        this.setState({
          index: (this.state.index - 1) % this.state.images.length
        });
      }
    }
    this.setState({ scrollState: scrollState });
    console.log(this.state.images[this.state.index]);
  };

  render() {
    const style = {
      //overflowY: "scroll",
      height: 1550,
      width: "100%",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    };
    return (
      <div>
        <div style={style} onWheel={this.handleScroll}>
          <h1>{this.state.images[this.state.index]}</h1>
          <BackgroundImage src={this.state.images[this.state.index]} />
        </div>
      </div>
    );
  }
}

export default App;
