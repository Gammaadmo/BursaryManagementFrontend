<template>
    <div class="applications">
      <!-- Header -->
      <header class="header">
        <h1 class="applications-title">Bursary Applications</h1>
        <p class="applications-subtitle">Manage and review applications efficiently.</p>
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search by name or email..."
          class="search-bar"
        />
      </header>
  
      <!-- Applications Table -->
      <div v-if="filteredApplications.length === 0" class="no-applications">
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="app in filteredApplications" :key="app.id">
              <td>{{ app.id }}</td>
              <td>{{ app.name }}</td>
              <td>{{ app.email }}</td>
              <td :class="getStatusClass(app.status)">
                <div @click="toggleStatusDropdown(app.id)">
                  {{ app.status }}
                  <div v-if="selectedAppId === app.id" class="status-dropdown">
                    <select v-model="app.status" @change="updateStatus(app.id)">
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <button @click="viewApplication(app.id)" class="view-btn">View</button>
                <button @click="deleteApplication(app.id)" class="delete-btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Pagination -->
        <div class="pagination">
          <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
          <span>Page {{ currentPage }} of {{ totalPages }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BursarApplications",
    data() {
      return {
        searchQuery: "",
        currentPage: 1,
        itemsPerPage: 5,
        selectedAppId: null,
        applications: [
          { id: 1, name: "John Doe", email: "johndoe@example.com", status: "Pending" },
          { id: 2, name: "Jane Smith", email: "janesmith@example.com", status: "Approved" },
          { id: 3, name: "Jim Beam", email: "jimbeam@example.com", status: "Rejected" },
          { id: 4, name: "Emma Watson", email: "emmawatson@example.com", status: "Approved" },
          { id: 5, name: "Chris Evans", email: "chrisevans@example.com", status: "Pending" },
          { id: 6, name: "Scarlett Johansson", email: "scarlett@example.com", status: "Rejected" },
        ],
      };
    },
    computed: {
      filteredApplications() {
        const filtered = this.applications.filter(
          (app) =>
            app.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            app.email.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
        return filtered.slice(
          (this.currentPage - 1) * this.itemsPerPage,
          this.currentPage * this.itemsPerPage
        );
      },
      totalPages() {
        return Math.ceil(this.applications.length / this.itemsPerPage);
      },
    },
    methods: {
      viewApplication(id) {
        console.log("Viewing application:", id);
      },
      deleteApplication(id) {
        console.log("Deleting application:", id);
      },
      previousPage() {
        if (this.currentPage > 1) this.currentPage--;
      },
      nextPage() {
        if (this.currentPage < this.totalPages) this.currentPage++;
      },
      getStatusClass(status) {
        if (status === "Approved") return "approved";
        if (status === "Rejected") return "rejected";
        return "pending";
      },
      toggleStatusDropdown(appId) {
        this.selectedAppId = this.selectedAppId === appId ? null : appId;
      },
      updateStatus(appId) {
        console.log("Status updated for application ID:", appId);
      },
    },
  };
  </script>
  
  <style scoped>
  /* General Styling */
  .applications {
    font-family: "Poppins", sans-serif;
    padding: 20px;
    text-align: center;
    background-color: #f9f9f9;
    min-height: 100vh;
  }
  
  /* Header Styling */
  .header {
    margin-bottom: 20px;
  }
  
  .applications-title {
    font-size: 2.5rem;
    color: #007bff;
    margin-bottom: 8px;
  }
  
  .applications-subtitle {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 20px;
  }
  
  .search-bar {
    width: 60%;
    padding: 10px;
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
    transition: box-shadow 0.3s;
  }
  
  .search-bar:focus {
    box-shadow: 0px 4px 12px rgba(0, 123, 255, 0.4);
  }
  
  /* Table Styling */
  .applications-table {
    width: 90%;
    margin: 0 auto 20px;
    border-collapse: collapse;
    background-color: white;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .applications-table th,
  .applications-table td {
    padding: 15px;
    text-align: left;
  }
  
  .applications-table th {
    background-color: #f1f1f1;
    color: #333;
    font-weight: bold;
  }
  
  .applications-table tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  .applications-table tr:hover {
    background-color: #f1f9ff;
  }
  
  /* Buttons Styling */
  .view-btn,
  .delete-btn {
    margin: 0 4px;
    padding: 8px 12px;
    border: none;
    border-radius: 6px;
    font-size: 0.9rem;
    cursor: pointer;
    color: white;
    transition: background-color 0.3s ease;
  }
  
  .view-btn {
    background-color: #007bff;
  }
  
  .delete-btn {
    background-color: #dc3545;
  }
  
  .view-btn:hover {
    background-color: #0056b3;
  }
  
  .delete-btn:hover {
    background-color: #c82333;
  }
  
  /* Pagination Styling */
  .pagination {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  
  .pagination button {
    padding: 8px 16px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .pagination button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  
  .pagination button:hover:not(:disabled) {
    background-color: #0056b3;
  }
  
  .pagination span {
    font-size: 1rem;
    color: #333;
  }
  
  /* Status Dropdown Styling */
  .status-dropdown {
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 6px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .status-dropdown select {
    padding: 5px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  
  /* Status Colors */
  .approved {
    color: green;
  }
  
  .rejected {
    color: red;
  }
  
  .pending {
    color: orange;
  }
  </style>
  