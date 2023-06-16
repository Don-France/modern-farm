export const catalog = (foodForSale) => {
let foodAsHTMLString = ""
// foodForSale parameter is replaced by the plantsForSale argument which is the harvestedFood[] from harvestPlants()
for (const food of foodForSale) {
    foodAsHTMLString += `
    <section class="plant">${food.type}</section>`

}
// document.query targets the class of message and appendss the foodAsHTMLString output to the HTML
// inner.HTML sets the HTML containes in the element of the <div class="messages"></div>
document.querySelector(".messages").innerHTML = foodAsHTMLString
}