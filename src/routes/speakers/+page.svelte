<script>
  let speakers = [
    { name: "John Doe", title: "AI Researcher at OpenAI", image: "/images/one.jpeg" },
    { name: "Jane Smith", title: "Cloud Engineer at AWS", image: "/images/two.jpeg" },
    { name: "Elon Musk", title: "CEO of Tesla & SpaceX", image: "/images/three.webp" },
    { name: "Sundar Pichai", title: "CEO of Google", image: "/images/four.jpeg" },
    { name: "Satya Nadella", title: "CEO of Microsoft", image: "/images/five.webp" },
    { name: "Mark Zuckerberg", title: "CEO of Meta", image: "/images/six.webp" },
    { name: "Jeff Bezos", title: "Founder of Amazon", image: "/images/seven.webp" },
    { name: "Bill Gates", title: "Co-founder of Microsoft", image: "/images/eight.jpeg" },
    { name: "Tim Cook", title: "CEO of Apple", image: "/images/nine.webp" },
    { name: "Linus Torvalds", title: "Creator of Linux", image: "/images/ten.webp" },
    { name: "Kevin Scott", title: "CTO of Microsoft", image: "/images/eleven.jpeg" },
    { name: "Sheryl Sandberg", title: "COO of Meta", image: "/images/twelve.webp" },
    { name: "Daniel Ek", title: "CEO of Spotify", image: "/images/public-speaker.jpg" },
    { name: "Jack Dorsey", title: "Co-founder of Twitter", image: "/images/public-speaker.jpg" },
    { name: "Brian Chesky", title: "CEO of Airbnb", image: "/images/public-speaker.jpg" },
    { name: "Susan Wojcicki", title: "Former CEO of YouTube", image: "/images/public-speaker.jpg" },
    { name: "Reed Hastings", title: "Co-founder of Netflix", image: "/images/public-speaker.jpg" },
    { name: "Parag Agrawal", title: "Former CEO of Twitter", image: "/images/public-speaker.jpg" },
    { name: "Drew Houston", title: "CEO of Dropbox", image: "/images/public-speaker.jpg" },
    { name: "Stewart Butterfield", title: "Co-founder of Slack", image: "/images/public-speaker.jpg" }
  ];
</script>

<section class="container py-5">
  <h1 class="text-center mb-4">🎤 Keynote Speakers</h1>
  <div class="row">
    {#each speakers as speaker}
      <div class="card m-3" style="width: 18rem;">
        <img src={speaker.image} alt={speaker.name} class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{speaker.name}</h5>
          <p class="card-text">{speaker.title}</p>
        </div>
      </div>
    {/each}
  </div>
</section>


<style>
  /* Background Gradient */
  .speakers-section {
    background: linear-gradient(135deg, #1e3c72, #2a5298);
    padding: 50px 20px;
    text-align: center;
  }

  /* Section Title */
  .title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 30px;
  }

  /* Speaker Grid Layout */
  .speakers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    max-width: 1100px;
    margin: auto;
  }

  /* Speaker Card */
  .card {
    background: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  /* Speaker Card Hover Effect */
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.3);
  }

  /* Speaker Image */
  .card-img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-bottom: 4px solid #007bff;
  }

  /* Speaker Card Content */
  .card-body {
    padding: 15px;
  }

  .card-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
  }

  .card-text {
    font-size: 0.95rem;
    color: #666;
  }

  /* Responsive */
  @media screen and (max-width: 768px) {
    .title {
      font-size: 2rem;
    }

    .card-img {
      height: 180px;
    }
  }
</style>