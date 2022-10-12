makerbit.connectLcd(39)
basic.forever(function () {
    makerbit.showStringOnLcd1602("Temperatura", makerbit.position1602(LcdPosition1602.Pos1), 16)
    makerbit.showStringOnLcd1602("" + (input.temperature()), makerbit.position1602(LcdPosition1602.Pos17), 16)
    basic.pause(1000)
    makerbit.clearLcd1602()
    basic.pause(1000)
})
