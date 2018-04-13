window.onload = function() {
    //HTML owns innerHTML functions, better than document.write, but worse than DOM.(Web limited)
    var testdiv = document.getElementById("testdiv");
    testdiv.innerHTML = "<p>My name is <em>Jason</em> ! <img src='images/heart.jpg' width='100px' height='50px' /></p>";
    
}