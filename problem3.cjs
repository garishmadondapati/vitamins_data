// 3. Get all items containing Vitamin A.

let itemsData = require("./itemsData.cjs");

function getItemsContainingVitaminA(data){
    let items=data.reduce((acc,cv)=>{
            if(cv.contains.includes("Vitamin A")){
                acc.push(cv.name);
            }
            return acc;
    
        },[]);
    
        return items;
    }

console.log(getItemsContainingVitaminA(itemsData))

module.exports = getItemsContainingVitaminA

