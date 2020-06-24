radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        robotbit.Servo(robotbit.Servos.S1, value)
        robotbit.Servo(robotbit.Servos.S3, value)
    } else if (name == "y") {
        robotbit.Servo(robotbit.Servos.S2, value)
        robotbit.Servo(robotbit.Servos.S4, value)
    }
})
radio.setGroup(15)
