input.onButtonPressed(Button.A, function () {
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin1, 90)
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin2, 120)
    strip.setPixelColor(3, neopixel.hsl(0, 0, 10))
    strip.setPixelColor(0, neopixel.hsl(0, 0, 0))
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin1, 60)
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin2, 90)
    strip.setPixelColor(0, neopixel.hsl(0, 0, 10))
    strip.setPixelColor(3, neopixel.hsl(0, 0, 0))
    strip.show()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin1, 90)
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin2, 90)
    strip.clear()
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P12, 4, NeoPixelMode.RGB)
strip.clear()
strip.show()
mbitbot.move_servo_pin(mbitbot.SePin.Sepin1, 90)
mbitbot.move_servo_pin(mbitbot.SePin.Sepin2, 90)
basic.forever(function () {
    if (input.lightLevel() > 128) {
        mbitbot.move_servo_pin(mbitbot.SePin.Sepin1, 60)
        mbitbot.move_servo_pin(mbitbot.SePin.Sepin2, 120)
    } else {
        mbitbot.move_servo_pin(mbitbot.SePin.Sepin1, 90)
        mbitbot.move_servo_pin(mbitbot.SePin.Sepin2, 90)
    }
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
})
