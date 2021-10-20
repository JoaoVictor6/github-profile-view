import styled from "styled-components";

export const Container = styled.menu`
  background: ${prop => prop.theme.background};
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
`;

export const Bold = styled.span`
  font-weight: 700;
`;
