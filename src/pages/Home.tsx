import { navItems } from "../data";
import Hero from "../components/Hero";
import Grid from "../components/Grid";
import Footer from "../components/Footer";
// import Clients from "../components/Clients";
import Experience from "../components/Experience";
import RecentProjects from "../components/RecentProjects";
import { FloatingNav } from "../components/ui/FloatingNavbar";
import About from "../components/About";
import Techstacks from "../components/Techstacks";
import Education from "../components/Approach";
import Resume from "../components/Resume";

const Home = () => {
  return (
    <>
      <main className="relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-black-100">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          {/* About section */}
          <About />
          <Grid />

          {/* techstack section */}
          <Techstacks />

          {/* Experience Section */}
          <Experience />

          {/* Recentprojects section */}
          <RecentProjects />

          {/* Education */}
          <Education />

          {/* Resume */}
          <Resume />

          {/* Footer section */}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
