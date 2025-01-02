import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "./footer"; // Pastikan Anda sudah mengimpor komponen Footer

function DashboardLayout() {
  const location = useLocation();

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/dashboard/list-job-vacancy": "List Job Vacancy",
    "/dashboard/list-job-vacancy/form": "Data Form: Kelola Job Vacancy",
  };

  const currentTitle = pageTitles[location.pathname] || "Dashboard";

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-64 bg-blue-600 text-white flex flex-col">
          <div className="p-4 text-center font-bold text-lg">LokerLand Dashboard</div>
          <nav className="flex-grow">
            <ul className="space-y-2 p-4">
              <li>
                <Link
                  to="/dashboard"
                  className={`block py-2 px-4 rounded ${
                    isActive("/dashboard") ? "bg-blue-800 font-semibold" : "hover:bg-blue-700"
                  }`}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/list-job-vacancy"
                  className={`block py-2 px-4 rounded ${
                    isActive("/dashboard/list-job-vacancy")
                      ? "bg-blue-800 font-semibold"
                      : "hover:bg-blue-700"
                  }`}
                >
                  List Job Vacancy
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/list-job-vacancy/form"
                  className={`block py-2 px-4 rounded ${
                    isActive("/dashboard/list-job-vacancy/form")
                      ? "bg-blue-800 font-semibold"
                      : "hover:bg-blue-700"
                  }`}
                >
                  Data Form
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow flex flex-col">
          {/* Header */}
          <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">{currentTitle}</h1>
          </header>
          {/* Content */}
          <div className="p-6 flex-grow">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
