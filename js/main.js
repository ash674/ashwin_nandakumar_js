(() => {
console.log("some message - from javascript");
 let theButton = document.querySelector("#myButton"),
 theHeading = document.querySelector('h1'),
theSvg = document.querySelector('#svgGraphic');
buttontext = document.querySelector('button')
svgImage = document.querySelector("#svgGraphic")
svgImage2 = document.querySelector("#svgGraphic2")
allSVGs = document.querySelectorAll(".svg");
function Changetext() {

  theHeading.textContent = "hello";

}

function logSvg() {

console.log(this.id);

}

theButton.addEventListener("click", Changetext);
//svgImage.addEventListener("click", logSvg);
//svgImage2.addEventListener("click", logSvg);

allSVGs.forEach(item => item.addEventListener('click',logSvg));
})();
