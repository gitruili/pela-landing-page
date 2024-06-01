document.addEventListener("DOMContentLoaded", function () {
  let currentView = window.innerWidth <= 768 ? 'mobile' : 'desktop';

  function loadContent() {
    const contentDiv = document.getElementById("content");
    const newView = window.innerWidth <= 768 ? 'mobile' : 'desktop';

    if (newView !== currentView) {
      currentView = newView;
      
      if (newView === 'mobile') {
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
  }

  // Check viewport on load
  loadContent();

  // Check viewport on resize
  window.addEventListener("resize", loadContent);
});
