<template>
  <div class="profile-edit-container">
    <!-- Navbar -->
    <nav class="navbar">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <router-link to="/bursar/dashboard" class="navbar-link">Dashboard</router-link>
      <router-link to="/bursar/profile" class="navbar-link">Profile</router-link>
    </nav>

    <!-- Profile Edit Section -->
    <div class="profile-edit">
      <h1 class="edit-title">Edit Profile</h1>
      <form class="edit-form" @submit.prevent="saveChanges">
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
      // You can add more functionality here, such as sending the data to an API
    },
  },
};
</script>

<style scoped>
/* Page Container Styles */
.profile-edit-container {
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

/* Profile Edit Section Styles */
.profile-edit {
  margin-top: 40px;
  text-align: center;
  background-color: #ffffff; /* White background for the profile section */
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
}

.edit-title {
  color: #007bff; /* Blue color */
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
}

.edit-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* Form Group Styles */
.form-group {
  width: 100%;
  max-width: 400px;
  text-align: left;
}

label {
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
  display: block;
}

input, select {
  font-size: 16px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 5px;
}

input:focus, select:focus {
  border-color: #007bff;
  outline: none;
}

/* Submit Button Styles */
.submit-btn {
  font-size: 18px;
  padding: 12px 24px;
  background-color: #007bff; /* Blue color */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #0056b3; /* Darker blue on hover */
}
</style>
