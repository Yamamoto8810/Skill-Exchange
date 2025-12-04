import './App.css';

function App() {
  return (
    <div className="dashboard-container">
      {/* --- サイドバー --- */}
      <aside className="sidebar">
        <div className="brand">MyDashboard</div>
        <ul className="sidebar-menu">
          <li className="active">🏠 Home</li>
          <li>📊 Analytics</li>
          <li>👥 Users</li>
          <li>⚙ Settings</li>
        </ul>
      </aside>

      {/* --- メインコンテンツ --- */}
      <main className="main-content">
        {/* ヘッダー */}
        <header className="header">
          <h1>Welcome Back, User!</h1>
          <button className="profile-btn">My Profile</button>
        </header>

        {/* カードグリッド */}
        <section className="cards">
          <div className="card-item">
            <h3>Total Users</h3>
            <p>1,245</p>
          </div>
          <div className="card-item">
            <h3>Active Sessions</h3>
            <p>320</p>
          </div>
          <div className="card-item">
            <h3>Server Load</h3>
            <p>45%</p>
          </div>
        </section>

        {/* 表やグラフを置くセクション */}
        <section className="content-section">
          <h2>Recent Activity</h2>
          <div className="activity-box">
            <p>No recent activity.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
