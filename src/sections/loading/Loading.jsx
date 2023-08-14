import styled, { createGlobalStyle } from "styled-components";

const StyledElement = styled.div`
  align-items: center;
  backdrop-filter: blur(3px);
  /* background: rgba(0, 0, 0, 0.4); */
  background: white;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999999;

  .l {
    color: black;
    opacity: 0;
    animation: pass 2s ease-in-out infinite;
    animation-delay: 0.2s;
    letter-spacing: 0.5em;
    text-shadow: 2px 2px 3px #919191;
  }

  .o {
    color: black;
    opacity: 0;
    animation: pass 2s ease-in-out infinite;
    animation-delay: 0.4s;
    letter-spacing: 0.5em;
    text-shadow: 2px 2px 3px #919191;
  }

  .a {
    color: black;
    opacity: 0;
    animation: pass 2s ease-in-out infinite;
    animation-delay: 0.6s;
    letter-spacing: 0.5em;
    text-shadow: 2px 2px 3px #919191;
  }

  .d {
    color: black;
    opacity: 0;
    animation: pass 2s ease-in-out infinite;
    animation-delay: 0.8s;
    letter-spacing: 0.5em;
    text-shadow: 2px 2px 3px #919191;
  }

  .i {
    color: black;
    opacity: 0;
    animation: pass 2s ease-in-out infinite;
    animation-delay: 1s;
    letter-spacing: 0.5em;
    text-shadow: 2px 2px 3px #919191;
  }

  .n {
    color: black;
    opacity: 0;
    animation: pass 2s ease-in-out infinite;
    animation-delay: 1.2s;
    letter-spacing: 0.5em;
    text-shadow: 2px 2px 3px #919191;
  }

  .g {
    color: black;
    opacity: 0;
    animation: pass 2s ease-in-out infinite;
    animation-delay: 1.4s;
    letter-spacing: 0.5em;
    text-shadow: 2px 2px 3px #919191;
  }

  .d1 {
    color: black;
    opacity: 0;
    animation: pass1 2s ease-in-out infinite;
    animation-delay: 1.6s;
    letter-spacing: 0.5em;
    text-shadow: 2px 2px 3px #919191;
  }

  .d2 {
    color: black;
    opacity: 0;
    animation: pass1 2s ease-in-out infinite;
    animation-delay: 2s;
    letter-spacing: 0.5em;
    text-shadow: 2px 2px 3px #919191;
  }

  @keyframes pass {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes pass1 {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
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
      <span className="l">S</span>
      <span className="o">a</span>
      <span className="a">b</span>
      <span className="d">r</span>
      <span className="i">.</span>
      <span className="n">.</span>
      <span className="g">.</span>
      {/* <span class="d1">.</span>
  <span class="d2">.</span> */}
    </div>
    <Styles />
  </StyledElement>
);
export default Loading;
