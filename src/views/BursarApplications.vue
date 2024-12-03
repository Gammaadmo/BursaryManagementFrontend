<template>
    <div class="applications">
      <h1 class="applications-title">Bursary Applications</h1>
      <div v-if="applications.length === 0" class="no-applications">
        <p>No applications found.</p>
      </div>
      <div v-else>
        <table class="applications-table">
          <thead>
            <tr>
              <th>Application ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="app in applications" :key="app.id">
              <td>{{ app.id }}</td>
              <td>{{ app.name }}</td>
              <td>{{ app.email }}</td>
              <td>{{ app.status }}</td>
              <td><button @click="viewApplication(app.id)" class="view-btn">View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BursarApplications',
    data() {
      return {
        applications: [
          { id: 1, name: 'John Doe', email: 'johndoe@example.com', status: 'Pending' },
          { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', status: 'Approved' },
          { id: 3, name: 'Jim Beam', email: 'jimbeam@example.com', status: 'Rejected' },
        ],
      };
    },
    methods: {
      viewApplication(id) {
        // Logic to view a specific application
        console.log('Viewing application:', id);
      },
    },
  };
  </script>
  
  <style scoped>
  .applications {
    font-family: Arial, sans-serif;
    margin-top: 50px;
    text-align: center;
  }
  
  .applications-title {
    color: #007bff; /* Blue color */
    font-size: 36px;
  }
  
  .applications-table {
    width: 80%;
    margin: 0 auto;
    border-collapse: collapse;
  }
  
  .applications-table th, .applications-table td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  .applications-table th {
    background-color: #f4f4f4;
  }
  
  .view-btn {
    background-color: #007bff; /* Blue color */
    color: white;
    border: none;
    padding: 6px 12px;
    cursor: pointer;
  }
  
  .view-btn:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
  
  .no-applications {
    color: #333;
    font-size: 18px;
    margin-top: 20px;
  }
  </style>
  