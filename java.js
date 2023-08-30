//Declaration function
// function addNum(a, b) {
//     var result = a + b;
//     return result;
// }
// var x = addNum(3, 4);
// console.log(x);

///Expression function
// var y = function(a, b) {
//     var result = a + b;
//     return result;
// }
// var z = y(3, 4);
// console.log(z);

////self-invoking function
// (function() {
//     console.log('Hello');
// })();


function addElement(elementNumber, elementId, element) {
    var cartona = "";
    for (var i = 0; i < elementNumber; i++) {
        cartona += element;
    }
    document.getElementById(elementId).innerHTML = cartona;
}
addElement(3, "home", "<h2>web design</h2>")
addElement(3, "about", "<a href ='#'>about</a>")
addElement(3, "profile", "<img src='./1.PNG' alt='..'> ")