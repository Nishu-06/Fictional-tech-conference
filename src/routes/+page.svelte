<script context="module">
  export const speakers = [
    { name: "Jonitha Sharma", title: "AI Researcher at OpenAI", image: "/images/public-speaker.jpg" },
    { name: "Rahul Verma", title: "CTO, Tech Corp", image: "/images/speaker3.jpg" },
    { name: "Lisa Chen", title: "Cloud Architect, Google", image: "/images/speaker.jpeg" }
  ];
</script>

<script>
  import { goto } from "$app/navigation";
</script>

<section class="text-center p-5 bg-primary text-light position-relative">
  <h1 class="display-3 fw-bold">Tech Conference 2025</h1>
  <p class="lead">Innovating the Future of Technology</p>
  <button class="btn btn-light btn-lg mt-3" on:click={() => goto('/register')}>
    Register Now
  </button>
</section>

<section class="p-5">
  <h2 class="text-center mb-4">🎤 Keynote Speakers</h2>
  <div class="d-flex flex-wrap justify-content-center gap-4">
    {#each speakers as speaker}
      <div class="card shadow-lg border-0 rounded-3 overflow-hidden" style="width: 18rem;">
        <img src={speaker.image} alt={speaker.name} class="card-img-top" />
        <div class="card-body text-center">
          <h5 class="card-title fw-bold">{speaker.name}</h5>
          <p class="card-text">{speaker.title}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .card {
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  }
</style>
