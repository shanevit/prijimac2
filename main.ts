radio.onReceivedNumber(function (receivedNumber) {
    signal = 36 - (Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength)) - 42)
    x = 5 - (Math.trunc(signal / 10) - 0)
    y = signal % 10 / 2 - 0
    i = 4
    j = 0
    if (receivedNumber == 0) {
        while (x <= i) {
            for (let j = 0; j <= 4; j++) {
                led.plot(j, i)
            }
            i += -1
        }
        j = 0
        while (y > j) {
            led.plot(j, i)
            j += 1
        }
        basic.pause(1000)
    } else {
        basic.showNumber(receivedNumber)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(8)
    basic.showArrow(ArrowNames.South)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(9)
    basic.showArrow(ArrowNames.North)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let j = 0
let i = 0
let y = 0
let x = 0
let signal = 0
basic.showIcon(IconNames.Sword)
basic.pause(1000)
radio.setGroup(1)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
