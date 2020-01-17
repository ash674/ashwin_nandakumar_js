(() => {
console.log("some message - from javascript");
 let
 theHeading = document.querySelector('h1'),
theSvg = document.querySelector('#svgGraphic');
buttontext = document.querySelector('button')

allSVGs = document.querySelectorAll(".svg");
function Changetext() {

  theHeading.textContent = "hello";

}

function logSvg() {

console.log(this.id);

}


//svgImage.addEventListener("click", logSvg);
//svgImage2.addEventListener("click", logSvg);

allSVGs.forEach(item => item.addEventListener('click',logSvg));
})();
