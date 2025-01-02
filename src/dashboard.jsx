import React from "react";
import { FaRegSmile, FaRocket, FaClipboardList } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="bg-white p-6 shadow rounded-lg">
      {/* Header Section */}
      <div className="flex items-center space-x-4 mb-4">
        <h2 className="text-2xl font-bold text-gray-700">Selamat Datang di Dashboard LokerLand</h2>
      </div>
      <p className="text-gray-600 mb-6">
        Temukan semua fitur yang Anda butuhkan di sini. Gunakan menu di sebelah kiri untuk navigasi.
      </p>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center p-4 bg-blue-50 rounded-lg shadow-sm">
          <FaRocket className="text-blue-600 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Mulai Menambahkan Pekerjaan</h3>
            <p className="text-sm text-gray-600">
              Tambahkan informasi pekerjaan baru dengan mudah dan mulai temukan talenta terbaik.
            </p>
          </div>
        </div>

        <div className="flex items-center p-4 bg-blue-50 rounded-lg shadow-sm">
          <FaClipboardList className="text-blue-600 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Kelola Daftar Pekerjaan</h3>
            <p className="text-sm text-gray-600">
              Lihat dan kelola daftar pekerjaan yang telah Anda buat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
