import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MyNetwork from "./pages/MyNetwork";
import Jobs from "./pages/Jobs";
import Messaging from "./pages/Messaging";
import Notifications from "./pages/Notifications";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import ForgotPass from "./pages/ForgotPass";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/linkedinclone/" element={<Login />} />
        <Route path="/linkedinclone/signup" element={<Signup />} />
        <Route path="/linkedinclone/signin" element={<Signin />} />
        <Route path="/linkedinclone/forgotpassword" element={<ForgotPass />} />
        <Route path="/linkedinclone/home" element={<Home />} />
        <Route path="/linkedinclone/network" element={<MyNetwork />} />
        <Route path="/linkedinclone/jobs" element={<Jobs />} />
        <Route path="/linkedinclone/messaging" element={<Messaging />} />
        <Route
          path="/linkedinclone/notifications"
          element={<Notifications />}
        />
        <Route path="/linkedinclone/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
