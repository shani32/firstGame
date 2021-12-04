
import { material } from "./general.js";
import {drawInventoryParts} from './draw.js'

const inventoryParts = document.querySelector('.collectedParts')


export function removeFromBoard(matrix,gameBoard){
    
    gameBoard.addEventListener('click',(e)=>{
        let destroy=false;
         if(material.chosenElementFromInventory === ''){
        let idPiece=e.target.id;
        let blockPoint=idPiece.split(" ");
        console.log(blockPoint)
        blockPoint=blockPoint.map(item=>+item)// casting the numbers from char to int
        let x=blockPoint[0];
        let y=blockPoint[1];
        if(matrix[x][y]>material.cloud){
                 if(material.chosenTool!==''){
                 for(let k=0;k<material.tools[material.chosenTool].length;k++){
                     let element=material.tools[material.chosenTool][k];
                    if(matrix[x][y]===material[element]){
                       destroy=true;
                    }
                 
                }
            }
            else{alert("please pick a tool")}
                   
         
          if(destroy){
            Object.keys(material).forEach(key=>{
               if( material[key]===matrix[x][y]){
                material.inventory[key]++;
               }
            });
            matrix[x][y]=material.sky;
            let removableDiv=document.getElementById(idPiece);
            removableDiv.classList.remove(e.target.classList[0]);
            removableDiv.classList.add('sky');
            drawInventoryParts(material,inventoryParts);
        }
        }
    }
    })
}

