<script>
  let schedule = [
    { date: "2025-04-10", time: "10:00 AM", topic: "Opening Keynote", speaker: "John Doe" },
    { date: "2025-04-10", time: "11:00 AM", topic: "Future of Cloud Computing", speaker: "Jane Smith" },
    { date: "2025-04-10", time: "12:00 PM", topic: "Mars Colonization & AI", speaker: "Elon Musk" },
    { date: "2025-04-10", time: "2:00 PM", topic: "The Evolution of Search Engines", speaker: "Sundar Pichai" },
    { date: "2025-04-10", time: "3:00 PM", topic: "AI & Business Intelligence", speaker: "Satya Nadella" },
    { date: "2025-04-11", time: "10:00 AM", topic: "Building a Better Social Network", speaker: "Mark Zuckerberg" },
    { date: "2025-04-11", time: "11:00 AM", topic: "E-Commerce Revolution", speaker: "Jeff Bezos" },
    { date: "2025-04-11", time: "12:00 PM", topic: "Cybersecurity Trends", speaker: "Bill Gates" },
    { date: "2025-04-11", time: "2:00 PM", topic: "The Future of Apple", speaker: "Tim Cook" },
    { date: "2025-04-11", time: "3:00 PM", topic: "Open Source & Linux", speaker: "Linus Torvalds" },
    { date: "2025-04-12", time: "10:00 AM", topic: "Tech Innovations at Microsoft", speaker: "Kevin Scott" },
    { date: "2025-04-12", time: "11:00 AM", topic: "Women in Tech Leadership", speaker: "Sheryl Sandberg" },
    { date: "2025-04-12", time: "12:00 PM", topic: "Spotify & AI-powered Music", speaker: "Daniel Ek" },
    { date: "2025-04-12", time: "2:00 PM", topic: "Twitter's Impact on Society", speaker: "Jack Dorsey" },
    { date: "2025-04-12", time: "3:00 PM", topic: "The Airbnb Revolution", speaker: "Brian Chesky" },
    { date: "2025-04-13", time: "10:00 AM", topic: "Digital Content & YouTube", speaker: "Susan Wojcicki" },
    { date: "2025-04-13", time: "11:00 AM", topic: "Streaming Services & Netflix", speaker: "Reed Hastings" },
    { date: "2025-04-13", time: "12:00 PM", topic: "Leadership in Tech", speaker: "Parag Agrawal" },
    { date: "2025-04-13", time: "2:00 PM", topic: "Cloud Storage & Dropbox", speaker: "Drew Houston" },
    { date: "2025-04-13", time: "3:00 PM", topic: "The Future of Workplace Collaboration", speaker: "Stewart Butterfield" }
  ];
</script>

<section class="container py-5">
  <h1 class="text-center mb-4">📅 Conference Schedule</h1>
  <table class="table table-bordered table-striped">
    <thead class="table-dark">
      <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Topic</th>
        <th>Speaker</th>
      </tr>
    </thead>
    <tbody>
      {#each schedule as session}
        <tr>
          <td>{session.date}</td>
          <td>{session.time}</td>
          <td>{session.topic}</td>
          <td>{session.speaker}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</section>

<style>
  .container {
    padding: 20px;
  }
  .table {
    width: 100%;
    text-align: center;
  }
</style>
