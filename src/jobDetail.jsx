import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./footer";
import { FaMapMarkerAlt, FaBriefcase, FaClock, FaDollarSign } from "react-icons/fa";

function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`https://final-project-api-alpha.vercel.app/api/jobs/${id}`);
        setJob(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch job details. Please try again later.");
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
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
    );
  }

  if (error) {
    return <p className="text-center text-red-500 py-10">{error}</p>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto py-10 px-6 lg:px-20 flex-grow">
        <div className="bg-white border rounded-lg shadow-md p-8">
          <div className="flex items-center mb-4">
            <img
              src={job.company_image_url || "https://via.placeholder.com/100"}
              alt={job.company_name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-bold">{job.title}</h2>
              <p className="text-gray-500">{job.company_name}</p>
            </div>
          </div>
          <div className="mb-6 space-y-2 text-sm text-gray-600">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" /> <strong>Kota:</strong> {job.company_city}
            </p>
            <p className="flex items-center gap-2">
              <FaBriefcase className="text-green-500" /> <strong>Jenis Pekerjaan:</strong> {job.job_type}
            </p>
            <p className="flex items-center gap-2">
              <FaClock className="text-purple-500" /> <strong>Tenure:</strong> {job.job_tenure}
            </p>
            <p className="flex items-center gap-2">
              <FaDollarSign className="text-yellow-500" /> <strong>Gaji:</strong> {job.salary_min.toLocaleString()} - {job.salary_max.toLocaleString()} IDR
            </p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-lg">Deskripsi</h3>
            <p className="text-gray-700">{job.job_description}</p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-lg">Kualifikasi</h3>
            <p className="text-gray-700">{job.job_qualification}</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/jobs")}
              className="w-full py-3 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition"
            >
              Kembali ke Jobs
            </button>
            <button className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition">
              Lamar Sekarang
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default JobDetail;
