import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loginImage from "./assets/login.png";

function LoginPage() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false); // Toggle antara login dan register
  const [passwordVisible, setPasswordVisible] = useState(false); // Toggle untuk fitur show/hide password
  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Email dan password wajib diisi!");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password harus minimal 8 karakter!");
      return;
    }

    if (isRegister) {
      if (!formData.name || !formData.image_url) {
        alert("Semua kolom wajib diisi untuk pendaftaran!");
        return;
      }
    }

    try {
      if (isRegister) {
        // Register
        const response = await axios.post(
          "https://final-project-api-alpha.vercel.app/api/auth/register",
          {
            name: formData.name,
            image_url: formData.image_url,
            email: formData.email,
            password: formData.password,
          }
        );
        alert("Pendaftaran berhasil! Silakan login.");
        setIsRegister(false);
        setFormData({ name: "", image_url: "", email: "", password: "" });
      } else {
        // Login
        const response = await axios.post(
          "https://final-project-api-alpha.vercel.app/api/auth/login",
          {
            email: formData.email,
            password: formData.password,
          }
        );

        localStorage.setItem("token", response.data.token);

        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 bg-white flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold mb-2">
          {isRegister ? "Daftar Sekarang" : "Selamat Datang Kembali"}
        </h1>
        <p className="text-gray-600 mb-8">
          {isRegister
            ? "Silakan masukkan detail Anda untuk mendaftar"
            : "Silakan masukkan detail akun Anda untuk melanjutkan"}
        </p>

        <div className="flex border-b mb-6">
          <button
            className={`px-6 py-2 ${
              !isRegister
                ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                : "text-gray-400"
            }`}
            onClick={() => setIsRegister(false)}
          >
            Masuk
          </button>
          <button
            className={`px-6 py-2 ${
              isRegister
                ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                : "text-gray-400"
            }`}
            onClick={() => setIsRegister(true)}
          >
            Daftar
          </button>
        </div>

        <form className="w-full max-w-md space-y-6" onSubmit={handleSubmit}>
          {isRegister && (
            <>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Nama</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Perusahaan Anda"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg p-3 text-gray-700"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  URL Profil
                </label>
                <input
                  type="text"
                  name="image_url"
                  placeholder="URL Foto Profil Perusahaan Anda"
                  value={formData.image_url}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg p-3 text-gray-700"
                  required
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="contoh@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-3 text-gray-700"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full border rounded-lg p-3 pr-10 text-gray-700"
                required
                minLength={8}
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
                onClick={() => setPasswordVisible((prev) => !prev)}
              >
                {passwordVisible ? "🙉" : "🙈"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {isRegister ? "Daftar" : "Masuk"}
          </button>
        </form>
      </div>
      <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center items-center">
        <img src={loginImage} alt="Login" className="w-72 h-72 object-contain" />
      </div>
    </div>
  );
}

export default LoginPage;
