import { Route, Routes } from "react-router-dom";
import Navbar from "./comps/navbar";
import HomePage from "./pages/homepage";
import Footer from "./comps/footer";
import About from "./pages/about";
import Worked from "./pages/worked";
import Fiiro from "./pages/fiiro";
import Mira from "./pages/mira";
import Built from "./pages/built";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import ContactMe from "./pages/contactme";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="" element={<HomePage />}></Route>
      </Routes>
      <About />
      <Worked />
      <Fiiro />
      <Mira />
      <Built />
      <Projects />
      <Contact />

      <Footer />

      <Routes>
      <Route path="/contactme" element={<ContactMe />}></Route>
      </Routes>


    </div>
  );
};

export default App;
