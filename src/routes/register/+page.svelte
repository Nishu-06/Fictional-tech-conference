<script>
  let name = '';
  let email = '';
  let message = '';

  function submitForm() {
    alert(`Registered: ${name}, ${email}, ${message}`);
  }
</script>

<section class="p-5 text-center">
  <h2 class="mb-4">Register for Tech Conference 2025</h2>
  <form on:submit|preventDefault={submitForm} class="w-50 mx-auto">
    <div class="mb-3">
      <label class="form-label">Name</label>
      <input type="text" class="form-control" bind:value={name} required />
    </div>
    <div class="mb-3">
      <label class="form-label">Email</label>
      <input type="email" class="form-control" bind:value={email} required />
    </div>
    <div class="mb-3">
      <label class="form-label">Message</label>
      <textarea class="form-control" bind:value={message}></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</section>
