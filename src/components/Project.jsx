
import { Container } from "./styleComponents.jsx/HomeStyle";
import Loyout from "./loyout/Loyout";
import ProjectItem from "./ProjectItem";
import styled from "styled-components";

const StyleComponents = styled.div`
padding-top: 145px;
`
const Project = () => {
  return (
    <div>
      <Loyout>
        <Container>
         <StyleComponents>
          <div className="section-project">
            <h2 style={{ textAlign: "center" }}>Projects</h2>
            <p style={{ textAlign: "center" }}>Things I’ve built so far</p>
            <ProjectItem />
          </div>
         </StyleComponents>
        </Container>
      </Loyout>
    </div>
  );
};

export default Project;
