function positionElement(elementID, posistyle, init_x, init_y, final_x, final_y, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    elem.style.position = posistyle;
    elem.style.left = init_x + "px";
    elem.style.top = init_y + "px";
    moveElement(elementID, final_x, final_y, interval);
}

addLoadEvent(function() {
    positionElement("testdiv", "relative", 0, 0, 300, 300, 50);
})