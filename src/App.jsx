import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";
import { useEffect, useState } from "react";

const App = () => {
  
  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();      
        fetch("https://portfoliomanager.herokuapp.com/api/ipaddresses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ip:data.ip}),
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchIp();
  }, []);

  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
      <Analytics />
    </main>
  );
};

export default App;
