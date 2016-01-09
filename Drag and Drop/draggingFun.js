function drag(target, evt) {
    evt.dataTransfer.setData("Text", target.id);
}
function drop(target, evt) {
    var id = evt.dataTransfer.getData("Text");
    target.appendChild(document.getElementById(id));
    // prevent default behavior
    evt.preventDefault();
}