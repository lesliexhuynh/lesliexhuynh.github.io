console.log("the Message!!");

let theYear =  ["jan", "feb", "march"]
// console.log(typeof theYear)
// console.log(typeof myName)

theYear.push("april")
for (var i = 0; i <theYear.length; i++){
 // console.log(theYear[i]);
}
// pass the HTML element into a variable
// 
let theBody = document.querySelector('body');
// console.log(theBody);
let theButton = document.querySelector("button");
let theTxt = document.querySelector('h2');
//
// triggering an event with a callback function

document .querySelector(".toggleDisplay") .addEventListener("click", toggleDivDisplay);
   function toggleDivDisplay() {
      var x = document.querySelector(".div-visible");
      if (x.style.display === "none") {
         x.style.display = "block";
      } else {
         x.style.display = "none";
      }
   }
