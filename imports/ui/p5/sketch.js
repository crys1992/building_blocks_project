// pass in p5.js as function argument p5
export default function sketch (p5) {
  let sciencing = {element:""};
  let localProps = {};
  
  let resetButton;
  let stop1 = "F";
  let stop2 = "F";
  let stop3 = "F";
  let stop4 = "F";
  let element1choice;
  let element2choice;
  let element3choice;
  let element1atoms;
  let element2atoms;
  let element3atoms;
  let letsScience = false;
  let whatever = 0;
  let whatever1 = 0;
  

//object positions on screen 
  let headerX = 375
  let headerY = 0

  let block1X = 440
  let block1Y = 450

  let block2X = 690
  let block2Y = 450

  let block3X = 940
  let block3Y = 450

  let count1X = 425
  let count1Y = 710

  let count2X = 675
  let count2Y = 710

  let count3X = 925
  let count3Y = 710


//send ID to Robo 3T
function sendId(){
  console.log("just clicked sendid");
  localProps.sendId(sciencing._id);
  stop1 = "F";
  stop2 = "F";
  stop3 = "F";
  stop4 = "F";
  letsScience = false
  whatever = 0;
  whatever1 = 0;
  p5.clear();
}

  p5.setup = function () {
    p5.createCanvas(1500, 2600);
    p5.background(255);
 

//sounds

  beammeup = p5.loadSound('http://res.cloudinary.com/cwang12/video/upload/v1512948213/beammeup_et3bpz.wav');
  fail = p5.loadSound('http://res.cloudinary.com/cwang12/video/upload/v1512951097/explosionfail_lvsrar.mp3');
  yeahscience = p5.loadSound('http://res.cloudinary.com/cwang12/video/upload/v1512951740/YEAH_SCIENCE_bsjetr.wav');

//header images
    header = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/c_scale,w_825/v1512791288/Home_Screen_wywz8t.png');
    header2 = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/c_scale,w_825/v1512879605/Home_Screen_2_ss0lhy.png');
    header3 = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/c_scale,w_825/v1512962029/Home_Screen_3_tn68pz.png');
    caution = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/c_scale,w_825/v1512790935/Caution_pnfclw.png');
    endgame = p5.loadImage ('http://res.cloudinary.com/cwang12/image/upload/v1512950773/End_Game_kjadef.png');


//element blocks images
    emptyBlock = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/v1512790934/Block_1_-_Blank_tnqcyw.png');
    hydrogenBlock = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/v1512792915/Block_2_-_Hydrogen_shpdpb.png');
    oxygenBlock = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/v1512792915/Block_3_-_Oxygen_ifebni.png');
    carbonBlock = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/v1512792915/Block_4_-_Carbon_tdeyix.png');
    nitrogenBlock = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/v1512793560/Block_5_-_Nitrogen_kdelip.png');
    sodiumBlock = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/v1512792915/Block_6_-_Sodium_xixn1e.png');
    chlorineBlock = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/v1512792915/Block_7_-_Chlorine_jvztwp.png');
    potassiumBlock = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/v1512792915/Block_8_-_Potassium_cgcvjo.png');
    leadBlock = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/v1512792915/Block_9_-_Lead_kadepe.png');
    


//atom count icons
 oneAtom = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/v1512875607/atom_1_p09gga.png');
 twoAtom = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/v1512875607/atom_2_t4q3s0.png');
 threeAtom = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/v1512875607/atom_3_torjix.png');


// MOLECULE INFO PAGES

// H20
 h20screen1 = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/c_scale,w_1600/v1512987837/H20_-_1_oddgmr.png');
//HCl
 hclscreen1 = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/c_scale,w_1600/v1512987836/HCl_kuajj5.png');
//Co2
 co2screen1 = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/c_scale,w_1600/v1512987836/CO2_zhmpbp.png');
//CO
 coscreen1 = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/c_scale,w_1600/v1512987835/CO_-_1_xb59ds.png');
 //NaCl
 naclscreen1 = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/c_scale,w_1600/v1512987836/NaCl_t45tqt.png');
//PbO2
 pbo2screen1 = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/c_scale,w_1600/v1512987837/PbO2_qucnk5.png');
 //NH3
 nh3screen1 = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/c_scale,w_1600/v1512987836/NH3_vd6lq0.png')
//H202
 h2o2screen1 = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/c_scale,w_1600/v1512987835/H2O2_jefzfz.png');
//KCl
 kclscreen1 = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/c_scale,w_1600/v1512987835/KCl_bhrgut.png');
//KClo3
 kclo3screen1 = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/c_scale,w_1600/v1512987837/KClO3_ulxlrp.png');
//NaOH
 naohscreen1 = p5.loadImage('http://res.cloudinary.com/cwang12/image/upload/c_scale,w_1600/v1512987837/NaOh_vfhsnr.png');
  


//Start Over Button Creation
    resetButton = p5.createButton('Start Over')
    resetButton.position(50,100);
    resetButton.mousePressed(sendId);
   
  };

  p5.draw = function () {

//Header 1
    if (stop1 =="F"){
    p5.image(header, headerX, headerY);
    }
// BLOCK ONE LOGIC 

   // console.log(sciencing.element1);
    if(sciencing.element1 && letsScience == false){
      if (stop1 == "F"){
         if(sciencing.element1 == "0000"){
          p5.image(emptyBlock, block1X, block1Y);
         }
       if(sciencing.element1 == "1000"){
          beammeup.play();
          p5.image(hydrogenBlock, block1X, block1Y);
          stop1 = "T";
          element1choice = "Hydrogen";
        }
        else if(sciencing.element1 == "0100"){
          beammeup.play();
        p5.image(nitrogenBlock, block1X, block1Y);
          stop1 = "T";
          element1choice = "Nitrogen";
        }
        else if(sciencing.element1 == "0010"){
          beammeup.play();
        p5.image(oxygenBlock, block1X, block1Y);
        stop1 = "T";
        element1choice = "Oxygen";
        }
        else if(sciencing.element1 == "0001"){
          beammeup.play();
        p5.image(carbonBlock, block1X, block1Y);
        stop1 = "T";
        element1choice = "Carbon";
        }
        else if(sciencing.element1 == "1010"){
          beammeup.play();
        p5.image(sodiumBlock, block1X, block1Y);
        stop1 = "T";
        element1choice = "Sodium";
      }
        else if(sciencing.element1 == "0011"){
          beammeup.play();
        p5.image(leadBlock, block1X, block1Y);
        stop1 = "T";
        element1choice = "Lead";
      }
        else if(sciencing.element1 == "0101"){
          beammeup.play();
        p5.image(potassiumBlock, block1X, block1Y);
        stop1 = "T";
         element1choice = "Potassium";
      }
        else if(sciencing.element1 == "1100"){
          beammeup.play();
        p5.image(chlorineBlock, block1X, block1Y);
        stop1 = "T";
         element1choice = "Chlorine";
      }
      if (stop1 == "T"){
        p5.image(header2, headerX, headerY);
        
      }      
      }
    }

//Block 1 Atom Count 

    if (letsScience == false){
      if (sciencing.element1Count == 1 && stop1 == "T"){
        p5.image(oneAtom, count1X, count1Y);
        element1atoms = 1; 
      }
      if (sciencing.element1Count == 2 && stop1 == "T"){
        p5.image(twoAtom, count1X, count1Y);
        element1atoms = 2; 
      }
      if (sciencing.element1Count == 3 && stop1 == "T"){
        p5.image(threeAtom, count1X, count1Y);
        element1atoms = 3; 
    }
    }


// BLOCK TWO LOGIC 

    // console.log(sciencing.element2);
    if(sciencing.element2 && letsScience == false){
      if (stop2 == "F"){
        if(sciencing.element2 == "0000"){
          p5.image(emptyBlock, block2X, block2Y);

        }
      if(sciencing.element2 == "1000"){
        beammeup.play();
          p5.image(hydrogenBlock, block2X, block2Y);
          stop2 = "T";
          element2choice = "Hydrogen";
        }
        else if(sciencing.element2 == "0100"){
          beammeup.play();
          p5.image(oxygenBlock, block2X, block2Y);
          stop2 = "T";
          element2choice = "Oxygen";
        }
        else if(sciencing.element2 == "0010"){
          beammeup.play();
          p5.image(nitrogenBlock, block2X, block2Y);
          stop2 = "T";
          element2choice = "Nitrogen";
        }
         else if(sciencing.element2 == "0001"){
          beammeup.play();
          p5.image(carbonBlock, block2X, block2Y);
          stop2 = "T";
          element2choice = "Carbon";
        }
         else if(sciencing.element2 == "1010"){
          beammeup.play();
          p5.image(chlorineBlock, block2X, block2Y);
          stop2 = "T";
          element2choice = "Chlorine";
        }
         else if(sciencing.element2 == "0011"){
          beammeup.play();
          p5.image(potassiumBlock, block2X, block2Y);
          stop2 = "T";
          element2choice = "Potassium";
        }
         else if(sciencing.element2 == "0101"){
          beammeup.play();
          p5.image(leadBlock, block2X, block2Y);
          stop2 = "T";
          element2choice = "Lead";
        }
         else if(sciencing.element2 == "1100"){
          beammeup.play();
          p5.image(sodiumBlock, block2X, block2Y);
          stop2 = "T";
          element2choice = "Sodium";
        }
        if (stop2 == "T"){
        p5.image(header3, headerX, headerY);
      }
      }
    }

//Block 2 Atom Count 

    if (letsScience == false){
      if (sciencing.element2Count == 1 && stop2 == "T"){
        p5.image(oneAtom, count2X, count2Y);
        element2atoms = 1; 
      }
      if (sciencing.element2Count == 2 && stop2 == "T"){
        p5.image(twoAtom, count2X, count2Y);
        element2atoms = 2;
      }
      if (sciencing.element2Count == 3 && stop2 == "T"){
        p5.image(threeAtom, count2X, count2Y);
        element2atoms = 3; 
      }
    }


// BLOCK THREE LOGIC 
    if(sciencing.element3 && letsScience == false){
      if (stop3 == "F"){
        if(sciencing.element3 == "0000"){
          p5.image(emptyBlock, block3X, block3Y);

        }
      if(sciencing.element3 == "1000"){
         beammeup.play();
          p5.image(hydrogenBlock, block3X, block3Y);
          stop3 = "T";
           element3choice = "Hydrogen";
        }
        else if(sciencing.element3 == "0100"){
          beammeup.play();
          p5.image(oxygenBlock, block3X, block3Y);
          stop3 = "T";
          element3choice = "Oxygen";
        }
        else if(sciencing.element3 == "0010"){
          beammeup.play();
          p5.image(nitrogenBlock, block3X, block3Y);
          stop3 = "T";
          element3choice = "Nitrogen";
        }
         else if(sciencing.element3 == "0001"){
          beammeup.play();
          p5.image(carbonBlock, block3X, block3Y);
          stop3 = "T";
          element3choice = "Carbon";
        }
         else if(sciencing.element3 == "1010"){
          beammeup.play();
          p5.image(chlorineBlock, block3X, block3Y);
          stop3 = "T";
          element3choice = "Chlorine";
        }
         else if(sciencing.element3 == "0011"){
          beammeup.play();
          p5.image(potassiumBlock, block3X, block3Y);
          stop3 = "T";
          element3choice = "Potassium";
        }
         else if(sciencing.element3 == "0101"){
          beammeup.play();
          p5.image(leadBlock, block3X, block3Y);
          stop3 = "T";
          element3choice = "Lead";
        }
         else if(sciencing.element3 == "1100"){
          beammeup.play();
          p5.image(sodiumBlock, block3X, block3Y);
          stop3 = "T";
          element3choice = "Sodium";
        }
        if (stop3 == "T"){
        p5.image(header2, headerX, headerY);
      }
      }
    }
 
 //Block 3 Atom Count 
    if (letsScience == false){
      if (sciencing.element3Count == 1 && stop3 == "T"){
        p5.image(oneAtom, count3X, count3Y);
        element3atoms = 1; 
      }
      if (sciencing.element3Count == 2 && stop3 == "T"){
        p5.image(twoAtom, count3X, count3Y);
        element3atoms = 2; 
      }
      if (sciencing.element3Count == 3 && stop3 == "T"){
        p5.image(threeAtom, count3X, count3Y);
        element3atoms = 3; 
      }
    }

if (sciencing.stir){
if (sciencing.stir == 1){
letsScience = true; 
p5.clear();
p5.image(caution,375, 50);
if (whatever1%50 == 0){
yeahscience.play();
}
whatever1++;
}

//H20 
if (letsScience ==true && sciencing.stir == 0){
  p5.clear();
  if (element1choice == "Hydrogen" && element1atoms == 2 && element2choice == "Oxygen" && element2atoms == 1){
    p5.image(h20screen1, 0, 0); 
  }
//HCl
  else if (element1choice == "Hydrogen" && element1atoms == 1 && element2choice == "Chlorine" && element2atoms == 1){
    p5.image(hclscreen1, 0, 0);
  }  
//CO
 else if (element1choice == "Carbon" && element1atoms == 1 && element2choice == "Oxygen" && element2atoms == 1){
    p5.image(coscreen1, 0, 0);  
  }  
//CO2
 else if (element1choice == "Carbon" && element1atoms == 1 && element2choice == "Oxygen" && element2atoms == 2){
    p5.image(co2screen1, 0, 0);   
  }  
//NaCl
else if (element1choice == "Sodium" && element1atoms == 1 && element2choice == "Chlorine" && element2atoms == 1){
    p5.image(naclscreen1, 0, 0);   
  }  
//PbO2
else if (element1choice == "Lead" && element1atoms == 1 && element2choice == "Oxygen" && element2atoms == 2){
    p5.image(pbo2screen1, 0, 0);  
  }  
//NH3
else if (element1choice == "Nitrogen" && element1atoms == 1 && element2choice == "Hydrogen" && element2atoms == 3){
    p5.image(nh3screen1, 0, 0);  
  }   
//KCl
else if (element1choice == "Potassium" && element1atoms == 1 && element2choice == "Chlorine" && element2atoms == 1 && element3choice != "Oxygen"){
    p5.image(kclscreen1, 0, 0);  
  }  
//KClo3
else if (element1choice == "Potassium" && element1atoms == 1 && element2choice == "Chlorine" && element2atoms == 1 && element3choice == "Oxygen" && element3atoms == 3){
    p5.image(kclo3screen1, 0, 0);   
  }  
//h202
else if (element1choice == "Hydrogen" && element1atoms == 2 && element2choice == "Oxygen" && element2atoms == 2){
    p5.image(h2o2screen1, 0, 0);   
  }  
else if (element1choice == "Sodium" && element1atoms == 1 && element2choice == "Oxygen" && element2atoms == 1 && element3choice == "Hydrogen" && element3atoms == 1){
    p5.image(naohscreen1, 0, 0);  
  }  
else{
  p5.image(endgame, 275, 50);
  if (whatever%1000 == 0){
  fail.play();
  }
  whatever++;

}

}

}
   
}
  

  // this special function receives data from App.jsx withTracker
  p5.myCustomRedrawAccordingToNewPropsHandler = function (props) {

    if (!localProps.sendId){

      localProps.sendId = props.sendId;
    }
    if (props.sciencing){
      sciencing = props.sciencing;
     // console.log(sciencing);
   
    }
  };


};