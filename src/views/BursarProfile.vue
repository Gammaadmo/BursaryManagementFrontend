<template>
    <div class="profile">
      <h1 class="profile-title">Bursar Profile</h1>
      <div class="profile-details">
        <p><strong>Name:</strong> {{ bursar.name }}</p>
        <p><strong>Email:</strong> {{ bursar.email }}</p>
        <p><strong>Status:</strong> {{ bursar.status }}</p>
        <button @click="editProfile" class="edit-btn">Edit Profile</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BursarProfile',
    data() {
      return {
        bursar: {
          name: 'John Doe',
          email: 'johndoe@example.com',
          status: 'Active',
        },
      };
    },
    methods: {
      editProfile() {
        // Redirect to edit profile page
        this.$router.push({ name: 'BursarProfileEdit' });
      },
    },
  };
  </script>
  
  <style scoped>
  .profile {
    font-family: Arial, sans-serif;
    margin-top: 50px;
    text-align: center;
  }
  
  .profile-title {
    color: #007bff; /* Blue color */
    font-size: 36px;
  }
  
  .profile-details {
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 8px;
    display: inline-block;
    text-align: left;
  }
  
  .profile-details p {
    font-size: 18px;
    margin: 10px 0;
  }
  
  .edit-btn {
    background-color: #007bff; /* Blue color */
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  
  .edit-btn:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
  </style>
  