import React, { useEffect, useState } from "react";
import axios from "axios";

const ListJobVacancy = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    city: "",
    company: "",
    jobType: "",
  });

  const API_URL = "https://final-project-api-alpha.vercel.app/api/jobs";

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setJobs(response.data);
      setFilteredJobs(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Update pencarian dan filter
  useEffect(() => {
    let filtered = jobs;

    // Filter berdasarkan kota
    if (filters.city) {
      filtered = filtered.filter((job) =>
        job.company_city.toLowerCase().includes(filters.city.toLowerCase())
      );
    }

    // Filter berdasarkan perusahaan
    if (filters.company) {
      filtered = filtered.filter((job) =>
        job.company_name.toLowerCase().includes(filters.company.toLowerCase())
      );
    }

    // Filter berdasarkan jenis pekerjaan
    if (filters.jobType) {
      filtered = filtered.filter((job) =>
        job.job_type.toLowerCase().includes(filters.jobType.toLowerCase())
      );
    }

    // Pencarian berdasarkan judul
    if (search) {
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredJobs(filtered);
  }, [filters, search, jobs]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-10 px-4">
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

      {/* Tabel Data */}
      <div className="shadow-lg rounded-lg mb-10 overflow-hidden">
        <table className="w-full table-auto border-separate border-spacing-0">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left">No</th>
              <th className="px-6 py-3 text-left">Judul</th>
              <th className="px-6 py-3 text-left">Perusahaan</th>
              <th className="px-6 py-3 text-left">Kota</th>
              <th className="px-6 py-3 text-left">Gaji</th>
              <th className="px-6 py-3 text-left">Tipe</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job, index) => (
              <tr key={job._id} className="odd:bg-white even:bg-gray-100">
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3">{job.title || "Untitled Job"}</td>
                <td className="px-6 py-3">{job.company_name}</td>
                <td className="px-6 py-3">{job.company_city}</td>
                <td className="px-6 py-3">
                  {job.salary_min.toLocaleString()} - {job.salary_max.toLocaleString()} IDR
                </td>
                <td className="px-6 py-3">{job.job_type}</td>
                <td className="px-6 py-3">
                  {job.job_status === 1 ? "Dibuka" : "Ditutup"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListJobVacancy;
