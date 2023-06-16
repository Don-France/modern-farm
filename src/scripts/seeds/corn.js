// Define an arrow function named createCorn to create two identical corn objects and export the function.
// Return an object with the .type, .height and.output properties and values

export const createCorn = () => {
  const cornObject = [
    { type: "Corn", height: 180, output: 6 },
    { type: "Corn", height: 180, output: 6 },
  ];
  return cornObject;
};
