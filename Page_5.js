document.addEventListener("DOMContentLoaded", function () {
    function loadContent() {
      const contentDiv = document.getElementById("content");
  
      if (window.innerWidth <= 768) {
        // Load mobile HTML and CSS
        fetch('mobile.html')
          .then(response => response.text())
          .then(data => {
            contentDiv.innerHTML = data;
            document.getElementById('desktop-css').disabled = true;
          })
          .catch(error => console.error('Error loading mobile content:', error));
      } else {
        // Load desktop content
        fetch('desktop.html')
          .then(response => response.text())
          .then(data => {
            contentDiv.innerHTML = data;
            document.getElementById('desktop-css').disabled = false;
          })
          .catch(error => console.error('Error loading desktop content:', error));
      }
    }
  
    // Check viewport on load
    loadContent();
  
    // Check viewport on resize
    window.addEventListener("resize", loadContent);
  });
  