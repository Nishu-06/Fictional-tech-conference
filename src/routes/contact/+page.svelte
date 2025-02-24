<script>
  import { Container, Row, Col, FormGroup, Label, Input, Button } from 'sveltestrap';

  let name = "";
  let email = "";
  let message = "";

  function handleSubmit() {
    alert(`Thank you, ${name}! We received your message.`);
    name = "";
    email = "";
    message = "";
  }
</script>

<section class="contact-section">
  <Container>
    <Row>
      <Col md="8" class="mx-auto text-center">
        <h1 class="contact-title">📩 Get in Touch</h1>
        <p class="contact-text">We'd love to hear from you! Fill out the form below or reach us on social media.</p>
      </Col>
    </Row>

    <Row class="mt-4">
      <!-- Google Form Embed -->
      <Col md="6" class="form-container">
        <h3>📝 Quick Contact</h3>
        <iframe 
          title="Contact Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfVdyuoorZITYgPWAdOLgQ7_LVefZF8z4eLpfszGYQNV9Qxzw/viewform?embedded=true" 
          width="100%" 
          height="500" 
          frameborder="0" 
          marginheight="0" 
          marginwidth="0">
          Loading…
        </iframe>
      </Col>

      <!-- Custom Contact Form -->
      <Col md="6" class="form-container">
        <h3>📬 Contact Us Directly</h3>
        <form on:submit|preventDefault={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" id="name" bind:value={name} required />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" id="email" bind:value={email} required />
          </FormGroup>

          <FormGroup>
            <Label for="message">Message</Label>
            <Input type="textarea" id="message" bind:value={message} required rows="4" />
          </FormGroup>

          <Button type="submit" class="submit-btn">🚀 Send Message</Button>
        </form>
      </Col>
    </Row>
  </Container>
</section>

<style>
  .contact-section {
    padding: 80px 20px;
    background: linear-gradient(135deg, #1e3c72, #2a5298);
    color: white;
    text-align: center;
  }

  .form-container {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 30px;
    border-radius: 15px;
  }

  .submit-btn {
    width: 100%;
    background: #ff6f61;
    color: white;
    padding: 12px;
    font-size: 1.2rem;
    border-radius: 10px;
  }
</style>
