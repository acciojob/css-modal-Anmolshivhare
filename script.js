//your JS code here. If required.
document.getElementById("openModal").addEventListener("click", function() {
  document.getElementById("modal").style.display = "block";
});

document.querySelector(".modal").addEventListener("click", function(event) {
  if (event.target === this || event.target.classList.contains("close-modal")) {
    this.style.display = "none";
  }
});
