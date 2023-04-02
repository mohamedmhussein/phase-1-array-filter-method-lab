// Code your solution here

function findMatching(array, driver){
    return array.filter(item => item.toUpperCase() === driver.toUpperCase())
}

function fuzzyMatch(array, driver){
     return array.filter(item => {
        let i = 0;
        let match = true;
        for (const letter of driver){
          //console.log(i, match)
            if (letter !== item[i]){
              i++
              match = false;
            
          }
          i++
          //console.log(i, match)
            
        }
      return match  
       })
}

function matchName(drivers, property){
return drivers.filter(item =>  item.name === property)

}
//let de = fuzzyMatch(["Mohamed", "Mosad", "Moaz", "Sally"], "Sa")
//console.log(de)