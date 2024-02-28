// 3. Get all items containing Vitamin A.

let itemsData = require("./itemsData.cjs");

function getItemsContainingVitaminA(data){
    return data.filter(item => item.contains.includes("Vitamin A"));
}

console.log(getItemsContainingVitaminA(itemsData))

module.exports = getItemsContainingVitaminA

