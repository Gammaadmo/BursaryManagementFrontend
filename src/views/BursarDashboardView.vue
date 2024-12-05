<template>
    <div class="dashboard-page">
      <!-- Navigation Bar -->
      <nav class="navbar">
        <h1 class="nav-title">Bursary Management Dashboard</h1>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
  
      <!-- Dashboard Header -->
      <header class="dashboard-header">
        <h1 class="header-title">Welcome to the Bursary Dashboard</h1>
        <p class="header-subtitle">Manage and monitor bursary activities effectively.</p>
      </header>
  
      <!-- Dashboard Content -->
      <div class="dashboard-content">
        <!-- Statistics Section -->
        <div class="statistics">
          <div class="stat-card">
            <h2>Total Bursaries</h2>
            <p>{{ bursars.length }}</p>
          </div>
          <div class="stat-card">
            <h2>Active Bursaries</h2>
            <p>{{ activeBursars.length }}</p>
          </div>
          <div class="stat-card">
            <h2>Inactive Bursaries</h2>
            <p>{{ inactiveBursars.length }}</p>
          </div>
        </div>
  
        <!-- Recent Activity -->
        <div class="recent-activity">
          <h2>Recent Applications</h2>
          <ul>
            <li v-for="activity in recentActivities" :key="activity.id">
              {{ activity.name }} applied on {{ activity.date }}
            </li>
          </ul>
        </div>
  
        <!-- Quick Actions -->
        <div class="quick-actions">
          <h2>Quick Actions</h2>
          <button @click="viewAllBursars">View All Bursars</button>
          <button @click="addBursary">Add New Bursary</button>
          <button @click="viewReports">View Reports</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BursaryDashboard",
    data() {
      return {
        bursars: [
          { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
          { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
          { id: 3, name: "Mike Johnson", email: "mike@example.com", status: "Active" },
        ],
        recentActivities: [
          { id: 1, name: "Alice Walker", date: "2024-12-01" },
          { id: 2, name: "Bob Carter", date: "2024-12-02" },
        ],
      };
    },
    computed: {
      activeBursars() {
        return this.bursars.filter((bursar) => bursar.status === "Active");
      },
      inactiveBursars() {
        return this.bursars.filter((bursar) => bursar.status === "Inactive");
      },
    },
    methods: {
      viewAllBursars() {
        this.$router.push({ name: "BursarList" });
      },
      addBursary() {
        this.$router.push({ name: "AddBursary" });
      },
      viewReports() {
        this.$router.push({ name: "Reports" });
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard-page {
    font-family: 'Poppins', sans-serif;
    background-color: #f4f4f8;
    min-height: 100vh;
    padding: 20px;
  }
  
  /* Navbar */
  .navbar {
    background-color: #4c4cff;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-links {
    display: flex;
    gap: 1rem;
    list-style: none;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
  }
  
  /* Header */
  .dashboard-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .header-title {
    font-size: 2.5rem;
    color: #333;
  }
  
  .header-subtitle {
    font-size: 1.2rem;
    color: #666;
  }
  
  /* Dashboard Content */
  .dashboard-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  /* Statistics */
  .statistics {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
  }
  
  .stat-card {
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .stat-card h2 {
    font-size: 1.5rem;
    color: #333;
  }
  
  .stat-card p {
    font-size: 2rem;
    font-weight: bold;
    color: #4c4cff;
  }
  
  /* Recent Activity */
  .recent-activity {
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .recent-activity h2 {
    font-size: 1.5rem;
    color: #333;
  }
  
  /* Quick Actions */
  .quick-actions {
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .quick-actions h2 {
    font-size: 1.5rem;
    color: #333;
  }
  
  .quick-actions button {
    margin-right: 10px;
    padding: 10px 20px;
    background-color: #4c4cff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .quick-actions button:hover {
    background-color: #2e2edc;
  }
  </style>
  