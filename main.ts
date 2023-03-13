input.onButtonPressed(Button.A, function () {
    index += 10
    motor.servo(motor.Servos.S3, index)
    if (index >= 180) {
        index = 180
    }
})
input.onButtonPressed(Button.AB, function () {
    index += 90
    motor.servo(motor.Servos.S3, index)
})
input.onButtonPressed(Button.B, function () {
    index += -10
    motor.servo(motor.Servos.S3, index)
    if (index <= 0) {
        index = 0
    }
})
let index = 0
basic.showString("S")
basic.forever(function () {
	
})
