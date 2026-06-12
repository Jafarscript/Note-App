import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);


  const API = import.meta.env.VITE_API_URL

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    axios
      .post(`${API}/auth/login`, formData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/notes");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failure", error.message);
        setLoading(false);
      });
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="min-h-screen bg-[#0e0e10] flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-[#17171a] border border-[#2e2e33] rounded-2xl p-10">

        {/* Logo */}
        <div style={{ fontFamily: "'Syne', sans-serif" }} className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#c8f5a0] inline-block"></span>
          <span className="text-[#c8f5a0] text-xl font-bold tracking-tight">NoteSpace</span>
        </div>

        {/* Heading */}
        <h1 style={{ fontFamily: "'Syne', sans-serif" }} className="text-2xl font-semibold text-[#f0f0f2] mb-1">
          Welcome back
        </h1>
        <p className="text-sm text-[#6b6b75] mb-8">Sign in to your account to continue</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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

          <div className="relative">
            <label className="block text-[11px] font-medium text-[#8a8a96] uppercase tracking-widest mb-1.5">
              Password
            </label>
            <input
              onChange={handleChange}
              value={formData.password}
              type={showPassword ? "text" : "password"}
              required
              name="password"
              placeholder="••••••••"
              className="w-full bg-[#1e1e22] border border-[#2e2e36] rounded-xl px-4 py-3 text-sm text-[#f0f0f2] placeholder-[#44444e] outline-none focus:border-[#c8f5a0] transition-colors"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 text-[#f0f0f2] top-9">{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="w-full bg-[#c8f5a0] hover:bg-[#b5ef88] text-[#0e0e10] font-medium text-sm rounded-xl py-3 mt-1 cursor-pointer transition-colors"
          >
            {loading ? "Siging in..." : "Sign in"}
          </button>
        </form>

        <p className="text-center text-sm text-[#6b6b75] mt-6">
          No account?{" "}
          <Link to="/register" className="text-[#c8f5a0] hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;