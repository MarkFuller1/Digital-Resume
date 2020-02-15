import React, { Component } from "react";
import { BackgroundImage } from "@patternfly/react-core";
import { ResumeData } from "./ResumeData";
import "../index.css";
import image0 from "./images/frame_000_delay-0.1s.jpg";
import image1 from "./images/frame_001_delay-0.1s.jpg";
import image2 from "./images/frame_002_delay-0.1s.jpg";
import image3 from "./images/frame_003_delay-0.1s.jpg";
import image4 from "./images/frame_004_delay-0.1s.jpg";
import image5 from "./images/frame_005_delay-0.1s.jpg";
import image6 from "./images/frame_006_delay-0.1s.jpg";
import image7 from "./images/frame_007_delay-0.1s.jpg";
import image8 from "./images/frame_008_delay-0.1s.jpg";
import image9 from "./images/frame_009_delay-0.1s.jpg";
import image10 from "./images/frame_010_delay-0.1s.jpg";
import image11 from "./images/frame_011_delay-0.1s.jpg";
import image12 from "./images/frame_012_delay-0.1s.jpg";
import image13 from "./images/frame_013_delay-0.1s.jpg";
import image14 from "./images/frame_014_delay-0.1s.jpg";
import image15 from "./images/frame_015_delay-0.1s.jpg";
import image16 from "./images/frame_016_delay-0.1s.jpg";
import image17 from "./images/frame_017_delay-0.1s.jpg";
import image18 from "./images/frame_018_delay-0.1s.jpg";
import image19 from "./images/frame_019_delay-0.1s.jpg";
import image20 from "./images/frame_020_delay-0.1s.jpg";
import image21 from "./images/frame_021_delay-0.1s.jpg";
import image22 from "./images/frame_022_delay-0.1s.jpg";
import image23 from "./images/frame_023_delay-0.1s.jpg";
import image24 from "./images/frame_024_delay-0.1s.jpg";
import image25 from "./images/frame_025_delay-0.1s.jpg";
import image26 from "./images/frame_026_delay-0.1s.jpg";
import image27 from "./images/frame_027_delay-0.1s.jpg";
import image28 from "./images/frame_028_delay-0.1s.jpg";
import image29 from "./images/frame_029_delay-0.1s.jpg";
import image30 from "./images/frame_030_delay-0.1s.jpg";

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
    var updatedIndex = this.state.index;

    if (this.state.scrollState < scrollState) {
      //explicit scroll down
      updatedIndex = (updatedIndex + 1) % this.state.images.length;
    } else if (this.state.scrollState > scrollState) {
      //explicit scroll up
      if (updatedIndex === 0) {
        //do nothing
      } else {
        updatedIndex = (updatedIndex - 1) % this.state.images.length;
      }
    } else {
      // no scroll
    }

    this.setState({ index: updatedIndex, scrollState: scrollState });
  };

  render() {
    return (
      <div className="AppCSS">
        <div className="AppBackground" onWheel={this.handleScroll}>
          <ResumeData/>
          <BackgroundImage src={this.state.images[this.state.index]}/>
        </div>
      </div>
    );
  }
}

//   render() {
//     return (
//       <div className="AppCSS">
//         App
//         <div className="AppBackground" onWheel={this.handleScroll}>
//           App Background
//           <ResumeData className="ResumeDataCSS"/>
//           <BackgroundImage src={this.state.images[this.state.index]} />
//         </div>
//       </div>
//     );
//   }
// }

export default App;
