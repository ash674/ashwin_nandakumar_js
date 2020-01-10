(() => {
console.log("some message - from javascript");
 let theButton = document.querySelector("#myButton"),
 theHeading = document.querySelector('h1'),
 theSvg = document.querySelector('#svgGraphic');



function Changetext() {

  theHeading.textContent = "Bruh1";

}

function logSvg() {

console.log(this.id);

}

theButton.addEventListener("click", Changetext);
theSvg.addEventListener("mouseover", logSvg);

})();
