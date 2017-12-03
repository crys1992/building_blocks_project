import { Meteor } from 'meteor/meteor';
import SerialPort from 'serialport';
import chemicals from '../imports/api/chemicals.js'
import sciencing from '../imports/api/sciencing.js'

const Readline = SerialPort.parsers.Readline;
const parser = new Readline();

// parse the data from serial into meaningful objects
function addSciencing(data) {
  // console.log(data);
  // split into an array 
  let dataArr  = data.split(",");
  // console.log(dataArr);


  if (dataArr.length > 1) {


    let box1corner1Index = 1;
    let box1corner2Index = 2;
    let box1corner3Index = 3;
    let box1corner4Index = 4;

    let box2corner1Index = 5;
    let box2corner2Index = 6;
    let box2corner3Index = 7;
    let box2corner4Index = 8;

    let box3corner1Index = 9;
    let box3corner2Index = 10;
    let box3corner3Index = 11;
    let box3corner4Index = 12;

    let element1NumberIndex = 13;
    let element2NumberIndex = 14; 
    let element3NumberIndex = 15; 

    let stirIndex = 16; 
    let flameIndex = 17;
    


//BOX ONE 

    //box1corner1
    let box1corner1Arr = dataArr[box1corner1Index].trim();
    let box1corner1Value = box1corner1Arr[0]
    //box1corner2
    let box1corner2Arr = dataArr[box1corner2Index].trim();
    let box1corner2Value = box1corner2Arr[0]
    //box1corner3
    let box1corner3Arr = dataArr[box1corner3Index].trim();
    let box1corner3Value = box1corner3Arr[0]
    //box1corner4
    let box1corner4Arr = dataArr[box1corner4Index].trim();
    let box1corner4Value = box1corner4Arr[0]
    
    let element1Value = string.concat(box1corner1Value,box1corner2Value,box1corner3Value,box1corner4Value)


//BOX TWO

    //box2corner1
    let box2corner1Arr = dataArr[box2corner1Index].trim();
    let box2corner1Value = box2corner1Arr[0]
    //box2corner2
    let box2corner2Arr = dataArr[box2corner2Index].trim();
    let box2corner2Value = box2corner2Arr[0]
    //box2corner3
    let box2corner3Arr = dataArr[box2corner3Index].trim();
    let box2corner3Value = box2corner3Arr[0]
    //box2corner4
    let box2corner4Arr = dataArr[box2corner4Index].trim();
    let box2corner4Value = box2corner4Arr[0]
    
    let element2Value = string.concat(box2corner1Value,box2corner2Value,box2corner3Value,box2corner4Value)


//BOX THREE

    //box3corner1
    let box3corner1Arr = dataArr[box3corner1Index].trim();
    let box3corner1Value = box3corner1Arr[0]
    //box1corner2
    let box3corner2Arr = dataArr[box3corner2Index].trim();
    let box3corner2Value = box3corner2Arr[0]
    //box1corner3
    let box3corner3Arr = dataArr[box3corner3Index].trim();
    let box3corner3Value = box3corner3Arr[0]
    //box1corner4
    let box3corner4Arr = dataArr[box3corner4Index].trim();
    let box3corner4Value = box3corner4Arr[0]
    
    let element3Value = string.concat(box3corner1Value,box3corner2Value,box3corner3Value,box3corner4Value)

    let element1


//ELEMENT ATOM COUNT 

    //element 1 count
    let element1Arr = dataArr[element1NumberIndex].trim();
    if (element1Arr[0] < 600 && element1Arr[0] > 200){
    let element1Count = "2"
    }
    else if (element1Arr[0] > 600){
    let element1Count = "3"
    }
    else{
    let element1Count = "1"
    }

     //element 2 count
    let element2Arr = dataArr[element2NumberIndex].trim();
    if (element2Arr[0] < 600 && element2Arr[0] > 200){
    let element2Count = "2"
    }
    else if (element2Arr[0] > 600){
    let element2Count = "3"
    }
    else{
    let element2Count = "1"
    }


    //element 3 count
    let element3Arr = dataArr[element3NumberIndex].trim();
    if (element3Arr[0] < 600 && element3Arr[0] > 200){
    let element3Count = "2"
    }
    else if (element3Arr[0] > 600){
    let element3Count = "3"
    }
    else{
    let element3Count = "1"
    }

//STIR
    let stirArr = dataArr[stirIndex].trim();

    if (element1Arr[0] > 500){
    let stir = "On"
    }
    else {
    let stir = "Off"
    }

    

//FLAME
    let flameArr = flameArr[flameIndex].trim();

    if (flameArr[0] > 500){
    let light = "On"
    }
    else {
    let light = "Off"
    }




    // console.log(text, decValue, hexValue, octValue, binValue);

    // insert into the database so that the front end will update each time you press the Arduino reset button
    Meteor.call('sciencing.insert', element1Value, element2Value, element3Value, element1Count, element2Count, element3Count, stir, light);
  }
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
