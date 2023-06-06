import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Anasayfa from "./pages/Anasayfa";
import EgzersizDetaylari from "./pages/EgzersizDetaylari";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/exercise/:id" element={<EgzersizDetaylari />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
