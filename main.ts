input.onPinPressed(TouchPin.P0, function () {
    music.playTone(294, music.beat(BeatFraction.Half))
})
input.onPinPressed(TouchPin.P2, function () {
    music.playTone(392, music.beat(BeatFraction.Half))
})
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(330, music.beat(BeatFraction.Half))
})
music.setTempo(120)
basic.forever(function () {
    led.toggle(randint(0, 4), randint(0, 4))
})
