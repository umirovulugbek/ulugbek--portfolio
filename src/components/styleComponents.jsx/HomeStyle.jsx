import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;

  margin-right: auto;
  max-width: 1210px;
  & .home-section {
    padding: 150px 10px 200px 10px;
    display: flex;
    justify-content: space-between;
    & .home-section-title {
      & h1 {
        font-weight: 700;
        font-size: 58px;
        line-height: 70px;
        color: #42446e;
        /* width: 70%; */

        & span {
          background: -webkit-linear-gradient(#13b0f5, #e70faa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @media (max-width: 600px) {
          font-size: 38px;
          line-height: 50px;
        }
      }
      & a {
        /* text-decoration: none;
        color: ${({ theme }) => theme.text};
        background-color: orange;
        border-radius: 8px;
        font-weight: 600;

        */

        .button {
          --width: 200px;
          --height: 50px;
          --tooltip-height: 35px;
          --tooltip-width: 90px;
          --gap-between-tooltip-to-button: 18px;
          --button-color: #1163ff;
          --tooltip-color: #fff;
          width: var(--width);
          height: var(--height);
          background: var(--button-color);
          position: relative;
          text-align: center;
          border-radius: 8px;
          transition: background 0.3s;
        }

        .button::before {
          position: absolute;
          content: attr(data-tooltip);
          width: var(--tooltip-width);
          height: var(--tooltip-height);
          background-color: var(--tooltip-color);
          font-size: 0.9rem;
          color: #111;
          border-radius: 8em;
          line-height: var(--tooltip-height);
          bottom: calc(
            var(--height) + var(--gap-between-tooltip-to-button) + 10px
          );
          left: calc(50% - var(--tooltip-width) / 2);
        }

        .button::after {
          position: absolute;
          content: "";
          width: 0;
          height: 0;
          border: 10px solid transparent;
          border-top-color: var(--tooltip-color);
          left: calc(50% - 10px);
          bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);
        }

        .button::after,
        .button::before {
          opacity: 0;
          visibility: hidden;
          transition: all 0.5s;
        }

        .text {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .button-wrapper,
        .text,
        .icon {
          overflow: hidden;
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          color: #fff;
        }

        .text {
          top: 0;
        }

        .text,
        .icon {
          transition: top 0.5s;
        }

        .icon {
          color: #fff;
          top: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon svg {
          width: 24px;
          height: 24px;
        }

        .button:hover {
          background: #6c18ff;
        }

        .button:hover .text {
          top: -100%;
        }

        .button:hover .icon {
          top: 0;
        }

        .button:hover:before,
        .button:hover:after {
          opacity: 1;
          visibility: visible;
        }

        .button:hover:after {
          bottom: calc(
            var(--height) + var(--gap-between-tooltip-to-button) - 20px
          );
        }

        .button:hover:before {
          bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
        }
      }
    }
    @media (max-width: 1100px) {
      flex-direction: column-reverse;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 100px;
      & .home-section-title {
        h1 {
          width: 100%;
        }
      }
    }
    & .home-section-img {
      border-radius: 50%;
      & img {
        width: 340px;
        padding: 8px;
        height: 340px;
        border-radius: 50%;
        /* border: 8px solid red; */
        background: -webkit-linear-gradient(#13b0f5, #e70faa);
      }
      @media (max-width: 1100px) {
        text-align: center;
      }
      @media (max-width: 400px) {
        & img {
          height: 300px;
          width: 300px;
        }
      }
    }
  }

  & .section-stack {
    padding-bottom: 100px;
    & h2 {
      text-align: center;
      font-weight: 700;
      font-size: 48px;
      line-height: 26px;
      color: #42446e;
      margin: 0;
      margin: 50px 0px;
    }
    & p {
      text-align: center;
      color: #666666;
      font-weight: 400;
      font-size: 32px;
      line-height: 35px;
      margin: 0;
      margin-bottom: 140px;
    }
    & .stack-img {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 2rem;
      justify-content: center;
      justify-items: center;
      & .hover {
        transform: scale(1.2);
        -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
        filter: grayscale(0%);
      }
      & .not-hovered {
        /* transform: scale(1.2); */
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
      }
      & img {
        transition: all 0.5s ease-in-out;
        width: 120px;
        height: 120px;
        cursor: pointer;
        /* -webkit-filter: grayscale(100%); */
        /* Safari 6.0 - 9.0 */
        /* filter: grayscale(100%); */
      }
    }
  }
  & .section-project {
    padding-bottom: 100px;
    & h2 {
      text-align: center;
      font-weight: 700;
      font-size: 48px;
      line-height: 26px;
      color: #42446e;
      margin: 0;
      margin: 50px;
    }
    & p {
      text-align: center;
      color: #666666;
      font-weight: 400;
      font-size: 32px;
      line-height: 26px;
      margin: 0;
      margin-bottom: 96px;
    }
    & .cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
      justify-content: center;
      justify-items: center;
      & .card {
        max-width: 375px;
        background: ${({ theme }) => theme.cardbackground};
        box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        min-height: 373px;

        margin: 10px;
        margin-bottom: 30px;
        position: relative;
        transform-style: preserve-3d;
        will-change: transform;
        transition: transform 0.5s;
        background-position: 0 0, 11px 11px;

        & .card-img {
          overflow: hidden;
          position: relative;
          border-radius: 20px 20px 0px 0px;
          max-width: 375px;
          & img {
            height: 260px;
            background-repeat: no-repeat;
            background-position: center;
            background: no-repeat scroll center scroll;
            -webkit-background-size: cover;
            background-size: cover;
            width: 100%;
            border-radius: 20px 20px 0px 0px;
            cursor: pointer;
            transition: all 0.5s ease-in-out;
            overflow: hidden;
          }
        }
        & .card-text {
          padding: 25px;
          & h4 {
            font-weight: 500;
            font-size: 28px;
            line-height: 26px;
            margin: 0;
            color: ${({ theme }) => theme.colorcardh4};
            margin-bottom: 17px;
          }
          & p {
            font-weight: 300;
            font-size: 18px;
            text-align: left;
            line-height: 26px;
            color: ${({ theme }) => theme?.colorcard};
            margin-bottom: 12px;
          }
          & .stack {
            color: #42446e;
            font-weight: 400;
            font-size: 16px;
          }
          & .links {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            & .link {
              display: flex;
              align-items: center;
              margin-right: 30px;
              & span {
                margin-left: 10px;
                color: ${({ theme }) => theme.text};
              }
            }
          }
        }
        :hover {
          /* transform: rotate3d(0.5, 1, 0, 30deg);
          background-position: -110.5px 110.5px -99px 99px; */
          & img {
            transform: scale(1.2);
          }
          & .card-text {
            transform-style: preserve-3d;
            transition: all 0.5s ease-in-out;
            transform: rotate3d(0px, 0px, 50px);
          }
        }
      }
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
    & .navbar-right {
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      color: #42446e;
      & ul {
        & li {
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
