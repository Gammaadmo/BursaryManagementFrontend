<template>
    <div class="profile">
      <h1 class="profile-title">Bursar Profile</h1>
      <p class="profile-info">Name: John Doe</p>
      <p class="profile-info">Email: john.doe@example.com</p>
      <p class="profile-info">Bursary Status: Approved</p>
  
      <router-link to="/bursar/profile/edit" class="edit-link">Edit Profile</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BursarProfile',
  };
  </script>
  
  <style scoped>
  .profile {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
  }
  
  .profile-title {
    color: #007bff; /* Blue color */
    font-size: 36px;
  }
  
  .profile-info {
    color: #555;
    font-size: 20px;
    margin: 10px 0;
  }
  
  .edit-link {
    display: inline-block;
    margin-top: 20px;
    color: #007bff;
    text-decoration: none;
  }
  
  .edit-link:hover {
    text-decoration: underline;
  }
  </style>
  