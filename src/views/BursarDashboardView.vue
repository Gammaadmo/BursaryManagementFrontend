<template>
    <div class="dashboard">
      <h1 class="dashboard-title">Bursar Dashboard</h1>
      <p class="welcome-message">Welcome to your dashboard!</p>
      <div class="dashboard-links">
        <!-- Example links to other bursar-related pages -->
        <router-link to="/bursar/profile" class="link">View Profile</router-link>
        <br />
        <router-link to="/bursar/applications" class="link">Manage Applications</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BursarDashboard',
  };
  </script>
  
  <style scoped>
  .dashboard {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
  }
  
  .dashboard-title {
    color: #007bff; /* Blue color */
    font-size: 36px;
  }
  
  .welcome-message {
    color: #555;
    font-size: 20px;
  }
  
  .dashboard-links {
    margin-top: 20px;
  }
  
  .link {
    color: #007bff; /* Blue color */
    text-decoration: none;
    font-size: 18px;
  }
  
  .link:hover {
    text-decoration: underline;
  }
  </style>
  