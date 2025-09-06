const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const icons = document.querySelectorAll(".theme-icon");

icons.forEach(icon => {
  icon.dataset.light = icon.getAttribute("src");
});

function updateIcons() {
  icons.forEach(icon => {
    icon.style.opacity = 0;
    setTimeout(() => {
      icon.src = body.classList.contains("dark") ? icon.dataset.dark : icon.dataset.light;
      icon.style.opacity = 1;
    }, 100);
  });
}

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "🌝";
}

updateIcons();

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "🌝";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌞";
    localStorage.setItem("theme", "light");
  }
  updateIcons();
});
