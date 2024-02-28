//1.Get all items that are available

let itemsData = require("./itemsData.cjs");

function allItems(array){
    let all_items=array.map((element)=>{
        return element.name;
    })

    return all_items;
}
console.log(allItems(itemsData))

module.exports=allItems