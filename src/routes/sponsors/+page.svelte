<script>
  let sponsors = [
    { name: "Google", logo: "/images/google-logo.webp", link: "https://www.google.com" },
    { name: "Microsoft", logo: "/images/microsoft-logo.jpg", link: "https://www.microsoft.com" },
    { name: "Amazon", logo: "/images/amazon-logo.png", link: "https://www.amazon.com" },
    { name: "Meta", logo: "/images/meta-logo.webp", link: "https://www.meta.com" },
    { name: "Tesla", logo: "/images/tesla-logo.jpg", link: "https://www.tesla.com" },
    { name: "IBM", logo: "/images/ibm-logo.webp", link: "https://www.ibm.com" },
    { name: "Netflix", logo: "/images/netflix-logo.jpg", link: "https://www.netflix.com" },
    { name: "Spotify", logo: "/images/spotify-logo.webp", link: "https://www.spotify.com" },
    { name: "Adobe", logo: "/images/adobe-logo.webp", link: "https://www.adobe.com" },
    { name: "Intel", logo: "/images/intel-logo.png", link: "https://www.intel.com" }
  ];
</script>

<section class="sponsors-section">
  <div class="container">
    <h1 class="title">🏆 Our Sponsors</h1>
    <div class="sponsors-grid">
      {#each sponsors as sponsor}
        <a href={sponsor.link} target="_blank" class="sponsor-card">
          <img src={sponsor.logo} alt={sponsor.name} class="sponsor-logo" />
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  /* Full Page Background */
  .sponsors-section {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #000428, #004e92);
    text-align: center;
    padding: 20px;
  }

  .container {
    width: 100%;
    max-width: 1300px;
  }

  /* Title */
  .title {
    font-size: 3rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 50px;
  }

  /* Sponsors Grid */
  .sponsors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    justify-items: center;
  }

  /* Sponsor Cards */
  .sponsor-card {
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 20px;
    padding: 25px;
    width: 200px;
    height: 130px;
    box-shadow: 0px 6px 15px rgba(255, 255, 255, 0.3);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  .sponsor-card:hover {
    transform: scale(1.1);
    box-shadow: 0px 8px 20px rgba(255, 255, 255, 0.5);
  }

  /* Sponsor Logo */
  .sponsor-logo {
    width: 100%;
    height: auto;
    object-fit: contain;
    transition: transform 0.6s ease-in-out;
  }

  /* 360° Rotation Effect */
  .sponsor-card:hover .sponsor-logo {
    transform: rotate(360deg);
  }

  /* Responsive */
  @media screen and (max-width: 1024px) {
    .sponsors-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (max-width: 768px) {
    .sponsors-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
    .title {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 480px) {
    .sponsors-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .sponsor-card {
      width: 180px;
      height: 120px;
    }
    .title {
      font-size: 2rem;
    }
  }
</style>
