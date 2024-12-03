<template>
    <div class="profile-edit">
      <h1 class="edit-title">Edit Profile</h1>
      <form class="edit-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" placeholder="Enter your name" />
        </div>
  
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Enter your email" />
        </div>
  
        <div class="form-group">
          <label for="status">Bursary Status</label>
          <select id="status" v-model="status">
            <option>Approved</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>
        </div>
  
        <button type="submit" class="submit-btn">Save Changes</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BursarProfileEdit',
    data() {
      return {
        name: '',
        email: '',
        status: 'Pending',
      };
    },
    methods: {
      saveChanges() {
        // Logic for saving changes
        console.log('Profile updated:', this.name, this.email, this.status);
      },
    },
  };
  </script>
  
  <style scoped>
  .profile-edit {
    font-family: Arial, sans-serif;
    margin-top: 50px;
    text-align: center;
  }
  
  .edit-title {
    color: #007bff; /* Blue color */
    font-size: 36px;
  }
  
  .edit-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    font-size: 18px;
    color: #333;
  }
  
  input, select {
    font-size: 16px;
    padding: 10px;
    margin-top: 5px;
    width: 250px;
  }
  
  .submit-btn {
    font-size: 18px;
    padding: 10px 20px;
    background-color: #007bff; /* Blue color */
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 20px;
  }
  
  .submit-btn:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
  </style>
  