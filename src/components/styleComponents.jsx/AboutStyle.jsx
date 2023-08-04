import styled from "styled-components";

export const AboutStyle = styled.div`
  background: ${({ theme }) => theme.body};
  min-height: 650px;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 1210px;
  transition: all 0.25s linear;
  padding-bottom: 50px;
  & .about-items {
    width: 50%;
    padding-top: 100px;
    h2 {
      color: #42446e;
      font-family: Poppins;
      font-size: 42px;
      font-style: normal;
      font-weight: 700;
      line-height: 52px; /* 123.81% */
      letter-spacing: -0.4px;
    }
    & .about-p {
      color: var(--dark-content, #666);
      font-family: Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px; /* 144.444% */
    }
    & .work-experience {
      & .work-experience__items {
        border-bottom: 2px solid #ebeaed;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
        & .job {
          /* display: flex;
          justify-content: space-between; */
          & .company-right {
            display: flex;
            & .company-right-LLC {
              margin-right: 20px;
            }
            & .company-item {
              color: var(--light-content, #a7a7a7);
              font-family: Poppins;
              font-size: 12px;
              font-style: normal;
              font-weight: 500;
              line-height: 28px; /* 233.333% */
              letter-spacing: 1px;
              align-items: center;
              display: flex;
              justify-content: center;
              & img {
                margin-right: 4px;
              }
            }
          }
          & .job-space {
            color: var(--dark-content, #666);
            font-family: Poppins;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 28px; /* 140% */
            letter-spacing: 1px;
          }
          
        }
        & .company {
          margin-bottom: 26px;
          /* display: flex;
          justify-content: space-between; */
          & .job-time {
            color: var(--button-text, #018c0f);
            text-align: center;
            font-family: Poppins;
            font-size: 9px;
            font-style: normal;
            font-weight: 600;
            line-height: 26px; /* 288.889% */
            border-radius: 100px;
            background: var(--button-success, #d7ffe0);
            padding: 1px 21px;
            height: 24px;
          }
          & .company-item {
            color: var(--light-content, #a7a7a7);
            font-family: Poppins;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px; /* 233.333% */
            letter-spacing: 1px;
            display: flex;
            justify-content: center;
            & img {
              margin-right: 4px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1200px) {
    padding: 0px 10px;
  }
  @media (max-width: 900px) {
    .about-items {
      width: 100%;
    }
  }
`;
