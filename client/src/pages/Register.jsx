import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    profilePicture: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const API = import.meta.env.VITE_API_URL


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/auth/register`, formData)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Failure", error.message);
      });
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="min-h-screen bg-[#0e0e10] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#17171a] border border-[#2e2e33] rounded-2xl p-10">

        {/* Logo */}
        <div style={{ fontFamily: "'Syne', sans-serif" }} className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#c8f5a0] inline-block"></span>
          <span className="text-[#c8f5a0] text-xl font-bold tracking-tight">NoteSpace</span>
        </div>

        {/* Heading */}
        <h1 style={{ fontFamily: "'Syne', sans-serif" }} className="text-2xl font-semibold text-[#f0f0f2] mb-1">
          Create an account
        </h1>
        <p className="text-sm text-[#6b6b75] mb-8">Start organising your thoughts today</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* First + Last name row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-medium text-[#8a8a96] uppercase tracking-widest mb-1.5">
                First name
              </label>
              <input
                onChange={handleChange}
                value={formData.firstName}
                type="text"
                required
                name="firstName"
                placeholder="Lukman"
                className="w-full bg-[#1e1e22] border border-[#2e2e36] rounded-xl px-3 py-3 text-sm text-[#f0f0f2] placeholder-[#44444e] outline-none focus:border-[#c8f5a0] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-[#8a8a96] uppercase tracking-widest mb-1.5">
                Last name
              </label>
              <input
                onChange={handleChange}
                value={formData.lastName}
                type="text"
                required
                name="David"
                placeholder="Doe"
                className="w-full bg-[#1e1e22] border border-[#2e2e36] rounded-xl px-3 py-3 text-sm text-[#f0f0f2] placeholder-[#44444e] outline-none focus:border-[#c8f5a0] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-[#8a8a96] uppercase tracking-widest mb-1.5">
              Username
            </label>
            <input
              onChange={handleChange}
              value={formData.userName}
              type="text"
              required
              name="userName"
              placeholder="johndoe"
              className="w-full bg-[#1e1e22] border border-[#2e2e36] rounded-xl px-4 py-3 text-sm text-[#f0f0f2] placeholder-[#44444e] outline-none focus:border-[#c8f5a0] transition-colors"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-[#8a8a96] uppercase tracking-widest mb-1.5">
              Email
            </label>
            <input
              onChange={handleChange}
              value={formData.email}
              type="email"
              required
              name="email"
              placeholder="you@example.com"
              className="w-full bg-[#1e1e22] border border-[#2e2e36] rounded-xl px-4 py-3 text-sm text-[#f0f0f2] placeholder-[#44444e] outline-none focus:border-[#c8f5a0] transition-colors"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-[#8a8a96] uppercase tracking-widest mb-1.5">
              Password
            </label>
            <input
              onChange={handleChange}
              value={formData.password}
              type="password"
              required
              name="password"
              placeholder="••••••••"
              className="w-full bg-[#1e1e22] border border-[#2e2e36] rounded-xl px-4 py-3 text-sm text-[#f0f0f2] placeholder-[#44444e] outline-none focus:border-[#c8f5a0] transition-colors"
            />
          </div>

          <button
            type="submit"
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="w-full bg-[#c8f5a0] hover:bg-[#b5ef88] text-[#0e0e10] font-medium text-sm rounded-xl py-3 mt-1 cursor-pointer transition-colors"
          >
            Create account
          </button>
        </form>

        <p className="text-center text-sm text-[#6b6b75] mt-6">
          Already have an account?{" "}
          <Link to="/" className="text-[#c8f5a0] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;