function stripeTables(){
    if (!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    var odd, rows;
    for (var i=0; i < tables.length; i++){
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for (var i=0; i < rows.length; i++) {
            if (odd == true) {
                rows[i].style.backgroundColor = 'lightgreen';
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}