
import { material } from "./general.js";

export function draw(matrix,gameBoard) {
    gameBoard.innerHTML='';
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {

            let str = '';
            switch (matrix[i][j]) {
                case material.sky:
                    str = `<div class="sky" id='${i} ${j}' > </div>`
                    break;
                case material.cloud:
                    str = `<div class="cloud" id='${i} ${j}'> </div>`
                    break;
                case material.ground:
                        str = `<div class="ground" id='${i} ${j}'> </div>`
                    break;
                case material.grass:
                    str = `<div class="grass" id='${i} ${j}'> </div>`
                    break;
                case material.stone:
                    str = `<div class="stone" id='${i} ${j}'> </div>`
                    break;
                case material.wood:
                    str = `<div class="wood" id='${i} ${j}'> </div>`
                    break;
                case material.water:
                    str = `<div class="water" id='${i} ${j}'> </div>`
                    break;
                case material.twitter:
                    str = `<div class="twitter" id='${i} ${j}'> </div>`
            }
            gameBoard.innerHTML += str;
        }
    }
}
//side bar functions
// if the inventory is greater than 0 i will draw it on the right class
//it will update it in the inventoryParts 
export function drawInventoryParts(material,inventoryParts) {
    
    inventoryParts.innerHTML='';
      Object.keys(material.inventory).forEach(key=>{
          if(material.inventory[key]>0){
            let str = '';
            str=`<div class='${key} sizing-box flexing-center' >${material.inventory[key]}</div>`
            inventoryParts.innerHTML += str; 
          }
      })
}


function chosenElement(material,inventoryParts){
    inventoryParts.addEventListener('click',(item)=>{
        material.chosenElementFromInventory=item.target.classList[0];
        material.chosenTool=''
    });
}

export function choosenTool(material,inventoryTools){
    inventoryTools.addEventListener('click',(item)=>{
        material.chosenTool=item.target.classList[0];
        material.chosenElementFromInventory='';
  });
 }

//pass the piece back to board from inventory and short inventory by one
export function drawBack(material,gameBoard,inventoryParts,matrix){
   chosenElement(material,inventoryParts);
   gameBoard.addEventListener('click',(e)=>{
       
    if(material.chosenElementFromInventory !== '' && material.inventory[material.chosenElementFromInventory]>0 ){
        let idPiece=e.target.id;
        let blockPoint=idPiece.split(" ");
        blockPoint=blockPoint.map(item=>+item)
        let x=blockPoint[0];
        let y=blockPoint[1];
        if(matrix[x][y]===material.sky){
            matrix[x][y]=material[material.chosenElementFromInventory];
            Object.keys(material).forEach(key=>{
               if( material[key]===matrix[x][y]){
                material.inventory[key]--;
               }
            });
            
             let addableDiv=document.getElementById(idPiece);
            addableDiv.classList.remove('sky');
            addableDiv.classList.add(material.chosenElementFromInventory);

            drawInventoryParts(material,inventoryParts);
            
        }
    }
   });
}

