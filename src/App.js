import "./App.css";
// import ExperienceDetails from "./Component/ExperienceDetails/ExperienceDetailsInfosys";
import Education from "./Component/Education/Education";
import Intro from "./Component/Introduction/Intro";
import WorkExperience from "./Component/WorkExperience/WorkExperience";
import PersonalProject from "./Component/PersonalProjects/PersonalProject";
import Contact from "./Component/Contact/Contact";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <WorkExperience />
      <PersonalProject />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
