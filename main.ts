basic.showLeds(`
    . . # . .
    . # . # .
    # . . . #
    . # . # .
    . . # . .
    `)
I2C_LCD1602.i2cLcdInit(39)
I2C_LCD1602.i2cLcdBacklightOff()
basic.pause(500)
I2C_LCD1602.i2cLcdBacklightOn()
I2C_LCD1602.i2cLcdShowString("OSOYOO", 0, 0)
I2C_LCD1602.i2cLcdShowString("Hello", 3, 1)
I2C_LCD1602.i2cLcdOff()
basic.pause(500)
I2C_LCD1602.i2cLcdOn()
basic.forever(function () {
    I2C_LCD1602.i2cLcdShowNumber(randint(0, 9), randint(0, 15), randint(0, 1))
    basic.pause(100)
})
