import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./footer";
import { FaMapMarkerAlt, FaBriefcase, FaDollarSign, FaClock } from "react-icons/fa";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    city: "",
    company: "",
    jobType: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "https://final-project-api-alpha.vercel.app/api/jobs"
        );
        setJobs(response.data);
        setFilteredJobs(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch jobs. Please try again later.");
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    let filtered = jobs;
    if (filters.city) {
      filtered = filtered.filter((job) =>
        job.company_city.toLowerCase().includes(filters.city.toLowerCase())
      );
    }
    if (filters.company) {
      filtered = filtered.filter((job) =>
        job.company_name.toLowerCase().includes(filters.company.toLowerCase())
      );
    }
    if (filters.jobType) {
      filtered = filtered.filter((job) =>
        job.job_type.toLowerCase().includes(filters.jobType.toLowerCase())
      );
    }
    if (search) {
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredJobs(filtered);
  }, [filters, search, jobs]);

  return (
    <main>
      <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-4 text-center">
    Temukan Karier Impian Anda di Sini!
  </h2>
  <p className="text-center text-gray-600 mb-6">
    Ratusan loker menanti untuk membantu Anda mewujudkan masa depan cerah. Mulai perjalanan karier Anda sekarang!
  </p>
        {/* Search and Filter */}
        <div className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <input
              type="text"
              placeholder="Cari Nama Pekerjaan..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 border rounded-lg shadow-sm w-full"
            />

            {/* Filter Kota */}
            <select
              value={filters.city}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, city: e.target.value }))
              }
              className="p-2 border rounded-lg shadow-sm w-full"
            >
              <option value="">Pilih Kota</option>
              {[...new Set(jobs.map((job) => job.company_city))].map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            {/* Filter Perusahaan */}
            <select
              value={filters.company}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, company: e.target.value }))
              }
              className="p-2 border rounded-lg shadow-sm w-full"
            >
              <option value="">Pilih Perusahaan</option>
              {[...new Set(jobs.map((job) => job.company_name))].map((company) => (
                <option key={company} value={company}>
                  {company}
                </option>
              ))}
            </select>

            {/* Filter Jenis Pekerjaan */}
            <select
              value={filters.jobType}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, jobType: e.target.value }))
              }
              className="p-2 border rounded-lg shadow-sm w-full"
            >
              <option value="">Pilih Jenis Pekerjaan</option>
              {[...new Set(jobs.map((job) => job.job_type))].map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-10">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}

        {/* Error */}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Data Pekerjaan */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job._id}
                className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition"
              >
                {/* Header Pekerjaan */}
                <div className="flex items-center mb-3">
                  <img
                    src={job.company_image_url || "https://via.placeholder.com/50"}
                    alt={`${job.company_name} logo`}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <p className="text-sm text-gray-500">{job.company_name}</p>
                  </div>
                </div>

                {/* Informasi Lokasi, Tipe, Status, Tenure */}
                <div className="mb-3 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-500" />
                    {job.company_city}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaBriefcase className="text-green-500" />
                    {job.job_type}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaClock className="text-purple-500" />
                    {job.job_tenure}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaDollarSign className="text-yellow-500" />
                    {job.salary_min.toLocaleString()} - {job.salary_max.toLocaleString()} IDR
                  </p>
                  <p
                    className={`font-semibold ${
                      job.job_status === 1 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {job.job_status === 1 ? "Dibuka" : "Ditutup"}
                  </p>
                </div>

                {/* Deskripsi */}
                <p className="text-sm text-gray-700 line-clamp-2 mb-3">
                  {job.job_description}
                </p>

                {/* Tombol Apply */}
                {job.job_status === 1 ? (
                  <button
                    onClick={() => navigate(`/job-vacancy/${job._id}`)}
                    className="mt-3 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Lamar Sekarang
                  </button>
                ) : (
                  <button
                    type="button"
                    className="mt-3 w-full py-2 text-white bg-blue-400 cursor-not-allowed font-medium rounded-lg text-sm"
                    disabled
                  >
                    Lowongan Ditutup
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Jobs;
