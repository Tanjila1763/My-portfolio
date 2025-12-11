// ------------------------------
// Live Bangladesh Time (GMT+6)
// ------------------------------
function updateBDTime() {
  const bdTimeEl = document.getElementById("bdTime");
  const now = new Date();

  // Convert to Bangladesh time using UTC + 6 hours
  const bdTime = new Date(now.getTime() + 6 * 60 * 60 * 1000);

  const timeString = bdTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  bdTimeEl.textContent = timeString;
}

setInterval(updateBDTime, 1000);
updateBDTime();

// ------------------------------
// Dark Theme Toggle
// ------------------------------
const themeToggle = document.getElementById("themeToggle");

// Load saved theme
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  themeToggle.setAttribute("aria-pressed", "true");
  themeToggle.textContent = "Light";
}

// Toggle on button click
themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");
  
  themeToggle.setAttribute("aria-pressed", isDark);
  themeToggle.textContent = isDark ? "Light" : "Dark";

  // Save preference
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
});

// ------------------------------
// Contact Form Validation
// ------------------------------
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const subject = contactForm.subject.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    // Simulated send (you can replace this with real backend)
    alert("Message sent successfully! Thank you for contacting.");
    contactForm.reset();
  });
}
