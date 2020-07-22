input.onGesture(Gesture.Shake, function () {
    if (index == 0) {
        music.playTone(659, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(659, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(659, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(659, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(784, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Whole))
        index += 1
    }
    if (index == 1) {
        control.waitMicros(3000000)
        for (let index2 = 0; index2 < 2; index2++) {
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(294, music.beat(BeatFraction.Quarter))
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(294, music.beat(BeatFraction.Quarter))
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(349, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Eighth))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.playTone(294, music.beat(BeatFraction.Whole))
        }
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (vol >= 0) {
        vol = vol + 10
        music.setVolume(vol)
    } else {
        vol = 100
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (vol > 0) {
        vol = vol - 10
        music.setVolume(vol)
    } else {
        vol = 0
    }
})
let index = 0
let vol = 0
vol = 100
control.inBackground(function () {
    while (index != -1) {
        if (index == 0) {
            basic.showString("Mario Bross")
        }
        if (index == 1) {
            basic.showString("Star Wars")
        }
    }
})
