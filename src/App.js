import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage"
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return(
    <AuthProvider>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>}/>
    </Routes>
    </AuthProvider>
  );
}

export default App;
