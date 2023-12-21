namespace SpriteKind {
    export const Text = SpriteKind.create()
    export const StatusBar = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const Booth = SpriteKind.create()
    export const Mouse = SpriteKind.create()
    export const Crosshair = SpriteKind.create()
    export const Moon = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (info.player2.hasLife()) {
        dart2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 2 2 2 2 2 . . . . . . . . . . 
            5 5 5 5 2 2 2 2 2 2 2 . . . . . 
            5 5 5 2 2 2 2 4 4 4 4 2 . . . . 
            5 5 5 5 2 2 2 2 2 2 2 . . . . . 
            . 2 2 2 2 2 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player2, 200, 0)
    }
    music.play(music.createSoundEffect(WaveShape.Square, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
info.player4.onLifeZero(function () {
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        `)
    if (!(info.player1.hasLife()) && (!(info.player2.hasLife()) && !(info.player3.hasLife()))) {
        game.showLongText("Player 4 Wins!", DialogLayout.Bottom)
        game.over(true)
    } else {
        game.showLongText("Player 4 is out :-(", DialogLayout.Bottom)
        player4.destroy()
    }
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    sprites.destroy(sprite)
    scene.cameraShake(8, 500)
})
info.player3.onLifeZero(function () {
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        `)
    if (!(info.player1.hasLife()) && (!(info.player2.hasLife()) && !(info.player4.hasLife()))) {
        game.showLongText("Player 3 Wins!", DialogLayout.Bottom)
        game.over(true)
    } else {
        game.showLongText("Player 3 is out :-(", DialogLayout.Bottom)
        player3.destroy()
    }
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (info.player4.hasLife()) {
        dart4 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . b d b c . . . . . 
            . . . . b b c 5 5 5 c b b . . . 
            . . . . b 5 5 5 1 5 5 5 b . . . 
            . . . c c 5 5 5 1 5 5 5 c c . . 
            . . b b 5 5 5 1 1 1 5 5 5 b b . 
            . . d d 5 1 1 1 1 1 1 1 5 d d . 
            . . b b 5 5 5 1 1 1 5 5 5 b b . 
            . . . c c 5 5 5 1 5 5 5 c c . . 
            . . . . b 5 5 5 1 5 5 5 b . . . 
            . . . . b b c 5 5 5 c b b . . . 
            . . . . . . c b d b c . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player4, 200, 0)
    }
    music.play(music.createSoundEffect(WaveShape.Square, 3633, 2621, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (info.player1.hasLife()) {
        dart1 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 3 3 3 3 2 . . . . 
            . 2 2 2 3 3 1 1 1 1 1 3 2 . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 2 . . . 
            . 2 2 2 3 3 1 1 1 1 1 3 2 . . . 
            . . . . . 2 2 2 3 3 3 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player1, 200, 0)
    }
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
info.player1.onLifeZero(function () {
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        `)
    if (!(info.player2.hasLife()) && (!(info.player3.hasLife()) && !(info.player4.hasLife()))) {
        game.showLongText("Player 1 Wins!", DialogLayout.Bottom)
        game.over(true)
    } else {
        game.showLongText("Player 1 is out :-(", DialogLayout.Bottom)
        player1.destroy()
    }
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (info.player3.hasLife()) {
        dart3 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . d d d d d d . . . . 
            . . . . . d 5 5 4 4 2 2 d . . . 
            . . . . . d 5 5 4 4 2 2 d . . . 
            . . . . . d 5 5 4 4 2 2 d . . . 
            . . . . . d 5 5 4 4 2 2 d . . . 
            . . . . . . d d d d d d . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player3, 200, 0)
    }
    music.play(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
info.player2.onLifeZero(function () {
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        `)
    if (!(info.player1.hasLife()) && (!(info.player3.hasLife()) && !(info.player4.hasLife()))) {
        game.showLongText("Player 2 Wins!", DialogLayout.Bottom)
        game.over(true)
    } else {
        game.showLongText("Player 2 is out :-(", DialogLayout.Bottom)
        player2.destroy()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == dart1) {
        info.player1.changeScoreBy(1)
    } else if (sprite == dart2) {
        info.player2.changeScoreBy(1)
    } else if (sprite == dart3) {
        info.player3.changeScoreBy(1)
    } else {
        info.player4.changeScoreBy(1)
    }
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == player1) {
        info.player1.changeLifeBy(-1)
        scene.cameraShake(4, 200)
    } else if (sprite == player2) {
        info.player2.changeLifeBy(-1)
        scene.cameraShake(4, 200)
    } else if (sprite == player3) {
        info.player3.changeLifeBy(-1)
        scene.cameraShake(4, 200)
    } else {
        info.player4.changeLifeBy(-1)
        scene.cameraShake(4, 200)
    }
    otherSprite.destroy(effects.spray, 200)
})
let bogey: Sprite = null
let dart3: Sprite = null
let dart1: Sprite = null
let dart4: Sprite = null
let dart2: Sprite = null
let player4: Sprite = null
let player3: Sprite = null
let player2: Sprite = null
let player1: Sprite = null
music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.LoopingInBackground)
tiles.setCurrentTilemap(tilemap`level4`)
scene.setBackgroundImage(img`
    9999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    8877777777779999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    887777777777777799999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    88877777777777777779999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    8888777777777777777777999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    88888888888888888888777799999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    8888888888888888888888777799999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    88888888888888888888888777799999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    888888866666666666688888777779999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    8878888666666666666668888777779999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    88778886666666646666688887777777999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    887788886666664446666668887777777999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    8877788886666444446666688887777777999999ffffffffffffffffffffccccccffffffffffffffffffffffffffffffffff
    7777bbbbbbb666464666666688877777777999999fffffffffffffffccccffffffffffffffffffffffffffffffffffffffff
    777bbbbbbbbb664446666666888877777777999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77bbbcc4ccbbb666666666668888877777777999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77bbcc444ccbb6666688888888888877777788899999ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77bbc44444cbb8666688888888888888777788899999ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77bbcc4c4ccbb86666888888888888888887888799999fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    88bbcc444ccbb888888887777778888888888887999999ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    88bbcccccccbb888888877777777778888888886669999ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    88bbbcccccbbb8888888777777777777788888866699999fffffffffffffffffffffffffffffffffffffffffffffffffffff
    888bbbbbbbbb77888887777777777777778888866699999fffffffffffffffffffffffffffffffffffffffffffffffffffff
    6688bbbbbbb88888888777bbbbb777777778888666699999ffffffffffffffffffffffffffffffffffffffffffffffffffff
    666668888888888888877bbbbbbb77777778888666669999ffffffffffffffffffffffffffffffffffffffffffffffffffff
    666666666668888888877bbbcccb777777788886666669999fffffffffffffffffffffffffffffffffffffffffffffffffff
    666666666668888788888bbbcccb777777788886666669999fffffffffffffffffffffffffffffffffffffffffffffffffff
    666666666668888788888bbbcccb7777788888866666669999ffffffffffffffffffffffffffffffffffffffffffffffffff
    666666666668887788888bbbbbbb7777888888866666669999ffffffffffffffffffffffffffffffffffffffffffffffffff
    6666666666888777778887bbbbb777888888888666666699999fffffffffffffffffffffffffffffffffffffffffffffffff
    666666666888777778888777777778888887788666666699999fffffffffffffffffffffffffffffffffffffffffffffffff
    666666688877777778888877777888888877788666666679999fffffffffffffffffffffffffffffffffffffffffffffffff
    6666688887777777788888877888888877777886666666699999ffffffffffffffffffffffffffffffffffffffffffffffff
    6666688877777777888888888888888777777886666666699999ffffffffffffffffffffffffffffffffffffffffffffffff
    6666688777777777888888888888bbbbbbb77886666666669999ffffffffffffffffffffffffffffffffffffffffffffffff
    666668777777777888888888888cccccccbb7886666666669999ffffffffffffffffffffffffffffffffffffffffffffffff
    66668877477777888888888877cccc4ccccbb888666666669999ffffffffffffffffffffffffffffffffffffffffffffffff
    66688874447777888877888887ccc444cccbb8886666666669999fffffffffffffffffffffffffffffffffffffffffffffff
    66888744444777888777788887cc44444ccbb8886666666669999fffffffffffffffffffffffffffffffffffffffffffffff
    66888774747778888777778888ccc4c4cccbb8886666666669999fffffffffffffffffffffffffffffffffffffffffffffff
    66688774447788888777778888ccc444cccbb8666666666669999fffffffffffffffffffffffffffffffffffffffffffffff
    66688777777788887777777888cccccccccbb6666666666669999fffffffffffffffffffffffffffffffffffffffffffffff
    66688777777788877777777788cccccccccbb6666646666666999fffffffffffffffffffffffffffffffffffffffffffffff
    666877777778888777777777888cccccccbb86666444666666999fffffffffffffffffffffffffffffffffffffffffffffff
    6688777777888887777777777888bbbbbbb886664444466666999fffffffffffffffffffffffffffffffffffffffffffffff
    668877777788887777bbbbb778888777778886666464666666999fffffffffffffffffffffffffffffffffffffffffffffff
    668887777888877777bcccb778888777788886666444666666999fffffffffffffffffffffffffffffffffffffffffffffff
    668887778888877777bcccb777888777788866666666666666999fffffffffffffffffffffffffffffffffffffffffffffff
    668888778888777777bcccb777888777888866666666666666999fffffffffffffffffffffffffffffffffffffffffffffff
    668888888887777777bbbbb777888878888866666666666666999fffffffffffffffffffffffffffffffffffffffffffffff
    66688822228777777777777777888888888888666666666666999fffffffffffffffffffffffffffffffffffffffffffffff
    66666222228777777777777777788888888888886666666666999fffffffffffffffffffffffffffffffffffffffffffffff
    66666222228877777777777777788888877888888866666666999fffffffffffffffffffffffffffffffffffffffffffffff
    66666222222287777777777777788888777778888886666666999fffffffffffffffffffffffffffffffffffffffffffffff
    666666222222bbbbbbb7777777888888777778888886666666999fffffffffffffffffffffffffffffffffffffffffffffff
    666666622222bbbbbbbbb77778888888777777788886666666999fffffffffffffffffffffffffffffffffffffffffffffff
    6666666bb222bbbbbbbbbb7888888888877777778886666666999fffffffffffffffffffffffffffffffffffffffffffffff
    666666bbb222ccccccbbbbb88888788887777777788666666699ffffffffffffffffffffffffffffffffffffffffffffffff
    66666bbbb222ccccccccbbbb8887788888777777788886666999ffffffffffffffffffffffffffffffffffffffffffffffff
    66666bbbc222ccccc222cbbb8877778888777777778886669999ffffffffffffffffffffffffffffffffffffffffffffffff
    66666bbbc222ccccc2222bbbb777777888777777778886669999ffffffffffffffffffffffffffffffffffffffffffffffff
    62222bbcc222aaaaa222222bb777778888777227778886669999ffffffffffffffffffffffffffffffffffffffffffffffff
    62222222cccaccccc2222222b77777888877727777888889999fffffffffffffffffffffffffffffffffffffffffffffffff
    62222222222acccccac22222222222288777727777888889999fffffffffffffffffffffffffffffffffffffffffffffffff
    66222222222acccccacc22222222222887bbb2b777788889999fffffffffffffffffffffffffffffffffffffffffffffffff
    6666b222222acccccaccc22222222228822b22bb7778888999ffffffffffffffffffffffffffffffffffffffffffffffffff
    6666bbbccccacccccaccccbbb22222888bcccbbb7777779999ffffffffffffffffffffffffffffffffffffffffffffffffff
    6666bbbcccccaaaaacccccbbb22222888bcccbbb777779999fffffffffffffffffffffffffffffffffffffffffffffffffff
    6666bbbbcccc222ccccccbbbb77777888bccc22b777779999fffffffffffffffffffffffffffffffffffffffffffffffffff
    66688bbbcccc2222cccccbbb777777888b2bbb2b77779999ffffffffffffffffffffffffffffffffffffffffffffffffffff
    66688bbbbccc22222cccbbbb77777788822bbbb777779999ffffffffffffffffffffffffffffffffffffffffffffffffffff
    88888666bbbc22222cbbbbb777777788822777777779999fffffffffffffffffffffffffffffffffffffffffffffffffffff
    88886666bbbbb22222bbbb7777777788877777777799999fffffffffffffffffffffffffffffffffffffffffffffffffffff
    88866666bbbb222222bbb7774777778887777777779999ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    886666666662222222b887744477778887777777799999ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    666666666662222268887744444777888777777799999fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    66666666666222226887777474777788877777779999ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    66664666666222226887777444777788877777799999ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    6664446666622266887777777777778887777799999fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    664444466666666688777777777777888777799999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    666464666666666687bbbbb777777788877799999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    666444666666666887bcccb77777778887799999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    666666666666668877bcccb7777778888799999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    666666666666888877bcccb777777888899999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    666666666668887777bbbbb77777788899999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    666666666888877777777777777778889999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    66666666888887777777777777779999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    6666666888887777777777777779999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    66666888887777777777777777999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    6666888887777777777777779999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    88888877777777777777779999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    888887777777777777799999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    8887777777777777999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77777777777799999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.splash("protect the planet", " press A")
effects.starField.startScreenEffect()
player1 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ..............199...............
    .............c196...............
    .............c119.d.............
    .............cc1.ddd.899........
    .............2c11dd..896........
    .............411d....888aaa.....
    ..............11.....828a.......
    ..............1b......2.........
    ..............b.......4.........
    ......................5.........
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
player1.setPosition(20, 15)
player1.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(player1, 200, 200)
info.player1.setLife(10)
info.player1.setScore(0)
player2 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ..............899...............
    .............c896...............
    .............c889...............
    .............cc8a...a.aa........
    .............2c88aaaaa245.......
    .............4888a.a..aa........
    ..............88................
    ..............8b................
    ..............b.................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
player2.setPosition(20, 45)
player2.setFlag(SpriteFlag.StayInScreen, true)
controller.player2.moveSprite(player2, 200, 200)
info.player2.setLife(10)
info.player2.setScore(0)
player3 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ..............299...............
    .............c296...............
    .............c229.ddd...........
    .............cc2..d2d...........
    .............2c22.d2d...........
    .............422..ddd...........
    ..............22................
    ..............2b................
    ..............b.................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
player3.setPosition(20, 75)
player3.setFlag(SpriteFlag.StayInScreen, true)
controller.player3.moveSprite(player3, 200, 200)
info.player3.setLife(10)
info.player3.setScore(0)
player4 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ..............599...............
    .............c596..aa...........
    .............c559.7aa...........
    .............cc5..77............
    .............2c557..............
    .............4557...............
    ..............55................
    ..............5b................
    ..............b.................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
player4.setPosition(20, 105)
player4.setFlag(SpriteFlag.StayInScreen, true)
controller.player4.moveSprite(player4, 200, 200)
info.player4.setLife(10)
info.player4.setScore(0)
game.onUpdateInterval(1000, function () {
    if (true) {
        bogey = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 . . . . . . . 
            . . . . . 1 9 9 9 1 . . . . . . 
            . . . . 1 1 9 9 9 1 1 . . . . . 
            . . . . 1 b b b b b 1 . . . . . 
            . . . b b b a a a b b b . . . . 
            . . b b a a a a a a a b b . . . 
            . . b c c c c c c c c c b . . . 
            . . b b a a a a a a a b b . . . 
            . . . b b b a a a b b b . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . 7 7 7 7 7 7 7 7 7 . . . . 
            `, SpriteKind.Enemy)
        bogey.setVelocity(-23, 0)
        bogey.setPosition(180, randint(0, 120))
    } else {
    	
    }
})
game.onUpdateInterval(500, function () {
    if (true) {
        bogey = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . . 7 a 7 7 7 . . . . . . 
            . . . . . 7 b 7 7 7 . . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . 7 7 7 7 . . . . . . . 
            . . . . . . 7 7 . . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        bogey.setVelocity(-35, 0)
        bogey.setPosition(180, randint(0, 120))
    } else {
    	
    }
})
