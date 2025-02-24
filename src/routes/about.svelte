<script>
  import { onMount } from "svelte";
</script>

<section class="container text-center my-5">
  <h1 class="display-4">📍 Conference Location</h1>
  <p class="lead">Join us at our amazing venue in Bengaluru!</p>

  <!-- Google Map Embed -->
  <div class="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089943376!2d77.46612593299314!3d12.953945614011557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1740330021435!5m2!1sen!2sin"
      width="100%"
      height="450"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>

<style>
  .map-container {
    width: 100%;
    max-width: 800px;
    margin: auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
</style>
