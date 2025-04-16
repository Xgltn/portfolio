// Light mode toggle
const toggleLight = document.getElementById('toggle-light');

toggleLight.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  // opcionalno promijeni tekst gumba
  if (document.body.classList.contains('light-mode')) {
    toggleLight.textContent = "🌙 Dark Mode";
  } else {
    toggleLight.textContent = "☀️ Light Mode";
  }
});
