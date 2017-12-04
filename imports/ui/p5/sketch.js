// pass in p5.js as function argument p5
export default function sketch (p5) {
  // set the intial ascii variable
  let sciencing = {element:""};
  

  // set the initial random text color
  let r = p5.random(255);
  let g = p5.random(255);
  let b = p5.random(255);

  p5.setup = function () {
    // standard p5 setup code, note p5. because we passed it in above
    p5.createCanvas(600, 400);
    p5.background(255);
    p5.textSize(30);

    
  };

  p5.draw = function () {
    // fill the background of each square with white before drawing ascii chars
    p5.fill(255);
    p5.noStroke()
    p5.rect(0, 0, p5.width, p5.height);
    // draw the incoming ascii from serial
    p5.fill(r, g, b);
    p5.text(sciencing.element1, p5.width/2-30, p5.height/2-20);
  };

  // this special function receives data from App.jsx withTracker
  p5.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.sciencing){
      // get the new ascii object
      sciencing = props.sciencing;
      // increment the grid position
   //   if (gridIndex < gridMax) {
    //    gridIndex++;
    //  } else {
    //    gridIndex = 0;
     // }
      // get a new random color
      r = p5.random(255);
      g = p5.random(255);
      b = p5.random(255);
    }
  };
};