//5. Sort items based on number of Vitamins they contain.

    //NOTE: Do not change the name of this file

    let itemsData = require("./itemsData.cjs");


    function sortItemsBasedOnNumberOfVitamins(data){
        let result=data.sort((a,b)=>{
            return a.contains.split(",").length-b.contains.split(",").length;
        })
    
        return result;
    }
    
     console.log(sortItemsBasedOnNumberOfVitamins(itemsData));

    module.exports=sortItemsBasedOnNumberOfVitamins;

    