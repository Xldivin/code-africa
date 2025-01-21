import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if user exists
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Login successful!");
      router.push("/dashboard/transactions");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Log In</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            placeholder="*************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
