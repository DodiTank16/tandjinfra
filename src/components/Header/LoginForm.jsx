function LoginForm({ active }) {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <form
      onSubmit={handleLogin}
      className={`login-form${active ? " active" : ""}`}>
      <h3>Login</h3>
      <input
        type="email"
        placeholder="Enter your email"
        className="box"
        required
      />
      <input
        type="password"
        placeholder="Enter your password"
        className="box"
        required
      />
      <div className="flex">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
        <a href="#">Forgot password?</a>
      </div>
      <button type="submit" className="btn">
        Login Now
      </button>
      <p>
        Don't have an account? <a href="#">Create one!</a>
      </p>
    </form>
  );
}

export default LoginForm;
