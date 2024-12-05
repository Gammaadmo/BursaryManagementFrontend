<template>
    <div class="profile-container">
      <!-- Navbar -->
      <nav class="navbar">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <router-link to="/bursar/dashboard" class="navbar-link">Dashboard</router-link>
        <router-link to="/bursar/profile" class="navbar-link active">Profile</router-link>
      </nav>
  
      <!-- Profile Section -->
      <div class="profile-main">
        <!-- User Info -->
        <div class="profile-header">
          <img class="profile-avatar" src="https://via.placeholder.com/120" alt="User Avatar" />
          <div class="profile-info">
            <h1 class="profile-name">John Doe</h1>
            <p class="profile-email">john.doe@example.com</p>
            <span class="profile-status approved">Approved</span>
          </div>
        </div>
  
        <!-- Profile Actions -->
        <div class="profile-actions">
          <router-link to="/bursar/profile/edit" class="action-button">Edit Profile</router-link>
          <button class="action-button danger">Deactivate</button>
        </div>
  
        <!-- Additional Details -->
        <div class="profile-details">
          <h2 class="section-title">Statistics</h2>
          <div class="stats-grid">
            <div class="stat-item">
              <h3>Applications</h3>
              <p>15</p>
            </div>
            <div class="stat-item">
              <h3>Approved</h3>
              <p>10</p>
            </div>
            <div class="stat-item">
              <h3>Pending</h3>
              <p>5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BursarProfile",
  };
  </script>
  
  <style scoped>
  /* General Styles */
  .profile-container {
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(135deg, #f4f9ff, #eef7fa);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
  
  /* Navbar */
  .navbar {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;
    background-color: #007bff;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .navbar-link {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .navbar-link:hover,
  .navbar-link.active {
    color: #d0e6ff;
  }
  
  /* Profile Section */
  .profile-main {
    background: white;
    width: 100%;
    max-width: 900px;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    margin-top: 2rem;
    padding: 2rem;
  }
  
  .profile-header {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #ddd;
  }
  
  .profile-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid #007bff;
  }
  
  .profile-info {
    flex-grow: 1;
  }
  
  .profile-name {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  .profile-email {
    font-size: 1.2rem;
    color: #555;
  }
  
  .profile-status {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: bold;
  }
  
  .profile-status.approved {
    background-color: #d4f8e4;
    color: #2d7d46;
  }
  
  /* Actions */
  .profile-actions {
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  .action-button {
    padding: 0.8rem 1.5rem;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    border: none;
    text-decoration: none;
    background: #007bff;
    transition: all 0.3s ease;
    text-align: center;
  }
  
  .action-button:hover {
    background: #0056b3;
    transform: translateY(-2px);
  }
  
  .action-button.danger {
    background: #d9534f;
  }
  
  .action-button.danger:hover {
    background: #c9302c;
  }
  
  /* Statistics */
  .profile-details {
    margin-top: 2rem;
  }
  
  .section-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #007bff;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
    text-align: center;
  }
  
  .stat-item {
    background: #eef7fa;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .stat-item:hover {
    transform: scale(1.05);
  }
  
  .stat-item h3 {
    font-size: 1rem;
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  .stat-item p {
    font-size: 1.5rem;
    font-weight: bold;
    color: #007bff;
  }
  </style>
  