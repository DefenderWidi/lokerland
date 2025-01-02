import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./assets/lokerlandjustlogo.png";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); 

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    alert("Anda telah logout.");
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="LokerLand Logo" className="w-10 h-10 mr-2" />
          <span className="text-2xl font-bold bg-gradient-to-br from-green-500 to-blue-600 bg-clip-text text-transparent">
            LokerLand
          </span>
        </Link>

        {/* Navigasi */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className={`${
                  isActive("/") ? "text-blue-600 font-semibold" : "text-gray-700"
                } hover:text-blue-600`}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/jobs"
                className={`${
                  isActive("/jobs") ? "text-blue-600 font-semibold" : "text-gray-700"
                } hover:text-blue-600`}
              >
                Loker
              </Link>
            </li>

            {token ? (
              <>
                {/* Dashboard hanya untuk pengguna login */}
                <li>
                  <Link
                    to="/dashboard"
                    className={`${
                      isActive("/dashboard")
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    } hover:text-blue-600`}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  {/* Tombol Logout */}
                  <button
                    onClick={handleLogout}
                    className="text-red-500 hover:text-red-600 font-semibold"
                  >
                    Keluar
                  </button>
                </li>
              </>
            ) : (
              <li>
                {/* Tombol Masuk jika belum login */}
                <Link
                  to="/login"
                  className={`${
                    isActive("/login") ? "text-blue-600 font-semibold" : "text-gray-700"
                  } hover:text-blue-600`}
                >
                  Masuk
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
