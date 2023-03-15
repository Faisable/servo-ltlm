input.onButtonPressed(Button.A, function () {
    motor.servo(motor.Servos.S3, 180)
})
input.onButtonPressed(Button.AB, function () {
    index += 90
    motor.servo(motor.Servos.S3, index)
})
input.onButtonPressed(Button.B, function () {
    motor.servo(motor.Servos.S3, 0)
})
let index = 0
basic.showString("S")
basic.forever(function () {
	
})
