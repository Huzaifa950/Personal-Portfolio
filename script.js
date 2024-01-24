const toggleNavBar = () => {
    let dropdownItems = document.getElementById("nav-bar-items");
    if (dropdownItems.style.display === "block") {
      dropdownItems.style.display = "none";
    } else {
      dropdownItems.style.display = "block";
    }
  };
  
  function updateNavDisplay() {
    var navBarItems = document.getElementById("nav-bar-items");
    if (window.innerWidth > 800) {
      navBarItems.style.display = "flex";
    }
  }
  
  window.addEventListener("resize", updateNavDisplay);