input.onButtonPressed(Button.A, function () {
    radio.sendString("pietra")
    if (avversario == "carta") {
        basic.showIcon(IconNames.No)
    } else if (avversario == "forbice") {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("forbice")
    if (avversario == "pietra") {
        basic.showIcon(IconNames.No)
    } else if (avversario == "carta") {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
radio.onReceivedString(function (receivedString) {
    avversario = receivedString
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("carta")
    if (avversario == "forbice") {
        basic.showIcon(IconNames.No)
    } else if (avversario == "pietra") {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
let avversario = ""
radio.setGroup(1)
let io = ""
avversario = ""
basic.showIcon(IconNames.Square)
basic.forever(function () {
	
})
