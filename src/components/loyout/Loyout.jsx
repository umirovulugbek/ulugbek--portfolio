/* eslint-disable react/prop-types */
import styled, { ThemeProvider } from "styled-components";
import Header from "./Header";
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "./theme";

const StyleComponents = styled.div`
  transition: all 0.25s linear;
  background: ${({ theme }) => theme.body};
  min-height: 900px;
`;
export default function Loyout(props) {
  const { theme } = useSelector((state) => state.main);
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Header />
        <StyleComponents className="mainSection">
          {props?.children}
        </StyleComponents>
      </ThemeProvider>
    </>
  );
}
