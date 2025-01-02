import React from "react";
import errorGif from "./assets/error.gif";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
      <img
  src={errorGif}
  alt="Error 404"
  className="mx-auto mb-4 w-80 h-auto"
/>
        <p className="text-lg text-gray-700 mb-8">
          Ups, sepertinya Anda tersesat.
        </p>
        <a
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;
