/* 
  Elements :
  p (no class or id)
  h1 (no class or id)
  h1 (no class or id) 
  button top (class = "size-12")
  button middle (id = "size-14")
*/

//* Set the font-size on the body to 24px;
document.querySelector("body").style.fontSize = "24px";

//* Select the p element and set the color to white;
document.querySelector("p").style.color = "white";

//* Using querySelectorAll, select the h1 elements and set the font color to white;
const headingTags = document.querySelectorAll("h1");
headingTags.forEach(element => (element.style.color = "white"));

//* Select the two top buttons and set the text color to black
document.querySelector(".size-12").style.color = "black";
document.querySelector("#size-14").style.color = "black";

//* Using closures and the factory pattern, write a function that takes in a size parameter
//* and adjust the body font size based on the passed parameter.
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = `${size}px`;
  };
}

//* Now create three variables, size12, size14, and size16. Each will use the makeSizer function.
const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);

//* Now add an onclick event to each button using the about variables.
/* 
  button top = class "size-12";
  button middle = id "size-14";
  button bottom = class "size-16";
*/
document.querySelector(".size-12").onclick = size12;
document.querySelector("#size-14").onclick = size14;
document.querySelector(".size-16").onclick = size16;

//* Using the module pattern and closures, create a variable named counter.
//* counter show have a
//* private var named privateCounter set the 0
//* private Function named changeBy.
//* changeBy will take in a number and change the privateCounter by that number.
//* The only public methods will be :
//* increment = a function to increase the counter by 1 using the private method changeBy
//* decrement = a function to decrease the counter by 1 using the private method changeBy
//* value = a function to return the private counter

const counter = (function() {
  let privateCounter = 0;
  function changeBy(num) {
    privateCounter += num;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter);
console.dir(counter);
console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1
