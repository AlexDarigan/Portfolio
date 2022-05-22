var count = 0;
function onButtonPressed() {
    var b = document.getElementById("myButton");
    count = count + 1;
    b.innerHTML = "Clicked " + count.toString() + " Times";
    console.log("clicked button " + count.toString() + " Times");
}