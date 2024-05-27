import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import FlightSearch from "./pages/FlightSearch.jsx"; // Import the new FlightSearch component
import BookingConfirmation from "./pages/BookingConfirmation.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/flight-search" element={<FlightSearch />} /> {/* Add the new route */}
      <Route path="/booking-confirmation" element={<BookingConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
