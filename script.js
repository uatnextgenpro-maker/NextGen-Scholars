// Find all elements with the class "accordion-header"
var acc = document.getElementsByClassName("accordion-header");
var i;

// Loop through all the headers we found
for (i = 0; i < acc.length; i++) {
  // Add a "click" event listener to each one
  acc[i].addEventListener("click", function() {
    // Toggle the "active" class on the button to change the +/- icon
    this.classList.toggle("active");

    // Get the panel that is right after the header
    var panel = this.nextElementSibling;

    // Check if the panel is already open
    if (panel.style.maxHeight) {
      // If it is open, close it
      panel.style.maxHeight = null;
    } else {
      // If it is closed, open it by setting its max-height
      // scrollHeight gets the total height of the content inside
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
