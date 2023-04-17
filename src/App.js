import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage"
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute";
import InvoicePage from "./pages/InvoicePage";
import Inbox from "./pages/Inbox";
import Statistics from "./pages/Statistics";
import Profile from "./pages/Profile";
import CreateInvoice from "./pages/CreateInvoice";
import InvoiceList from "./pages/InvoiceList";
import ContactsPage from "./pages/ContactsPage";

function App() {
  return(
    <AuthProvider>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="signin" element={<SignIn/>}/>
      <Route path="signup" element={<SignUp/>}/>
      <Route path="home" element={<PrivateRoute><Home/></PrivateRoute>}>
        
        <Route path="invoices" element={<InvoicePage/>}>
          <Route index="list" element={<InvoiceList/>}/>
          <Route path="create" element={<CreateInvoice/>}/>
        </Route>
        <Route path="contacts" element={<ContactsPage/>}>
          
        </Route>
        <Route path="inbox" element={<Inbox/>}/>
        <Route path="statistics" element={<Statistics/>}/>
        <Route path="profile" element={<Profile/>}/>

      </Route>
    </Routes>
    </AuthProvider>
  );
}

export default App;
