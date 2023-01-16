var sidebar = document.getElementById("sidebar");
var main = document.getElementById("main");
var drawer = document.getElementById("drawer");
var close = document.getElementById("close");

drawer.addEventListener('click', function () {
   drawer.className = "donsee";
    main.className = "donsee";
    sidebar.className = "see";
});

close.addEventListener('click', function () {
  drawer.className = "see";
    main.className = "see";
    sidebar.className = "donsee";
});