basic.forever(function () {
    if (input.soundLevel() == 0) {
        basic.showLeds(`
            # . # . #
            . # . # .
            . . . . .
            . # . # .
            # . # . #
            `)
    } else if (input.soundLevel() == 40) {
        basic.showLeds(`
            # . . . #
            . . # . .
            . # # # .
            . . # . .
            # . . . #
            `)
    } else if (input.soundLevel() < 45) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
    } else if (input.soundLevel() < 50) {
        basic.showLeds(`
            # . . . #
            . . # . .
            . # # # .
            . . # . .
            # . . . #
            `)
    } else if (input.soundLevel() < 60) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
    } else if (input.soundLevel() < 65) {
        basic.showLeds(`
            # . . . #
            . . # . .
            . # # # .
            . . # . .
            # . . . #
            `)
    } else if (input.soundLevel() < 70) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
    } else {
    	
    }
})
