document.addEventListener("DOMContentLoaded", function () {
  function loadContent() {
    const contentDiv = document.getElementById("content");

    // Function to fetch and load content
    function fetchContent(view) {
      const file = view === 'mobile' ? 'mobile.html' : 'desktop.html';
      fetch(file)
        .then(response => response.text())
        .then(data => {
          contentDiv.innerHTML = data;
          document.getElementById('desktop-css').disabled = (view === 'mobile');
        })
        .catch(error => console.error(`Error loading ${view} content:`, error));
    }

    // Check initial viewport size and load corresponding content
    const initialView = window.innerWidth <= 768 ? 'mobile' : 'desktop';
    fetchContent(initialView);

    // Add event listener for resizing the window
    let currentView = initialView;
    window.addEventListener("resize", function () {
      const newView = window.innerWidth <= 768 ? 'mobile' : 'desktop';
      if (newView !== currentView) {
        currentView = newView;
        fetchContent(newView);
      }
    });
  }

  // Load content on DOMContentLoaded
  loadContent();
});
