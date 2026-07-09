import React, { useState } from 'react'

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

      const handleLogin = (e) => {
      e.preventDefault();

      console.log("Email:", email);
      console.log("Password:", password);

    // Bu yerda API ga request yuboriladi
    };
    
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-[400px]"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Xush kelibsiz!!!
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-6 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  )
}
