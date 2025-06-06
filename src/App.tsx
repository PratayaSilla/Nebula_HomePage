import { useEffect, useRef } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.min.css";

import NebulaHero from "./components/hero/NebulaHero";
import About from "./components/hero/About";
import GitHubShowcase from "./components/hero/GitHubShowcase";
import EventsSection from "./components/hero/EventsSection";
import TeamPage from "./components/hero/TeamPage";
import AutoScrollingTestimonials from "./components/hero/AutoScrollingTestimonials";
import FloatingNavbar from "./components/hero/FloatingNavbar";
import VisualDiary from "./components/hero/VisualDiary";

function App() {
  const fullpageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fullpageRef.current) {
      const fp = new fullpage(fullpageRef.current, {
        autoScrolling: true,
        navigation: true,
        anchors: [
          "home",
          "about",
          "showcase",
          "testimonials",
          "events",
          "team",
        ],
        menu: "#navbar-menu", // optional if you want anchor sync with navbar
      });

      return () => {
        fp.destroy("all");
      };
    }
  }, []);

  return (
    <div className="relative">
      {/* Always-floating navbar at the top of the screen */}
      <FloatingNavbar />

      {/* Fullpage.js container */}
      <div ref={fullpageRef} id="fullpage">
        <div className="section">
          <NebulaHero />
        </div>
        <div className="section">
          <About />
        </div>
        <div className="section">
          <GitHubShowcase />
        </div>
        <div className="section">
          <AutoScrollingTestimonials />
        </div>
        <div className="section">
          <VisualDiary />
        </div>
        <div className="section">
          <EventsSection />
        </div>
        <div className="section">
          <TeamPage />
        </div>
      </div>
    </div>
  );
}

export default App;
