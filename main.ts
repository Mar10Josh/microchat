input.onButtonPressed(Button.A, function () {
    radio.sendString("Hi!")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("You look great!")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("I can't talk right now...")
})
input.onGesture(Gesture.Shake, function () {
    radiogroup += 1
    basic.showString("" + (radiogroup))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("I need help!")
})
let radiogroup = 0
radiogroup = 0
basic.forever(function () {
    radio.setGroup(radiogroup)
})
