input.onSound(DetectedSound.Loud, function () {
    lightson = !(lightson)
    if (lightson) {
        basic.showString("turning on")
        music.playMelody("G A B C5 - - - - ", 234)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showString("turning off")
        music.playMelody("B A G F - - - - ", 213)
        basic.clearScreen()
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.playMelody("G D E F E D E F ", 225)
    music.playMelody("A D E F E D E F ", 225)
    music.playMelody("B D E F E D E F ", 225)
    music.playMelody("C5 D E F E D E F ", 225)
    music.playMelody("A D E F E D E F ", 225)
    music.playMelody("B D E F E D E F ", 225)
    music.playMelody("C5 D E F E D E F ", 225)
    music.playMelody("C5 C5 C5 C5 C5 C5 B C5 ", 225)
    music.playMelody("C5 B A G F G A C5 ", 225)
})
let lightson = false
input.setSoundThreshold(SoundThreshold.Loud, 150)
