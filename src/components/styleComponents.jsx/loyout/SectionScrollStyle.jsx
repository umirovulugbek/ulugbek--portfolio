
import styled from "styled-components";

export const SectionScroll = styled.div`
  & section {
    padding-bottom: 15vh;
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }

    .progress {
      position: fixed;
      left: 0;
      right: 0;
      height: 5px;
      background: var(--accent);
      bottom: 100px;
    }

    .parallax {
      overflow: hidden;
      letter-spacing: -2px;
      line-height: 0.8;
      margin: 0;
      white-space: nowrap;
      display: flex;
      flex-wrap: nowrap;
    }

    .parallax .scroller {
      font-weight: 600;
      text-transform: uppercase;
      font-size: 64px;
      display: flex;
      white-space: nowrap;
      display: flex;
      flex-wrap: nowrap;
    }
    
    .parallax span {
      display: block;
      
      margin-right: 30px;
      color: ${({theme}) => theme.plaster};
      font-family: "Plaster", sans-serif;
    }
  }
`;
