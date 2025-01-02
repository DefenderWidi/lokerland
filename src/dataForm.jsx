import React, { useEffect, useState } from "react";
import axios from "axios";

const DataForm = () => {
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: 1,
    salary_min: "",
    salary_max: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
  });
  const [editId, setEditId] = useState(null);
  const API_URL = "https://final-project-api-alpha.vercel.app/api/jobs";

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      if (editId) {
        await axios.put(
          `${API_URL}/${editId}`,
          { ...formData, job_status: parseInt(formData.job_status, 10) },
          { headers }
        );
        alert("Data berhasil diperbarui!");
      } else {
        await axios.post(
          API_URL,
          { ...formData, job_status: parseInt(formData.job_status, 10) },
          { headers }
        );
        alert("Data berhasil ditambahkan!");
      }

      setFormData({
        title: "",
        job_description: "",
        job_qualification: "",
        job_type: "",
        job_tenure: "",
        job_status: 1,
        salary_min: "",
        salary_max: "",
        company_name: "",
        company_image_url: "",
        company_city: "",
      });
      setEditId(null);
      fetchData();
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Terjadi kesalahan saat mengirim data. Silakan coba lagi.");
    }
  };

  const handleDelete = async (id, title) => {
    const isConfirmed = window.confirm(`Apakah Anda yakin ingin menghapus data "${title}"?`);
    if (isConfirmed) {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        await axios.delete(`${API_URL}/${id}`, { headers });
        alert(`Data "${title}" berhasil dihapus!`);
        fetchData();
      } catch (error) {
        console.error("Error deleting data:", error);
        alert("Terjadi kesalahan saat menghapus data. Silakan coba lagi.");
      }
    }
  };

  const handleEdit = (job) => {
    setEditId(job._id);
    setFormData({ ...job });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-10 px-4">
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
              <th className="px-6 py-3 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id} className="odd:bg-white even:bg-gray-100">
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3">{job.title || "Untitled Job"}</td>
                <td className="px-6 py-3">{job.company_name}</td>
                <td className="px-6 py-3">{job.company_city}</td>
                <td className="px-6 py-3">
                  {job.salary_min.toLocaleString()} - {job.salary_max.toLocaleString()}
                </td>
                <td className="px-6 py-3">{job.job_type}</td>
                <td className="px-6 py-3">{job.job_status === 1 ? "Dibuka" : "Ditutup"}</td>
                <td className="px-6 py-3 text-center">
  <div className="flex justify-center gap-2">
    <button
      onClick={() => handleEdit(job)}
      className="text-white bg-yellow-500 hover:bg-yellow-600 font-medium rounded-lg text-sm px-5 py-2.5"
    >
      Edit
    </button>
    <button
      onClick={() => handleDelete(job._id, job.title || "Untitled Job")}
      className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5"
    >
      Delete
    </button>
  </div>
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form Data */}
      <form onSubmit={handleSubmit} className="shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">{editId ? "Edit Data" : "Tambah Data"}</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Judul", name: "title" },
            { label: "Deskripsi", name: "job_description" },
            { label: "Kualifikasi", name: "job_qualification" },
            { label: "Perusahaan", name: "company_name" },
            { label: "Kota", name: "company_city" },
            { label: "Tipe", name: "job_type" },
            { label: "Tenure", name: "job_tenure" },
            { label: "Gaji Minimum", name: "salary_min", type: "number" },
            { label: "Gaji Maksimum", name: "salary_max", type: "number" },
            { label: "URL Logo Perusahaan", name: "company_image_url" },
          ].map((field, index) => (
            <div key={index}>
              <label className="block mb-2">{field.label}:</label>
              <input
                type={field.type || "text"}
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder={`Masukkan ${field.label}`}
                required
              />
            </div>
          ))}
<div>
  <label className="block mb-2">Status:</label>
  <select
    name="job_status"
    value={formData.job_status}
    onChange={handleInputChange}
    className="w-full px-3 py-2 border rounded-lg"
    required
  >
    <option value={1}>Dibuka (1)</option>
    <option value={0}>Ditutup (0)</option>
  </select>
</div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
        >
          {editId ? "Simpan Perubahan" : "Tambah"}
        </button>
      </form>
    </div>
  );
};

export default DataForm;
