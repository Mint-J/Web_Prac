function displayAccesskeys() {
    if (!document.getElementsByTagName || !document.createElement
    || !document.createTextNode) return false;
    var link = document.getElementsByTagName("a");
    var akeys = new Array();
    for (var i=0 ; i < link.length; i++) {
        var current_link = link[i];
        if (!current_link.getAttribute("cite")) continue;
        var key = current_link.getAttribute("accesskey");
        var text = current_link.lastChild.nodeValue;
        akeys[key] = text;
    }
    var list = document.createElement("ul");
    for (key in akeys) {
        var text = akeys[key];
        var str = key + ": " + text;
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Accesskeys");
    header.appendChild(header_text);
    document.getElementsByTagName("body")[0].appendChild(header);
    document.getElementsByTagName("body")[0].appendChild(list);

}

addLoadEvent(displayAccesskeys);