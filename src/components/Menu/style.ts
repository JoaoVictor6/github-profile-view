import styled, { keyframes } from "styled-components";

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.menu`
  *{animation: ${appear} .5s;}
  background: ${prop => prop.theme.background};
  
  .user-data{
    display: flex;
    align-items: center;
    gap: 32px;
    padding-top: 64px;
    img {
      margin-left: 64px;
      border-radius: 100%;
      width: 200px;
      height: 200px;
    }

    section{
      margin-right: 64px;
      h1{
        font-weight: 400;
        font-size: 48px;
        color: ${props => props.theme.white};
        line-height: 48px;
        span {
          font-size: 32px;
          margin-left: 8px;
          color: ${props => props.theme.greyText};
        }
      }

      .description {
        margin-top: 14px;
        font-size: 22px;
        color: ${props => props.theme.weakGrey};
        min-height: 55px;
      }

      .media-infos {
        display: flex;

        .follow-info {
          display: flex;
          align-items: center;
          gap: 10px;
          color: ${props => props.theme.weakGrey};
          * {font-size: 22px;}
        }

        .stars {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-left: 4px;
          color: ${props => props.theme.weakGrey};
          * {font-size: 22px;}
        }
      }
    }
  }
  @media (max-width: 832px){
    .user-data {
      img {margin-left: 32px;}
    }
  }
  @media (max-width: 605px) {
    .user-data {
      flex-direction: column;
      align-items: flex-start;
      margin: 0 16px;
      padding-top: 40px;
      gap: 16px;

      section{
        margin: 0;
        display: inline-block;
        width: 100%;
        h1 {
          text-align: center;
          font-size: 32px;
          span {
            font-size: 22px;
          }
        }
        .description {
          font-size: 20px;
        }
      }

      img {
        margin: 0;
        align-self: center;
        width: 250px;
        height: 250px;
      }
    }

  }
  
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const Tabs = styled.div`
  display: block;
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.grey};

  button{
    background: none; 
    border: none;
    background: -webkit-linear-gradient(#4E54C8, #8F94FB);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 24px;
    line-height: 24px;
    padding: 16px 0;
    border-bottom: 2px solid ${props => props.theme.blue};
    cursor: pointer;
  }
`;
