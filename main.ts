/**
 * The micro:bit person will do a short dance on the LED grid 8 times and end on the first dance move when A is pressed.
 */
// Press A button to activate the code
// repeat these dance moves 8 times
for (let index = 0; index < 0; index++) {
    // first dance move
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    // second dance move
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
}
