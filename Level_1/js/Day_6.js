window.onload = function() {
    //HTML owns innerHTML functions, better than document.write, but worse than DOM.(Web limited)
    var testdiv = document.getElementById("testdiv");
    testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>";
}