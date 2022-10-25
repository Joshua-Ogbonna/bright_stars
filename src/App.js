import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/Login";
// Styles
import "./styles/Navbar.css";
import "./styles/Main.css";
import "./styles/Auth.css";
import "./styles/Dashboard.css";
import "react-toastify/dist/ReactToastify.css";

// Components
import AdminLogin from "./views/AdminLogin";
import Admin from "./views/Admin";
import DashboardIndex from "./components/AdminDashboard/DashboardIndex";
import Students from "./components/AdminDashboard/Students";
import Teachers from "./components/AdminDashboard/Teachers";
import Requests from "./components/AdminDashboard/Requests";
import AddNewStudent from "./components/AdminDashboard/AddNewStudent";
import PrivateAdmin from "./views/PrivateAdmin";
import PublicAdmin from "./views/PublicAdmin";

// Private student
import PrivateStudent from "./views/PrivateStudent";
import StudentDashboard from "./components/studentDashboard/StudentDashboard";
import PublicUser from "./views/PublicUser";
import StudentIndex from "./components/studentDashboard/StudentIndex";
import Results from "./components/studentDashboard/Results";
import AdminResults from "./components/AdminDashboard/AdminResults";
import Transcripts from "./components/studentDashboard/Transcripts";
import Complaints from "./components/studentDashboard/Complaints";
import StudentSingle from "./components/AdminDashboard/StudentSingle";
import Admissions from "./views/Admissions";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<PublicUser />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PublicAdmin />}>
            <Route path="/admin-login" element={<AdminLogin />} />
          </Route>
          <Route element={<PrivateAdmin />}>
            <Route path="/admin" element={<Admin />}>
              <Route path="" element={<DashboardIndex />} />
              <Route path="students" element={<Students />} />
              <Route path="teachers" element={<Teachers />} />
              <Route path="requests" element={<Requests />} />
              <Route path="add-student" element={<AddNewStudent />} />
              <Route path="student/:id" element={<StudentSingle />} />
              <Route path="edit-student" element={<AdminResults />} />
            </Route>
          </Route>
          <Route element={<PrivateStudent />}>
            <Route path="/dashboard" element={<StudentDashboard />}>
              <Route path="" element={<StudentIndex />} />
              <Route path="results" element={<Results />} />
              <Route path="transcripts" element={<Transcripts />} />
              <Route path="complaints" element={<Complaints />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
