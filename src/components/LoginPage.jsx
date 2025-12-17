import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const passRef = useRef("");
  const roleRef = useRef("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const password = passRef.current.value;
    const role = roleRef.current.value;

    if (!userName || !password || !role) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userName, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful");
        localStorage.setItem("token", data.token);
        localStorage.setItem("userEmail", userName);
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("role", role);
        navigate(role === "admin" ? "/admin" : "/");
      } else {
        toast.error(data.error || "Login failed");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-slate-100 to-indigo-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl border border-slate-200 px-8 py-6">
        <h1 className="text-3xl font-extrabold text-slate-900 text-center mb-6">
          Welcome back
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mb-5">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="text"
                required
                placeholder="Email"
                className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="Password"
                className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                ref={passRef}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Role
              </label>
              <input
                type="text"
                required
                placeholder="admin / user"
                className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                ref={roleRef}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-md transition"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
