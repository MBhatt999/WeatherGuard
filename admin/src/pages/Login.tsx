function Login() {
  const handleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div style={{ fontSize: "60px", marginBottom: "15px" }}>🌦</div>

        <div style={{ fontSize: "100px", marginBottom: "10px" }}>
  🌩️
</div>

<h1>WeatherGuard</h1>

        <p>
          Secure Weather Alert Management System
        </p>

        <button onClick={handleLogin}>
          Continue with Google
        </button>

        <small>
          Built with React • NestJS • MongoDB • Telegram
        </small>
      </div>
    </div>
  );
}

export default Login;