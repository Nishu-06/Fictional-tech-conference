# 🏆 Fictional Tech Conference 2025

🚀 **Fictional Tech Conference** is a modern, fully responsive website built with **SvelteKit** and **Sveltestrap**.  
This website provides an interactive platform for showcasing event details, schedules, speakers, sponsors, and venue information.

---

## 📷 **Live Demo**
👉 [Demo Link](https://your-deployed-link.vercel.app) _(Add your deployment link here)_

---

## 📌 **Features**
✅ Modern UI with responsive design (Mobile & Desktop Friendly)  
✅ Interactive **Schedule Page** with **Day & Track Filters**  
✅ Speaker Profiles & Event Highlights  
✅ Sponsorship Tiers (Gold, Silver, Bronze)  
✅ Google Maps Integration for Venue Details  
✅ Navbar with smooth navigation  
✅ Dark & Light Mode Support _(if implemented)_  
✅ SEO & Performance Optimized  

---

## 🛠 **Tech Stack**
- **Frontend:** SvelteKit, Sveltestrap (Bootstrap for Svelte)
- **Styling:** Tailwind CSS
- **Backend (if applicable):** Node.js, Express
- **API & Integrations:** Google Maps API, OpenAI API (if chatbot is included)
- **Deployment:** Vercel / Netlify  

---

## 🚀 **Getting Started**
### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/Nishu-06/Fictional-tech-conference.git
cd Fictional-tech-conference

/src
 ├── routes
 │    ├── +layout.svelte  # Main Layout
 │    ├── +page.svelte    # Home Page
 │    ├── about
 │    │    ├── +page.svelte  # About Page
 │    ├── schedule
 │    │    ├── +page.svelte  # Schedule Page
 │    ├── sponsors
 │    │    ├── +page.svelte  # Sponsors Page
 │    ├── contact
 │    │    ├── +page.svelte  # Contact Page
 │    ├── speakers
 │    │    ├── +page.svelte  # Speakers Page
 ├── components
 │    ├── Navbar.svelte   # Navigation Bar
 │    ├── Footer.svelte   # Footer
 │    ├── SpeakerCard.svelte  # Speaker Component
 │    ├── SponsorCard.svelte  # Sponsor Component
 ├── styles
 │    ├── global.css      # Global Styles
