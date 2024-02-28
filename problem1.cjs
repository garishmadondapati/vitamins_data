//1.Get all items that are available 

let itemsData = require("./itemsData.cjs");

function allItemsThatAreAvailable(data){
    return data.filter(item=>item.available);
}

console.log(allItemsThatAreAvailable(itemsData))

module.exports=allItemsThatAreAvailable