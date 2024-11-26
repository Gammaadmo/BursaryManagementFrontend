<template>
  <div class="bursary-management">
    <header>
      <nav class="navbar">
        <div class="logo">Bursary Management</div>
        <ul class="nav-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Bursaries</a></li>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Contact</a></li>
          <li><button class="btn btn-login">Log In</button></li>
          <li><button class="btn btn-apply">Apply Now</button></li>
        </ul>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-content">
          <h1>Unlock Your Educational Potential</h1>
          <p>Explore and apply for bursaries tailored to your needs.</p>
          <div class="hero-buttons">
            <button class="btn btn-apply">Apply Now</button>
            <button class="btn btn-learn">Learn More</button>
          </div>
        </div>
        <div class="hero-image">
          <img src="https://example.com/hero-image.jpg" alt="Hero Image">
        </div>
      </section>

      <section class="features">
        <h2>Key Features</h2>
        <div class="feature-grid">
          <div class="feature-item" v-for="feature in features" :key="feature.id">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; {{ currentYear }} Bursary Management. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BursaryManagement',
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
.bursary-management {
  font-family: Arial, sans-serif;
  color: #333;
}

.navbar {
  background-color: #0077b6;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

.nav-menu a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-menu a:hover {
  color: #ccc;
}

.btn {
  background-color: #0077b6;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #005a8a;
}

.btn-login {
  margin-left: 1rem;
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  padding: 3rem 2rem;
}

.hero-content {
  flex: 1;
  text-align: left;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.hero-image {
  flex: 1;
  text-align: right;
}

.hero-image img {
  max-width: 100%;
  height: auto;
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

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .hamburger {
    display: block;
    cursor: pointer;
  }

  .hamburger .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #fff;
  }

  .nav-menu.active {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #0077b6;
    padding: 1rem 0;
    z-index: 1;
  }

  .hero {
    flex-direction: column;
    text-align: center;
  }

  .hero-image {
    text-align: center;
    margin-top: 2rem;
  }
}
</style>