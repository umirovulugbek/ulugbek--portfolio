import { Routes, Route } from "react-router";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Stack from "../components/Stack";
import Project from "../components/Project";
import About from "../components/About";


const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route>
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route>
          <Route path="/about" element={<About />} />
        </Route>
        <Route>
          <Route path="/stack" element={<Stack />} />
        </Route>
        <Route>
          <Route path="/projects" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
};
export default Routers;
