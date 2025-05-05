AOS.init();
const backToTopBtn = document.getElementById("backToTop");
window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};
backToTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });


document.getElementById('contactForm').addEventListener('submit', function (e) {
  if (!this.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
  }
  this.classList.add('was-validated');
});


document.getElementById('toggle-mode').addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute("data-bs-theme");
  document.documentElement.setAttribute("data-bs-theme", currentTheme === "light" ? "dark" : "light");
});
