document.addEventListener("DOMContentLoaded", function() {
    var titulo = document.querySelector("h1");
  
    titulo.addEventListener("mouseover", function() {
      this.style.color = "Green"; 
    });
  
    titulo.addEventListener("mouseout", function() {
      this.style.color = "";
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var titulo = document.querySelector("h2");
  
    titulo.addEventListener("mouseover", function() {
      this.style.color = "Green"; 
    });
  
    titulo.addEventListener("mouseout", function() {
      this.style.color = "";
    });
  });