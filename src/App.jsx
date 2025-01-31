import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import UpcomingMoviePage from "./pages/UpcomingMoviePage";
import TopRatedPage from "./pages/TopRatedPage";
import SingleMoviePage from "./pages/SingleMoviePage";
import Searched from "./pages/Searched";
import Footer from "./components/Footer";
import PrivacyPage from "./pages/PrivacyPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/upcoming" element={<UpcomingMoviePage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/movie/:id" element={<SingleMoviePage />} />
          <Route path="/search/:query" element={<Searched />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
