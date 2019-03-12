const { Board, Motor, Led, Button } = require('johnny-five')

const board = new Board()

const motorOptoins = {
    pin : 9
}

const buttonOptions = {
    pin : 3,
    inverted : false,
    isPullup : true
}

board.on('ready', () => {
    const motor = new Motor(motorOptoins)
    const led = new Led(6)
    const button = new Button(buttonOptions)
    
    ///inject the five objects intor the repel
    board.repl.inject({
        motor: motor,
        led : led,
        button : button
      });
    
    console.log('BOARD IS READY!')

    
    button.on('down', () => {
        console.log('button pressed')
         return (motor.isOn === false) ? motor.start() : motor.stop()
    })
    
    
    
    motor.on('start', () => {
        console.log('motor is start')
        led.blink(1000)
    })
    
    motor.on('stop', ()=> {
        console.log('stopped')
        led.fadeOut()
    })
   
})