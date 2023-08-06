function toggleContent(cardNumber) {
    var button = document.getElementById("res-pub-button-" + cardNumber);
    var text = document.getElementById("faculty-text-" + cardNumber);
  
    if (text.style.display === "none") {
      text.style.display = "block";
      button.textContent = "Hide"; // Change button text when showing the text
    } else {
      text.style.display = "none";
      button.textContent = "Research and Publications"; // Revert back to original button text when hiding the text
    }
  }
  