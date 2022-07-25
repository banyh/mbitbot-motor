makerbit.onIrDatagram(function () {
    if (makerbit.irDatagram() == "0x7D7DBE41") {
        basic.showArrow(ArrowNames.West)
        mbitbot.move_servo_pin(mbitbot.SePin.Sepin1, 80)
        mbitbot.move_servo_pin(mbitbot.SePin.Sepin2, 110)
    } else if (makerbit.irDatagram() == "0x7D7D7E81") {
        basic.showArrow(ArrowNames.East)
        mbitbot.move_servo_pin(mbitbot.SePin.Sepin1, 70)
        mbitbot.move_servo_pin(mbitbot.SePin.Sepin2, 100)
    } else if (makerbit.irDatagram() == "0x7D7DDE21") {
        basic.showArrow(ArrowNames.North)
        mbitbot.move_servo_pin(mbitbot.SePin.Sepin1, 70)
        mbitbot.move_servo_pin(mbitbot.SePin.Sepin2, 110)
    } else if (makerbit.irDatagram() == "0x7D7D3EC1") {
        basic.showArrow(ArrowNames.South)
        mbitbot.move_servo_pin(mbitbot.SePin.Sepin1, 90)
        mbitbot.move_servo_pin(mbitbot.SePin.Sepin2, 90)
    } else {
        mbitbot.move_servo_pin(mbitbot.SePin.Sepin1, 90)
        mbitbot.move_servo_pin(mbitbot.SePin.Sepin2, 90)
        basic.clearScreen()
    }
})
makerbit.connectIrReceiver(DigitalPin.P8, IrProtocol.NEC)
mbitbot.move_servo_pin(mbitbot.SePin.Sepin1, 90)
mbitbot.move_servo_pin(mbitbot.SePin.Sepin2, 90)
let speed = 0
