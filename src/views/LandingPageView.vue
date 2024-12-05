<template>
  <div class="landing-page">
    <!-- Header Section -->
    <header class="header">
      <h1>Bursary Management</h1>
      <div class="auth-buttons">
        <button class="auth-button" @click="navigateToSignIn">Sign In</button>
        <button class="auth-button register" @click="navigateToRegister">Register</button>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h2>Unlock Your Educational Potential</h2>
        <p>Explore and apply for bursaries tailored to your needs.</p>
        <button class="cta-button" @click="navigateToApplicationForm">Apply Now</button>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Key Features</h2>
      <div class="feature-grid">
        <div class="feature-item" v-for="feature in features" :key="feature.id">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer">
      <p>&copy; {{ currentYear }} Bursary Management. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      features: [
        { id: 1, title: "Intuitive Dashboard", description: "Easily manage and track your bursary applications." },
        { id: 2, title: "Personalized Recommendations", description: "Get tailored bursary suggestions based on your profile." },
        { id: 3, title: "Secure Application Process", description: "Submit your applications safely and confidentially." },
      ],
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    navigateToApplicationForm() {
      this.$router.push({ name: "ApplicationForm" });
    },
    navigateToSignIn() {
      this.$router.push({ name: "SignIn" });
    },
    navigateToRegister() {
      this.$router.push({ name: "Register" });
    },
  },
};
</script>

<style scoped>
/* General Styles */
.landing-page {
  font-family: 'Poppins', sans-serif;
  color: #333;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}

/* Header Styles */
.header {
  background-color: #0077b6;
  color: white;
  text-align: center;
  padding: 2rem 1rem;
  position: relative;
}

.header h1 {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
}

/* Auth Buttons */
.auth-buttons {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 1rem;
}

.auth-button {
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.auth-button:hover {
  background-color: white;
  color: #0077b6;
}

.auth-button.register {
  background-color: #ffcc00;
  color: #333;
  border: none;
}

.auth-button.register:hover {
  background-color: #ffbf00;
  color: #333;
}

/* Hero Section */
.hero {
  background: linear-gradient(rgba(0, 119, 182, 0.8), rgba(0, 119, 182, 0.8)), url('https://example.com/hero-image.jpg') no-repeat center/cover;
  color: white;
  text-align: center;
  padding: 4rem 2rem;
}

.hero-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: #ffcc00;
  color: #333;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.cta-button:hover {
  background-color: #ffbf00;
  transform: translateY(-2px);
}

/* Features Section */
.features {
  background-color: #f9f9f9;
  padding: 3rem 1rem;
  text-align: center;
}

.features h2 {
  font-size: 2rem;
  color: #0077b6;
  margin-bottom: 2rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}

.feature-item {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.feature-item h3 {
  font-size: 1.5rem;
  color: #0077b6;
  margin-bottom: 1rem;
}

.feature-item p {
  font-size: 1rem;
  color: #666;
}

/* Footer Section */
.footer {
  background-color: #0077b6;
  color: white;
  text-align: center;
  padding: 1rem 0;
}

.footer p {
  margin: 0;
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content h2 {
    font-size: 2rem;
  }

  .cta-button {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }

  .features h2 {
    font-size: 1.8rem;
  }
}
</style>
