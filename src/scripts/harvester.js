// Define and export the harvestPlants function
// I will need the plants array to be able to iterate
// usePlants() contains the plantInField array
import { usePlants } from "./field.js";

export const harvestPlants = (planted) => {
  let harvestedFood = [];
  // Add the plant objects to the new array totaling the number each plants output
 for (const plants of planted) {
  if (plants.type === "Corn") {
    // 
    //  counter counts the number of iterations of the array, 
    let counter = 0
    // while counter < plants.output it loops through the while body until the condition is false, it will loop through 3 times
    while (counter< (plants.output / 2)) {
      // takes the value of counter and adds 1 to it. ++ is = +=1
      // For every corn object(there are 2 corn objects each with the output of 6) it will add  a corn plant into the harvestFood[] until the while condition is met
      counter ++
      harvestedFood.push(plants)
      
    }
    } else if (plants.output >= 2) {
   let i = 0
      while (i < plants.output) {
        i += 1
        harvestedFood.push(plants)
        
      } 
     }
    
  }
  // console.log(harvestedFood)
  return harvestedFood
 }
 




// const food = harvestPlants(usePlants());
// console.log(harvestPlants())










// planted.forEach (plant => {
//   const {output} = plant;
//   const addedPlants = Array.from({length: output}, () => ({...plant}))
//   harvestedFood.push(...addedPlants)
// });
// return harvestedFood
