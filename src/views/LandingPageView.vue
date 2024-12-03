<template>
    <div class="landing-page">
      <header>
        <h1>Bursary Management</h1>
      </header>
  
      <div class="hero">
        <h2>Unlock Your Educational Potential</h2>
        <p>Explore and apply for bursaries tailored to your needs.</p>
        <button class="cta-button" @click="navigateToApplicationForm">Apply Now</button>
      </div>
  
      <div class="features">
        <h2>Key Features</h2>
        <div class="feature-grid">
          <div class="feature-item" v-for="feature in features" :key="feature.id">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
  
      <footer>
        <p>&copy; {{ currentYear }} Bursary Management. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage',
    data() {
      return {
        features: [
          { id: 1, title: 'Intuitive Dashboard', description: 'Easily manage and track your bursary applications.' },
          { id: 2, title: 'Personalized Recommendations', description: 'Get tailored bursary suggestions based on your profile.' },
          { id: 3, title: 'Secure Application Process', description: 'Submit your applications safely and confidentially.' },
        ],
        currentYear: new Date().getFullYear(),
      };
    },
    methods: {
      navigateToApplicationForm() {
        this.$router.push({ name: 'ApplicationForm' });
      },
    },
  };
  </script>
  
  <style scoped>
  .landing-page {
    font-family: Arial, sans-serif;
    color: #333;
  }
  
  header {
    background-color: #0077b6;
    color: #fff;
    padding: 2rem;
    text-align: center;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .hero {
    background-image: url('https://example.com/hero-image.jpg'); /* Replace with your image URL */
    background-size: cover;
    background-position: center;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 2rem;
  }
  
  .hero h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  .hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  
  .cta-button {
    background-color: #0077b6;
    color: #fff;
    padding: 1rem 2rem;
    border: none;
    border-radius: 4px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .cta-button:hover {
    background-color: #005a8a;
  }
  
  .features {
    padding: 3rem;
    text-align: center;
    background-color: #f9f9f9;
  }
  
  .features h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #0077b6;
  }
  
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .feature-item {
    background-color: #fff;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .feature-item h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #0077b6;
  }
  
  footer {
    background-color: #0077b6;
    color: #fff;
    padding: 1rem;
    text-align: center;
  }
  </style>