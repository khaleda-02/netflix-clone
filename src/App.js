import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { AuthContextProvider } from "./context/AuthContext";
import { Movie } from "./pages/Movie";
import ProtectedPage from "./components/ProtectedPage";
import Account from "./pages/Account";
import Search from "./pages/Search";
function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/search" element={<Search />} />
          <Route path="/account" element={<ProtectedPage><Account /></ProtectedPage>} />
          <Route path="/:id" element={<Movie />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
