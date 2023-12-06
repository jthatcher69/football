namespace SpriteKind {
    export const Football = SpriteKind.create()
    export const Goal = SpriteKind.create()
    export const Obstacle = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.stopDart()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
sprites.onOverlap(SpriteKind.Football, SpriteKind.Obstacle, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Football, SpriteKind.Goal, function (sprite, otherSprite) {
    game.splash("Goal!!")
    game.gameOver(true)
})
let mySprite2: Sprite = null
let myDart: Dart = null
myDart = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 f 2 f 2 f . . . . . . . 
    . . 2 f 2 f 2 f 2 f . . . . . . 
    . . . 2 f 2 f 2 f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Football)
myDart.setTrace()
myDart.controlWithArrowKeys()
let mySprite = sprites.create(img`
    .............cc.
    ............cbbc
    ............cbbc
    ...........bdcc.
    ...........bdbb.
    ..........bddc..
    ..........bdbb..
    .........bddc...
    .........bdbb...
    ........bddc....
    ........bdbb....
    .......bddc.....
    .......bdbb.....
    ......bddc......
    ......bdbb......
    .....bddc.......
    .....bdbb.......
    ....bddc........
    ....bdbb........
    ...bddc.........
    ...bdbb.........
    ..bddc..........
    ..bdbb..........
    .bddc...........
    .bdbb...........
    b1dc............
    b11c............
    b11c............
    b11c.........cc.
    b11c........cbbc
    b11c........cbbc
    b11c.......bdcc.
    b11c.......bdbb.
    b11c......bddc..
    b11bccc...bdbb..
    b11bbbbcccddc...
    b11bcccbccdbb...
    b11b..ccbddc....
    b11b...ccdbbc...
    b11b...bddcbc...
    b11b...bdbbcbc..
    b11b..bddc.fbc..
    b11b..bdbb.fbf..
    b11b.bddc..fcf..
    b11b.bdbb..fcf..
    b11bbddc...fcf..
    b11bbdbb...fcf..
    b11bddc...cfcfc.
    b11ddbb..cbfcfbc
    b1dddc...cdfffdc
    b1ddbb...cdcfcdc
    cdddc....cbdddbc
    cddbb....cbbbbbc
    cddc.....cbbbbbc
    cdbb.....cbbbbbc
    .cc......cbbbbbc
    .........cbbbbbc
    .........cbbbbbc
    .........cbbbbbc
    .........8bbbbb8
    .........8bbbbb8
    .........6bbbbb6
    ..........6bbb6.
    ...........666..
    `, SpriteKind.Goal)
mySprite.setPosition(150, 95)
scene.setBackgroundColor(9)
for (let index = 0; index < 3; index++) {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . d d 2 2 . . . . . . . 
        . . . . 1 1 1 2 2 . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . d 2 2 5 2 2 2 2 2 5 . . . . . 
        . d 2 2 2 2 5 5 5 2 . . . . . . 
        . . . . . 2 2 2 5 2 . . . . . . 
        . . . . 2 2 2 2 5 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . 2 . . 2 . . . . . . 
        . . . . . 2 2 . 2 2 . . . . . . 
        . . . . . f f . f f . . . . . . 
        `, SpriteKind.Obstacle)
    mySprite2.setPosition(randint(0, 110), randint(20, 90))
}
