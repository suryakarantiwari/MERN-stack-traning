const events =require('events');
ee= new events.EventEmitter();

const step1= () => {
    console.log("Step 1 : Put on your seatbelt. In most places in the world, driving without wearing a seatbelt is illegal.");
}
const step2= () => {
    console.log("Step 2 : Always start your car with your foot on the brake. When you turn it on, the car will move forward by itself if your foot isn't on the brake.")
}
const step4= () => {
    console.log("Step 4 : When you're ready to move your car forwards, come to a complete stop and put the car into 'Drive'");
}
const step3= () => {
    console.log("Step 3 : Turn on the engine and release the parking brake, if necessary");
}

const step5 =() => {
    console.log("Step 5 : Hold both hands on the steering wheel at the '9 and 3 o'clock' position.");
    console.log("Step 6 : Use your blinkers (also called indicators or turn signals)");
    console.log("Happy Driving !!");

    
}


ee.on('Step1',step1);
ee.on('Step2',step2);
ee.on('Step3',step3);
ee.on('Step4',step4);
ee.on('Step5',step5);


ee.emit('Step1');
ee.emit('Step2');
ee.emit('Step3');
ee.emit('Step4');
ee.emit('Step5');

