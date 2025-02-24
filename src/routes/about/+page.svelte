<script>
  import { Container, Row, Col } from 'sveltestrap';
</script>

<section class="about-section">
  <Container>

    <!-- 📌 Google Map Embed (Shifted Up & Smaller Size) -->
    <Row class="mt-2">  <!-- Pehle mt-4 tha, ab mt-2 kiya -->
      <Col md="10" class="mx-auto text-center">
        <h2 class="location-title">📍 Event Location</h2>
        <p class="about-text">Join us at our amazing venue in Bengaluru!</p>
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089943376!2d77.46612593299314!3d12.953945614011557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1740330021435!5m2!1sen!2sin"
            width="75%"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Col>
    </Row>

    <Row class="mt-5">
      <Col md="10" class="mx-auto text-center">
        <h1 class="about-title">🚀 Welcome to TechNext 2025</h1>
        <p class="about-text">
          **TechNext 2025** is the ultimate technology summit bringing together the brightest minds in AI, Cybersecurity, Web3, and more.  
          Get ready for **inspiring talks, interactive sessions, and groundbreaking innovations** from global leaders!  
        </p>
      </Col>
    </Row>

    <Row class="mt-5 features-grid">
      <Col md="4">
        <div class="feature-card">
          <div class="icon">💡</div>
          <h3>Innovative Ideas</h3>
          <p>Discover the next big thing in tech and be part of the revolution.</p>
        </div>
      </Col>
      <Col md="4">
        <div class="feature-card">
          <div class="icon">🎤</div>
          <h3>Expert Talks</h3>
          <p>Learn from industry pioneers and game changers.</p>
        </div>
      </Col>
      <Col md="4">
        <div class="feature-card">
          <div class="icon">🤝</div>
          <h3>Networking</h3>
          <p>Connect with professionals, startups, and investors.</p>
        </div>
      </Col>
    </Row>

  </Container>
</section>

<style>
  /* Full-Page Background */
  .about-section {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #000428, #004e92);
    color: white;
    padding: 70px 20px; /* Pehle 80px tha, ab 70px */
    text-align: center;
  }

  /* Location Title */
  .location-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 10px; /* Pehle 20px tha, ab 10px */
  }

  /* Google Map */
  .map-container {
    width: 100%;
    max-width: 750px; /* Pehle 800px tha, ab 750px */
    margin: auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }

  iframe {
    width: 75%;
    height: 300px; /* Pehle 350px tha, ab 300px */
    border-radius: 10px;
  }

  /* Title Styling */
  .about-title {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    background: -webkit-linear-gradient(45deg, #ff9a9e, #fad0c4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Description */
  .about-text {
    font-size: 1.4rem;
    line-height: 1.8;
    max-width: 800px;
    margin: auto;
    opacity: 0.9;
  }

  /* Feature Cards */
  .features-grid {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .feature-card {
    padding: 30px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    color: white;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    text-align: center;
    position: relative;
    box-shadow: 0px 5px 15px rgba(255, 255, 255, 0.2);
    overflow: hidden;
  }

  .feature-card:hover {
    transform: translateY(-10px) rotateX(10deg);
    box-shadow: 0px 10px 30px rgba(255, 255, 255, 0.3);
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 10px;
    display: inline-block;
    animation: bounce 2s infinite;
  }

  /* Bounce Animation */
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  /* Responsive */
  @media screen and (max-width: 768px) {
    .about-title {
      font-size: 2.5rem;
    }

    .about-text {
      font-size: 1.2rem;
    }

    .feature-card {
      padding: 20px;
    }

    .location-title {
      font-size: 2rem;
    }

    iframe {
      width: 85%;
      height: 280px;
    }
  }

  @media screen and (max-width: 480px) {
    .about-section {
      padding: 50px 15px;
    }

    .about-title {
      font-size: 2rem;
    }

    .about-text {
      font-size: 1rem;
    }

    .features-grid {
      flex-direction: column;
      align-items: center;
    }

    .location-title {
      font-size: 1.8rem;
    }

    iframe {
      width: 95%;
      height: 250px;
    }
  }
</style>
