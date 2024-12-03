<template>
    <div class="bursar-list-container">
      <!-- Navbar -->
      <nav class="navbar">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <router-link to="/bursar/dashboard" class="navbar-link">Dashboard</router-link>
        <router-link to="/bursar/profile" class="navbar-link">Profile</router-link>
      </nav>
  
      <!-- Bursar List Section -->
      <h1 class="page-title">Bursar List</h1>
      <div class="bursar-list">
        <div v-for="bursar in bursars" :key="bursar.id" class="bursar-item">
          <h2 class="bursar-name">{{ bursar.name }}</h2>
          <p class="bursar-email">{{ bursar.email }}</p>
          <p class="bursar-status">{{ bursar.status }}</p>
          <button @click="viewBursar(bursar.id)" class="view-details-btn">View Details</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BursarListView',
    data() {
      return {
        // Sample bursar data (replace with actual data from API or data source)
        bursars: [
          { id: 1, name: 'John Doe', email: 'john.doe@example.com', status: 'Active' },
          { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Inactive' },
          { id: 3, name: 'Mike Johnson', email: 'mike.johnson@example.com', status: 'Active' },
        ],
      };
    },
    methods: {
      viewBursar(id) {
        this.$router.push({ name: 'BursarProfile', params: { id } });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Page Container Styles */
  .bursar-list-container {
    font-family: Arial, sans-serif;
    background-color: #f0f8ff; /* Light blue background for the page */
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* Navbar Styles */
  .navbar {
    width: 100%;
    background-color: #007bff; /* Blue background */
    padding: 10px 0;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .navbar a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }
  
  .navbar a:hover {
    text-decoration: underline;
  }
  
  /* Bursar List Page Styles */
  .page-title {
    text-align: center;
    color: #0056b3;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  /* Bursar List Grid */
  .bursar-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1000px;
  }
  
  /* Bursar Item Styles */
  .bursar-item {
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  /* Bursar Name */
  .bursar-name {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }
  
  /* Bursar Email and Status */
  .bursar-email,
  .bursar-status {
    font-size: 1rem;
    color: #777;
  }
  
  /* View Details Button */
  .view-details-btn {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .view-details-btn:hover {
    background-color: #0056b3;
  }
  </style>
  