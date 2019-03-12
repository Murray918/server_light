
const { Led, Board, Button, Motor } = require("johnny-five")
const board = new Board()

//provide options for the motor
const motorOptions = {
    pin: 9,
    enabled : false
}

//options for stop button
const stopOptions = {
    pin : 8,
    inverted : true
}

//options for start button
const startOptions = {
    pin : 7,
    intialize : true
}

const onReady = () => {
    //intialize the motor
    const motor = new Motor(motorOptions)
    const yellowLed = new Led(13)
    const greenLed = new Led(12)
    const redLed = new Led(11)
    const stop = new Button(stopOptions)
    const start = new Button(startOptions)
    
    //run this when the board is ready
    yellowLed.blink(800)
    greenLed.off()
    redLed.stop()
    motor.isOn = false
    
    const motorOnStart = () => {
        console.log(motor.isOn)        
    } 
    
    const handleStartPress = () => {
        console.log("start", motor.isOn)
        redLed.off())
        greenLed.blink(1000)
    }
    
    const handleStopPress = () => {
        console.log('stop', motor.isOn)
        motor.stop()
        greenLed.off()
        redLed.on()
        setTimeout(()=> {
            redLed.off()
        }, 10000)
    } 
    
    console.log("board is ready at :  ", Date.now)
    start.on("press", handleStartPress)
    stop.on('press', handleStopPress)
    motor.on("start", motorOnStart)
    
}

board.on("ready", onReady)
