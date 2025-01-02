import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./hero";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaBriefcase, FaDollarSign, FaClock, FaRocket, FaHandshake, FaUsers, FaThumbsUp } from "react-icons/fa";
import testimoni1 from "./assets/testimoni1.png";
import testimoni2 from "./assets/testimoni2.png";
import testimoni3 from "./assets/testimoni3.png";
import testimoni4 from "./assets/testimoni4.png";
import testimoni5 from "./assets/testimoni5.png";
import company1 from "./assets/company1.png";
import company2 from "./assets/company2.png";
import company3 from "./assets/company3.png";
import company4 from "./assets/company4.png";
import company5 from "./assets/company5.png";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const reviews = [
    {
      text: "Berkat LokerLand, saya berhasil mendapatkan pekerjaan impian saya hanya dalam beberapa hari! Platform ini sangat mudah digunakan dan penuh dengan peluang menarik.",
      name: "Ariesta Meyda",
      position: "Software Engineer di Google",
      image: testimoni1,
    },
    {
      text: "LokerLand mempermudah saya menemukan pekerjaan di bidang yang sesuai dengan minat saya. Saya terkesima dengan prosesnya yang cepat!",
      name: "Bryan Varrie",
      position: "UI/UX Designer di Microsoft",
      image: testimoni2,
    },
    {
      text: "Saya sangat merekomendasikan LokerLand. Banyak pilihan lowongan pekerjaan dari perusahaan ternama.",
      name: "Jennie Poetry",
      position: "Data Scientist di Amazon",
      image: testimoni3,
    },
    {
      text: "Platform ini sangat membantu saya menemukan pekerjaan pertama setelah lulus kuliah. Terima kasih, LokerLand!",
      name: "Gazza Amroe",
      position: "Junior Developer di Netflix",
      image: testimoni4,
    },
    {
      text: "Dengan LokerLand, saya bisa melamar pekerjaan hanya dalam hitungan menit. Saya terkesan dengan kemudahan dan kecepatannya!",
      name: "Sidney Beemo",
      position: "Project Manager di Meta",
      image: testimoni5,
    },
];
  const [currentReview, setCurrentReview] = useState(reviews[0]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("https://final-project-api-alpha.vercel.app/api/jobs");
        setJobs(response.data.slice(0, 3));
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch jobs. Please try again later.");
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Section Perusahaan Ternama */}
      <>
  <style>
    {`
      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    `}
  </style>
  <div className="container mx-auto py-10 overflow-hidden">
    <h2 className="text-3xl font-bold text-center mb-8">
      Temukan{" "}
      <span className="bg-gradient-to-br from-green-500 to-blue-600 bg-clip-text text-transparent">
        Loker{" "}
      </span>
      dari Puluhan Perusahaan Ternama
    </h2>

    {/* Kontainer Logo */}
    <div className="relative w-full overflow-hidden">
      {/* Untuk layar besar (Desktop dan Tablet) */}
      <div
        className="hidden md:flex animate-[marquee_30s_linear_infinite] gap-12 items-center"
        style={{
          whiteSpace: "nowrap",
          display: "flex",
        }}
      >
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex gap-16 items-center">
            <img
              src={company1}
              alt="Company 1"
              className="w-16 h-auto p-2"
            />
            <img
              src={company2}
              alt="Company 2"
              className="w-16 h-auto p-2"
            />
            <img
              src={company3}
              alt="Company 3"
              className="w-20 h-auto p-2"
            />
            <img
              src={company4}
              alt="Company 4"
              className="w-20 h-auto p-2"
            />
            <img
              src={company5}
              alt="Company 5"
              className="w-20 h-auto p-2"
            />
          </div>
        ))}
      </div>

      {/* Untuk Mobile */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 md:hidden">
        <img
          src={company1}
          alt="Company 1"
          className="w-16 h-auto p-2 mx-auto"
        />
        <img
          src={company2}
          alt="Company 2"
          className="w-16 h-auto p-2 mx-auto"
        />
        <img
          src={company3}
          alt="Company 3"
          className="w-20 h-auto p-2 mx-auto"
        />
        <img
          src={company4}
          alt="Company 4"
          className="w-20 h-auto p-2 mx-auto"
        />
        <img
          src={company5}
          alt="Company 5"
          className="w-20 h-auto p-2 mx-auto"
        />
      </div>
    </div>
  </div>
</>

      {/* Section Kelebihan */}
      <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
  Mengapa Memilih 
  <span className="bg-gradient-to-br from-green-500 to-blue-600 bg-clip-text text-transparent"> LokerLand</span>?
</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white border rounded-lg shadow-md text-center hover:shadow-lg transition">
            <FaRocket className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Proses Cepat</h3>
            <p className="text-gray-600">Lamar pekerjaan impian Anda hanya dengan beberapa klik</p>
          </div>
          <div className="p-6 bg-white border rounded-lg shadow-md text-center hover:shadow-lg transition">
            <FaHandshake className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Pasti Terpercaya</h3>
            <p className="text-gray-600">LokerLand bekerja sama dengan puluhan perusahaan ternama</p>
          </div>
          <div className="p-6 bg-white border rounded-lg shadow-md text-center hover:shadow-lg transition">
            <FaUsers className="text-purple-500 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Beragam Lowongan</h3>
            <p className="text-gray-600">
              Pilih lowongan dari berbagai bidang sesuai keahlian Anda
            </p>
          </div>
          <div className="p-6 bg-white border rounded-lg shadow-md text-center hover:shadow-lg transition">
            <FaThumbsUp className="text-yellow-500 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Mudah Digunakan</h3>
            <p className="text-gray-600">
              Tampilan intuitif untuk pengalaman terbaik
            </p>
          </div>
        </div>
      </div>

      {/* Pekerjaan Teratas */}
      <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
  <span className="bg-gradient-to-br from-green-500 to-blue-600 bg-clip-text text-transparent">Loker</span> Teratas untuk Anda!
</h2>
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
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
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
                <p className="text-sm text-gray-700 line-clamp-2 mb-3">{job.job_description}</p>

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

        {/* Tombol Temukan Pekerjaan Lainnya */}
        {!loading && !error && (
        <div className="mt-8 flex justify-end">
        <button
          onClick={() => navigate("/jobs")}
          className="py-2 px-4 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg flex items-center gap-2 transition"
        >
          Temukan Loker Lainnya
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L19.5 12L13.5 19.5M4.5 12H19.5"
            />
          </svg>
        </button>
      </div>      
        )}
      </div>

  {/* Umpan Balik */}
      <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Apa Kata Mereka Setelah Menggunakan
        <span className="bg-gradient-to-br from-green-500 to-blue-600 bg-clip-text text-transparent"> LokerLand</span>?
        </h2>
        <div className="bg-white border rounded-lg shadow-md p-8 text-center max-w-3xl mx-auto">
          <blockquote className="text-gray-600 italic mb-4">
            "{currentReview.text}"
          </blockquote>
          <p className="text-gray-800 font-semibold">{currentReview.name}</p>
          <p className="text-sm text-gray-500">{currentReview.position}</p>
        </div>

        {/* Foto reviewer */}
        <div className="flex justify-center items-center gap-4 mt-6">
          {reviews.map((review, index) => (
            <img
              key={index}
              src={review.image}
              alt={`Reviewer ${index + 1}`}
              className={`w-12 h-12 rounded-full border-2 cursor-pointer ${
                currentReview.name === review.name ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setCurrentReview(review)}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto mt-12 mb-12 py-10 bg-blue-600 rounded-lg flex items-center px-4 lg:px-8 text-white max-w-3xl">
  <div className="relative">
    <div className="flex items-center justify-center w-[150px] h-[150px] bg-blue-800 rounded-full shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-16 h-16 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
        />
      </svg>
    </div>
  </div>

  <div className="flex-1 text-center lg:text-left lg:pl-8">
    <h2 className="text-3xl font-bold mb-4">
      Anda Adalah Perusahaan yang Ingin Merekrut Pelamar?
    </h2>
    <p className="text-sm lg:text-base mb-6">
      Masuk sekarang untuk mendapatkan akses penuh ke LokerLand. Posting lowongan pekerjaan Anda
      dan temukan talenta terbaik untuk perusahaan Anda!
    </p>
    <button
      onClick={() => navigate("/login")}
      className="py-2 px-6 text-white bg-gradient-to-br from-green-500 to-blue-700 hover:bg-gradient-to-bl rounded-lg flex items-center gap-2 transition"
    >
      Masuk Sekarang
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L19.5 12L13.5 19.5M4.5 12H19.5"
        />
      </svg>
    </button>
  </div>
</div>

     {/* Footer */}
      <Footer />
    </main>
  );
}

export default Home;
