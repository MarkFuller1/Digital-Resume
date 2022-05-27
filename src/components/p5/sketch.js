import Particle from "./Particle";
import * as p5 from "p5";

export var inc = 0.1;
export var scl = 70;
export var cols, rows;
export var zoff = 0;
export var fr;
export var particles = [];
export var flowfield;

var lines = false;

// exports.inc = inc;
// exports.scl = scl;
// exports.cols = cols;
// exports.zoff = zoff;
// exports.fr= fr;
// exports.particles = particles;
// exports.flowfield = flowfield;

function getDocumentHeight(p) {
  var elements = document.getElementsByClassName("MainPage");

  if (elements.length > 0) {
    return elements[0].clientHeight;
  }
  return p.height;
}

export default function sketch(p) {
  p.setup = () => {
    p.createCanvas(p.windowWidth, 10000);
    //p.colorMode(p.HSB, 0);
    cols = p.floor(p.width / scl);
    rows = p.floor(p.height / scl);
    fr = p.createP("");
    p.frameRate(60);

    flowfield = ["0"];

    for (var i = 0; i < 100; i++) {
      particles[i] = new Particle(p);
    }
    // p.background(155);

    console.log("canvas:", p);
  };

  p.draw = () => {
    if (p.height < getDocumentHeight(p)) {
      console.log("resizing canvas", p.height + " < " + getDocumentHeight());
      p.resizeCanvas(p.width, getDocumentHeight());
      // p.background(155);
    }

    var yoff = 0;
    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
        var index = x + y * cols;
        var angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 4;
        var v = p5.Vector.fromAngle(angle);
        v.setMag(1);
        flowfield[index] = v;
        //console.log(flowfield[index])
        xoff += inc;
        if (lines) {
          p.stroke(0, 25);
          p.push();
          p.translate(x * scl, y * scl);
          p.rotate(v.heading());
          p.strokeWeight(1);
          p.line(1, 0, scl, 0);
          p.pop();
        }
      }
      yoff += inc;

      zoff += 0.0001;
    }

    for (var i = 0; i < particles.length; i++) {
      particles[i].follow(flowfield, i);
      particles[i].update();
      particles[i].edges();
      particles[i].show();
    }
  };
  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    if (p.canvas)
      //Make sure the canvas has been created
      p.fill(newProps.color);
  };
}
