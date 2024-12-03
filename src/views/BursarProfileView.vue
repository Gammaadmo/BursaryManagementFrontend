<template>
    <div class="profile-container">
      <!-- Navbar -->
      <nav class="navbar">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <router-link to="/bursar/dashboard" class="navbar-link">Dashboard</router-link>
        <router-link to="/bursar/profile" class="navbar-link">Profile</router-link>
      </nav>
      
      <!-- Profile Section -->
      <div class="profile">
        <h1 class="profile-title">Bursar Profile</h1>
        <div class="profile-details">
          <p class="profile-info"><strong>Name:</strong> John Doe</p>
          <p class="profile-info"><strong>Email:</strong> john.doe@example.com</p>
          <p class="profile-info"><strong>Bursary Status:</strong> Approved</p>
        </div>
        
        <router-link to="/bursar/profile/edit" class="edit-link">Edit Profile</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BursarProfile',
  };
  </script>
  
  <style scoped>
  /* Page Container Styles */
  .profile-container {
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
  
  /* Profile Section Styles */
  .profile {
    margin-top: 40px;
    text-align: center;
    background-color: #ffffff; /* White background for the profile section */
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 100%;
  }
  
  .profile-title {
    color: #007bff; /* Blue color */
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  .profile-info {
    color: #333;
    font-size: 20px;
    margin: 10px 0;
    text-align: left;
  }
  
  .edit-link {
    display: inline-block;
    margin-top: 20px;
    color: #007bff;
    text-decoration: none;
    font-size: 18px;
  }
  
  .edit-link:hover {
    text-decoration: underline;
  }
  </style>
  