// Define a variable that holds an empty array to store all of the plants that are growing in the field
// Do not export the empty array

const plantsInField = [];

// Define an export  addPlant() that will except a seed object as input. This function will add new seed to the field
// The seed will be added when the usePlants() is invoked
// addPlant(seedObject) comes from the tractor.js plantSeeds()
export const addPlant = (seedObject) => {
  // Array.isArray is checking if any of the objects contain an array
  if (Array.isArray(seedObject)) {
    seedObject.forEach((seed) => {
        // If the object is in an array add the objects to the plantsInField[]
      plantsInField.push(seed);
    });
  } else {
    // If not in an array add the objects to the plantsInField[]
    plantsInField.push(seedObject);
  }
};

// Define and export the usePlants function that returns a copy of the array of plantsInField
export const usePlants = () => {
  return plantsInField;
};
// console.log(plantsInField)
