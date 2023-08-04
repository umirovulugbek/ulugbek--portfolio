import styled from "styled-components";

export const ContactStyle = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;

  margin-right: auto;
  max-width: 1210px;
  background: ${({ theme }) => theme.body};
  /* transition: all 0.4s linear; */
  transition: all 0.25s linear;
  min-height: 650px;

  padding-top: 200px;
  & .h2 {
    color: #1e0e62;
    font-style: normal;
    font-weight: 700;
    font-size: 58px;
    line-height: 70px;
    text-align: center;
    text-align: center;
    letter-spacing: -1px;
    margin: 0;
    @media (max-width: 600px) {
      font-size: 40px;
      line-height: 50px;
    }
    @media (max-width: 500px) {
      font-size: 35px;
      line-height: 50px;
    }
  }
  & .p {
    background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    font-size: 58px;
    text-align: center;
    line-height: 70px;
    @media (max-width: 1200px) {
      font-size: 28px;
    }
    @media (max-width: 600px) {
      font-size: 20px;
    }
    @media (max-width: 400px) {
      font-size: 15px;
    }
  }
  & .navbar-right {
    display: flex;
    flex-wrap: nowrap;
    flex: 1 0 67%;
    align-items: center;
    & h2 {
      margin: 0;
    }
    & ul {
      display: flex;
      text-align: right;
      margin-left: auto;
      & li {
        list-style-type: none;
        margin-right: 50px;
        & a {
          text-decoration: none;
          color: black;
        }
      }
    }
  }
  & .bottom-link {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    margin-top: 245px;
    & .navbar-right {
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      color: #42446e;
      display: flex;
      justify-content: space-between;
      & ul {
        display: flex;
        text-align: right;
        margin-left: auto;
        & li {
          list-style: none;
          a {
            font-weight: 400;
            font-size: 18px;
            line-height: 26px;
            color: #42446e !important;
          }
        }
        @media (max-width: 650px) {
          display: block;
          text-align: left;
          font-size: 16px;
        }
      }
    }
    & .navbar-left {
      display: flex;
      & .icons {
        margin-right: 20px;
      }
    }
    @media (max-width: 1100px) {
      display: block;
      margin: 15px;
      & .navbar-right {
        display: block;
        & ul {
          padding: 0;
        }
      }
    }
  }
  & hr {
    margin: 40px 0px 60px 0px;
    border: none;
    border: 1px solid #666666;
    opacity: 0.3;
  }
  & .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 60px;
    & ul {
      display: flex;
      padding: 0;
      & li {
        list-style-type: none;
        margin-right: 50px;
        & a {
          text-decoration: none;
          color: #42446e;
        }
      }
    }
    & p {
      color: #42446e;
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      & span {
        background: -webkit-linear-gradient(#13b0f5, #e70faa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    @media (max-width: 1100px) {
      display: block;
      margin: 15px;
      & ul {
        & li {
          margin-right: 30px;
        }
      }
    }
  }
`;
