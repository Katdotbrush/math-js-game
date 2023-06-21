/* 
    Math game!
    By Kat.brush, learning JS.

    It's OK, you can change the source code if you want ; )
*/


import PromptSync from "prompt-sync";
import chalk from "chalk";

const prompt = PromptSync() // for stdin stuff...

var player = ''
var points = 0
var correct = 0

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function begin() {
    console.log(`\t${chalk.bgGreen.italic('Math game \n')}`)

    console.log(
        `So, it is a basic ${chalk.italic('math game')}.\nIf you get it correctly, you ${chalk.green('win')} a point.\nOtherwise, you ${chalk.red('lose')} it.\n
        ${chalk.bgGreenBright.italic('Good luck!')}\n`
    )
}

function game(num1, num2) {
    for(var i = 0; i < 10; i++){
        num1 = getRandomInt(50)
        num2 = getRandomInt(225)

        console.log(`${chalk.yellow(`${i}. Question`)}\nWhich is the result between ${num1} + ${num2}?\n`)
        player = Number(prompt(`${chalk.italic('Your answer: ')}`))

        if(player == (num1 + num2)){
            console.log(`Congrats! You won ${chalk.green('+1 point')}.\n`)
            points += 1
            correct += 1
        }
        else {
            console.log(`Bad! You lost ${chalk.red('-1 point')}.\n`)
            points -= 1
        }

    }
    console.log(`\nYour amount of points is ${chalk.green(points)}! And you could right ${chalk.green(correct)} questions!`)
}


begin()
game()