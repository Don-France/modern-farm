// Define and export the plantSeeds function
// The plantSeeds function must take years planting plan (yearlyPlan) as a parameter
//

import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
// Add plant was imported to be able to use the function to push the seed objects into plantsInField array in the field module
// Which is then used 
import { addPlant } from "./field.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
// plantSeeds takes in the yearlyPlan variable =createPlan() which pushes the seedObjects into the plans array in the createPlan()
export const plantSeeds = (plans) => {
    // First forEach is looping through the plans = (yearlyPlan) array
  plans.forEach((seedsInRows) => {
    // Second forEach is iterating throught the sub-arrays inside the yearlyPlan array
    seedsInRows.forEach((seed) => {
        // Switch is looking at each seed in the array and comparing to the case
      switch (seed) {  
        // Case is = to an if statement
        case "Potato":
          addPlant(createPotato());
          
          break;
          case "Soybean":
          addPlant(createSoybean());
          
          break;
          case "Sunflower":
          addPlant(createSunflower());
          
          break;
          case "Corn":
          addPlant(createCorn());
          
          break;
          case "Wheat":
          addPlant(createWheat());
          
          break;
          case "Asparagus":
          addPlant(createAsparagus());
          
          break;
          
        default:
          break;
      }
    });
  });
  {
  }
 
};
