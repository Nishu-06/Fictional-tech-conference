<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import { onMount } from "svelte";

  // Dark Mode State
  let darkMode = false;

  // Load Dark Mode from Local Storage
  onMount(() => {
    darkMode = localStorage.getItem("darkMode") === "true";
    updateTheme();
  });

  // Toggle Dark Mode
  function toggleDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem("darkMode", darkMode);
    updateTheme();
  }

  // Apply Dark Mode Class
  function updateTheme() {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  // Countdown Timer
  let countdown = "";

  function updateCountdown() {
    const eventDate = new Date("2025-03-10T09:00:00").getTime(); // Conference Date
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      countdown = "Event Started!";
    }
  }

  // Update Timer Every Second
  let timer;
  onMount(() => {
    updateCountdown();
    timer = setInterval(updateCountdown, 1000);
  });

</script>

<!-- Navbar -->
<Navbar />

<!-- Dark Mode & Countdown -->
<div class="d-flex justify-content-between align-items-center p-3 bg-light dark:bg-dark">
  <button class="btn btn-outline-dark dark:btn-light" on:click={toggleDarkMode}>
    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
  </button>
  <h5 class="text-primary dark:text-warning">⏳ {countdown}</h5>
</div>

<!-- Page Content -->
<slot />

<!-- Footer -->
<Footer />

<style>
  :global(.dark) {
    background-color: #121212;
    color: white;
  }
  :global(.dark a) {
    color: #f0a500;
  }
</style>
