const removeFromArray = function(firstSet,...secondSet) {
    
    const newArray = [];
    
    firstSet.forEach((item) => {

        if (!secondSet.includes(item)){
            newArray.push(item);
        }


    });
    return newArray;
   
};


// Do not edit below this line
module.exports = removeFromArray;
