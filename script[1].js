
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "Thank you! We will get back to you shortly.";
  this.reset();
});

document.getElementById("searchBar").addEventListener("input", function() {
  const term = this.value.toLowerCase();
  console.log("Searching for:", term);
});
