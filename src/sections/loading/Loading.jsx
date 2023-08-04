import styled, { createGlobalStyle } from "styled-components";

const StyledElement = styled.div`
  align-items: center;
  backdrop-filter: blur(3px);
  /* background: rgba(0, 0, 0, 0.4); */
  background: black;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999999;

  .loader {
  display: flex;
  align-items: center;
}

.bar {
  display: inline-block;
  width: 5px;
  height: 30px;
  background-color: rgba(255, 255, 255, .5);
  border-radius: 10px;
  animation: scale-up4 1s linear infinite;
}

.bar:nth-child(2) {
  height: 45px;
  margin: 0 5px;
  animation-delay: .25s;
}

.bar:nth-child(3) {
  animation-delay: .5s;
}

@keyframes scale-up4 {
  20% {
    background-color: #ffff;
    transform: scaleY(1.5);
  }

  40% {
    transform: scaleY(1);
  }
}
`;
const Styles = createGlobalStyle`
	body {
		overflow: hidden !important;
	}
`;
const Loading = () => (
  <StyledElement>
    <div className="loader">
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
</div>
    <Styles />
  </StyledElement>
);
export default Loading;
