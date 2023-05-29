import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { Parent } from "./pages/Parent";

function App() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto bg-[#0B0B0B] min-h-screen text-[#fff]">
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route index element={<LandingPage />} />
            {/* <Route path="token" element={<Token />} />
            <Route path="businesses" element={<Businesses />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="about" element={<AboutUs />} /> */}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
