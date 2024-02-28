//2.Get all items containing only Vitamin C.

 let itemsData = require("./itemsData.cjs");

 function getItemsContainingVitaminC(data){
   let items=data.reduce((acc,cv)=>{
      if(cv.contains.includes("Vitamin C")){
          acc.push(cv.name);
      }
      return acc;

  },[]);

  return items;
}

 

 console.log(getItemsContainingVitaminC(itemsData));

 module.exports = getItemsContainingVitaminC