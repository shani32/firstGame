
import {draw,drawBack,choosenTool} from './draw.js'
import {removeFromBoard} from './remove.js'

const gameBoard = document.querySelector('.game-board')
const inventoryParts = document.querySelector('.collectedParts')
const inventoryTools=document.querySelector('.tools')

export const material = {
    sky: 0,
    cloud: 1,
    ground: 2,
    grass: 3,
    stone: 4,
    wood: 5,
    water: 6,
    twitter: 7,
    ground_limit: 14,
    chosenElementFromInventory:'',
    chosenTool:'',
    inventory:{
        ground: 0,
        grass:0,
        stone: 0,
        wood: 0,
        water:0,
        twitter:0
        },
    tools:{
        axe:['wood','grass'],
        pickAxe:['stone', 'twitter'],
        shofel:['ground', 'water'],
    }
};
export const matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0],
    [0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 7, 0],
    [0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 5, 3, 4, 0],
    [4, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 4, 0],
    [4, 0, 0, 0, 5, 5, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 4, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 6, 6, 6, 2, 2, 6, 6, 6, 2, 2, 6, 6, 6, 2, 2, 6, 6, 6],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
]


// let matrixFull;
// function newWorld(){
// matrixFull=[Math.floor(Math.random() * matrix[i].length)+1]
// }
// newWorld()

function main() {
    
    draw(matrix,gameBoard);
    choosenTool(material,inventoryTools)
    removeFromBoard(matrix,gameBoard);
    drawBack(material,gameBoard,inventoryParts,matrix);
    
}

main();