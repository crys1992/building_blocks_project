import { Meteor } from 'meteor/meteor';
import SerialPort from 'serialport';
import chemicals from '../imports/api/chemicals.js'
import sciencing from '../imports/api/sciencing.js'
import allData from '../imports/api/allData.js'
let currentSciencing = null;

const Readline = SerialPort.parsers.Readline;
const parser = new Readline();

// parse the data from serial into meaningful objects
function addSciencing(data) {
  // console.log(data);
  // split into an array 
  let dataArr  = data.split(",");
//  console.log(dataArr);


  if (dataArr.length > 1) {


    let box1corner1Index = 0;
    let box1corner2Index = 1;
    let box1corner3Index = 2;
    let box1corner4Index = 3;

    let box2corner1Index = 4;
    let box2corner2Index = 5;
    let box2corner3Index = 6;
    let box2corner4Index = 7;

    let box3corner1Index = 8;
    let box3corner2Index = 9;
    let box3corner3Index = 10;
    let box3corner4Index = 11;

    let element1NumberIndex = 12;
    let element2NumberIndex = 13; 
    let element3NumberIndex = 14; 

    let stirIndex = 15; 
    let flameIndex = 16;
    


//BOX ONE 

    //box1corner1
    let box1corner1Arr = dataArr[box1corner1Index];
    let box1corner1Value = box1corner1Arr[0]
    //box1corner2
   // console.log(box1corner2Index, dataArr[box1corner2Index]);
    let box1corner2Arr = dataArr[box1corner2Index];
    let box1corner2Value = box1corner2Arr[0]
    //box1corner3
    let box1corner3Arr = dataArr[box1corner3Index];
    let box1corner3Value = box1corner3Arr[0]
    //box1corner4
    let box1corner4Arr = dataArr[box1corner4Index];
    let box1corner4Value = box1corner4Arr[0]
    
    let element1Value = [box1corner1Value,box1corner2Value,box1corner3Value,box1corner4Value].join('');


//BOX TWO

    //box2corner1
    let box2corner1Arr = dataArr[box2corner1Index];
    let box2corner1Value = box2corner1Arr[0]
    //box2corner2
    let box2corner2Arr = dataArr[box2corner2Index];
    let box2corner2Value = box2corner2Arr[0]
    //box2corner3
    let box2corner3Arr = dataArr[box2corner3Index];
    let box2corner3Value = box2corner3Arr[0]
    //box2corner4
    let box2corner4Arr = dataArr[box2corner4Index];
    let box2corner4Value = box2corner4Arr[0]
    
    let element2Value = [box2corner1Value,box2corner2Value,box2corner3Value,box2corner4Value].join('');


//BOX THREE

    //box3corner1
    let box3corner1Arr = dataArr[box3corner1Index];
    let box3corner1Value = box3corner1Arr[0]
    //box1corner2
    let box3corner2Arr = dataArr[box3corner2Index];
    let box3corner2Value = box3corner2Arr[0]
    //box1corner3
    let box3corner3Arr = dataArr[box3corner3Index];
    let box3corner3Value = box3corner3Arr[0]
    //box1corner4
    let box3corner4Arr = dataArr[box3corner4Index];
    let box3corner4Value = box3corner4Arr[0]
    
    let element3Value = [box3corner1Value,box3corner2Value,box3corner3Value,box3corner4Value].join('');



//ELEMENT ATOM COUNT 
    let element1Count;
    let element2Count;
    let element3Count;
    //element 1 count
    let element1Arr = dataArr[element1NumberIndex];
    if (element1Arr[0] < 600 && element1Arr[0] > 200){
    element1Count = "2"
    }
    else if (element1Arr[0] > 600){
    element1Count = "3"
    }
    else{
    element1Count = "1"
    }

     //element 2 count
    let element2Arr = dataArr[element2NumberIndex];
  //  console.log(element2Arr);

    if (element2Arr[0] < 600 && element2Arr[0] > 200){
    element2Count = "2"
    }
    else if (element2Arr[0] > 600){
    element2Count = "3"
    }
    else{
    element2Count = "1"
    }


    //element 3 count
    let element3Arr = dataArr[element3NumberIndex];

    if (element3Arr[0] < 600 && element3Arr[0] > 200){
    element3Count = "2"
    }
    else if (element3Arr[0] > 600){
    element3Count = "3"
    }
    else{
    element3Count = "1"
    }

//STIR
    let stir;
    let stirArr = dataArr[stirIndex];

    if (element1Arr[0] > 500){
    stir = "1"
    }
    else {
    stir = "0"
    }

    

//FLAME
    let light; 
    let flameArr = dataArr[flameIndex];


    if (flameArr[0] > 500){
    light = "1"
    }
    else {
    light = "0"
    }




    // console.log(text, decValue, hexValue, octValue, binValue);

    // insert into the database so that the front end will update each time you press the Arduino reset button
  currentSciencing =  Meteor.call('sciencing.upsert', currentSciencing, element1Value, element2Value, element3Value, element1Count, element2Count, element3Count, stir, light);
  }

  //console.log(currentSciencing);
}

var port = new SerialPort('/dev/cu.usbmodem1411', {
  baudRate: 9600
});
port.pipe(parser);
// our callback function must be wrapped in Meteor.bindEnvironment to avoid Fiber errors
parser.on('data', Meteor.bindEnvironment(addSciencing));


Meteor.startup(() => {
  // code to run on server at startup
});
