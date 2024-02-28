//2.Get all items containing only Vitamin C.

 let itemsData = require("./itemsData.cjs");

 function getItemsContainingVitaminC(data){
    return data.filter(item => item.contains === "Vitamin C");
 }

 console.log(getItemsContainingVitaminC(itemsData));

 module.exports = getItemsContainingVitaminC