<template>
  <div class="profile-page">
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

    <!-- Profile Content -->
    <div class="profile">
      <h1 class="profile-title">Bursar Profile</h1>
      <div class="profile-details">
        <p><strong>Name:</strong> {{ bursar.name }}</p>
        <p><strong>Email:</strong> {{ bursar.email }}</p>
        <p><strong>Status:</strong> {{ bursar.status }}</p>
        <button @click="editProfile" class="edit-btn">Edit Profile</button>
      </div>
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
/* General Page Styles */
.profile-page {
  font-family: Arial, sans-serif;
  margin-top: 50px;
  background-color: #f0f8ff; /* Light blue background for the whole page */
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

/* Profile Page Content */
.profile {
  text-align: center;
  margin-top: 70px;
}

/* Title Styles */
.profile-title {
  color: #0056b3; /* Deep blue color */
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Profile Details Card */
.profile-details {
  background-color: #ffffff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: inline-block;
  text-align: left;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}

/* Profile Text Styling */
.profile-details p {
  font-size: 18px;
  margin: 12px 0;
  color: #333;
}

/* Edit Button Styles */
.edit-btn {
  background-color: #007bff; /* Blue color */
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.edit-btn:hover {
  background-color: #0056b3; /* Darker blue on hover */
}
</style>
