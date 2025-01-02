import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./home";
import Jobs from "./jobs";
import JobDetail from "./jobDetail";
import Header from "./header";
import Footer from "./footer";
import ErrorPage from "./error";
import LoginPage from "./login";
import Dashboard from "./dashboard";
import ListJobVacancy from "./listJob";
import DataForm from "./dataForm";
import DashboardLayout from "./dashboardLayout"; 

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Rute Utama */}
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job-vacancy/:id" element={<JobDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />

        {/* Rute Dashboard khusus Login*/}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} /> {/* Halaman Dashboard Utama */}
          <Route path="list-job-vacancy" element={<ListJobVacancy />} />
          <Route path="list-job-vacancy/form" element={<DataForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
