<template>
    <div class="dashboard">
      <!-- Navbar -->
      <nav class="navbar">
        <div class="navbar-container">
          <router-link to="/" class="navbar-brand">Bursary System</router-link>
          <div class="navbar-links">
            <router-link to="/bursar/dashboard" class="navbar-link">Dashboard</router-link>
            <router-link to="/bursar/profile" class="navbar-link">Profile</router-link>
            <router-link to="/bursar/applications" class="navbar-link">Applications</router-link>
            <router-link to="/logout" class="navbar-link">Logout</router-link>
          </div>
        </div>
      </nav>
  
      <!-- Dashboard Content -->
      <div class="dashboard-content">
        <h1 class="dashboard-title">Bursar Dashboard</h1>
        <p class="welcome-message">Welcome to your dashboard!</p>
        <div class="dashboard-card">
          <div class="dashboard-links">
            <router-link to="/bursar/profile" class="link">View Profile</router-link>
            <router-link to="/bursar/applications" class="link">Manage Applications</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BursarDashboard',
  };
  </script>
  
  <style scoped>
  /* General Page Styles */
  .dashboard {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
    background-color: #f0f8ff; /* Light blue background */
    min-height: 100vh;
    padding: 20px;
  }
  
  /* Navbar Styling */
  .navbar {
    background-color: #003366; /* Dark blue background */
    padding: 15px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .navbar-brand {
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
  }
  
  .navbar-links {
    display: flex;
    gap: 20px;
  }
  
  .navbar-link {
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: all 0.3s ease;
  }
  
  .navbar-link:hover {
    color: #ffd700; /* Gold color on hover */
  }
  
  /* Dashboard Content */
  .dashboard-content {
    margin-top: 70px;
  }
  
  /* Title Styles */
  .dashboard-title {
    color: #0056b3; /* Deep blue color */
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  /* Welcome Message */
  .welcome-message {
    color: #555;
    font-size: 20px;
    margin-bottom: 30px;
  }
  
  /* Card Layout for Links */
  .dashboard-card {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: inline-block;
    margin-top: 20px;
    max-width: 400px;
    width: 100%;
  }
  
  /* Dashboard Links */
  .dashboard-links {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .link {
    color: #007bff; /* Blue color */
    text-decoration: none;
    font-size: 18px;
    transition: all 0.3s ease;
  }
  
  .link:hover {
    text-decoration: underline;
    color: #0056b3; /* Darker blue on hover */
  }
  </style>
  