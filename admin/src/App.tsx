import { useEffect, useState } from "react";
import "./index.css";
import { api } from "./api";

interface User {
  _id: string;
  name: string;
  email: string;
  provider: string;
  status: string;
  createdAt: string;
}
interface Stats {
  totalUsers: number;
  pendingUsers: number;
  approvedUsers: number;
}


function App() {
  const [users, setUsers] = useState<User[]>([]);

const [stats, setStats] = useState<Stats>({
  totalUsers: 0,
  pendingUsers: 0,
  approvedUsers: 0,
});
  const [loading, setLoading] = useState(true);

  async function loadDashboard() {
  try {
    setLoading(true);

    const pendingResponse = await api.get("/admin/pending");
    const statsResponse = await api.get("/admin/stats");

    setUsers(pendingResponse.data);
    setStats(statsResponse.data);
  } catch (error) {
    alert("Unable to load dashboard.");
  } finally {
    setLoading(false);
  }
}

  async function approveUser(id: string) {
  try {
    await api.patch(`/admin/approve/${id}`);

    alert("✅ User approved successfully!");

    await loadDashboard();
  } catch (error) {
    alert("Unable to approve user.");
  }
}

  useEffect(() => {
  loadDashboard();
}, []);
   
  if (loading) {
  return (
    <div className="app">
      <h2>Loading Dashboard...</h2>
    </div>
  );
} 
  return (
    <div className="app">
      <header className="header">
  <div>
    <div style={{ fontSize: "56px", marginBottom: "10px" }}>
  🌩️
</div>

<h1>WeatherGuard</h1>
    <p>Secure Weather Alert Management Dashboard</p>
  </div>

  <div className="header-right">
    <h3>WeatherGuard Admin</h3>
    <small>{new Date().toLocaleDateString()}</small>
  </div>
</header>

      <div className="cards">
  <div className="card">
    <h2>Total Users</h2>
    <h1>{stats.totalUsers}</h1>
  </div>

  <div className="card">
    <h2>Pending Users</h2>
    <h1>{stats.pendingUsers}</h1>
  </div>

  <div className="card">
    <h2>Approved Users</h2>
    <h1>{stats.approvedUsers}</h1>
  </div>

  <div className="card">
    <h2>Today's Weather</h2>
    <h1>🌦</h1>
    <p>Connected to OpenWeather API</p>
  </div>
</div>
      <div className="table-card">
        <h2>Pending Requests</h2>

        <table>
          <thead>
          <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Provider</th>
          <th>Status</th>
          <th>Joined</th>
          <th>Action</th>
          </tr>
          </thead>   

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.provider}</td>
              <td>{user.status}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              <td>
                <button
                  onClick={() => {
                    if (window.confirm("Approve this user?")) {
                      approveUser(user._id);
                      }
                      }}
          >
            Approve
          </button>
        </td>
      </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td colSpan={6}>No Pending Users</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <footer
    style={{
    marginTop: "40px",
    textAlign: "center",
    color: "#666",
    padding: "20px",
  }}
>
  © 2026 WeatherGuard | React • NestJS • MongoDB • Telegram
    </footer>
    </div>
  );
}

export default App;