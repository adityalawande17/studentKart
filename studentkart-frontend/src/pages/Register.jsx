import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";
import PageWrapper from "../components/PageWrapper";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await registerUser(form);

    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);
      navigate("/");
    }
  };

  return (
    <PageWrapper>
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow p-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-300">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <button className="w-full border-2 bg-blue-300 text-white py-2 rounded-3xl hover:bg-blue-400 transition">
            Register
          </button>
        </form>
      </div>
    </PageWrapper>
  );
};

export default Register;
