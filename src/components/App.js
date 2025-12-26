import React, { useState } from "react";

const users = [
  {
    id: 1,
    name: "ABC",
    email: "abc@gmail.com",
    password: "123",
  },
  {
    id: 2,
    name: "DEF",
    email: "def@gmail.com",
    password: "12345",
  },
  {
    id: 3,
    name: "GHI",
    email: "ghi@gmail.com",
    password: "123456",
  },
];

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState(""); 
  const [passwordError, setPasswordError] = useState(""); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setUserError("");
    setPasswordError("");
    setIsSubmitting(true);

    setTimeout(() => {
      const user = users.find((u) => u.email === email);

      if (!user) {
        const err = { message: "User not found" };
        console.log(err); 
        setUserError("User not found");
        setIsSubmitting(false);
        return;
      }

      if (user.password !== password) {
        const err = { message: "Password Incorrect" };
        console.log(err);
        setPasswordError("Password Incorrect");
        setIsSubmitting(false);
        return;
      }

      console.log(user);
      setIsSubmitting(false);
    }, 3000);
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="input-email">Email</label>
          <input id="input-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div id="user-error" style={{ color: "red", fontSize: "12px", minHeight: "16px" }}>{userError}</div>
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="input-password">Password</label>
          <input id="input-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div id="password-error" style={{ color: "red", fontSize: "12px", minHeight: "16px" }}>{passwordError}</div>
        </div>

        <button id="submit-form-btn" type="submit" disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "Login"}</button>
      </form>
    </div>
  );
};

export default App;