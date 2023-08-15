import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 1210px;
  padding: 41px 10px 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .navbar-right {
    margin: 0;
    display: flex;
    flex-wrap: nowrap;
    flex: 1 0 67%;
    align-items: center;
    & h2 {
      margin: 0;
      color: ${({ theme }) => theme.text};
    }
    & .logo{
     img{
      width: 180px;
    }
    }
    & ul {
      display: flex;
      text-align: right;
      margin-left: auto;
      & li {
        list-style-type: none;
        margin-right: 50px;
        transition: all 0.5s ease;
        & .active {
          color: #5762f7;
        }
        & a {
          text-decoration: none;
          color: ${({ theme: { text } }) => text};
          transition: all 0.5s ease;
        }
      }
      & li:hover {
        transform: scale(1.05);
        a {
          transform: scale(1.05);
          color: #5762f7;
        }
      }
    }
    @media (max-width: 900px) {
      & ul {
        display: none;
      }
    }
  }
  & .navbar-left {
    display: flex;
    & .icons {
      margin-right: 20px;
    }
  }
`;
