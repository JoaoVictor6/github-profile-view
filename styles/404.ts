import styled, { css } from "styled-components";
const errorCodeFont = css`
  font-size: 164px;
  line-height: 164px;
  font-weight: 700;
`;

const errorCodeFontMedium = css`
  font-size: 158px;
  line-height: 158px;
  font-weight: 700;
`;

const errorCodeFontMobile = css`
  font-size: 116px;
  line-height: 116px;
  font-weight: 700;
`;

export const Container = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.background};
  display: grid;
  place-content: center;
  & > div {
    display: flex;
    flex-direction: column;
  }
  .message {
    display: flex;
    align-items: flex-end;
    gap: 16px;
    user-select: none;
    color: ${props => props.theme.grey};
    font-family: 'Poppins', sans-serif;
    .error-code {
      ${errorCodeFont};
    }
    .message-user {
      font-size: 64px;
    }
  }

  a {
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    color: ${props => props.theme.blue};
    display: flex;
    gap: 8px;
    align-self: end;
    align-items: center;
    svg > path {
      stroke: ${props => props.theme.blue};
    }
    transition: all .4s;
    &:hover {
      filter: brightness(.7);
    }
  }

  @media (max-width: 834px) {
    gap: 30px;
    .message {
      .error-code {
        ${errorCodeFontMedium}; 
      }
      .message-user {
        font-size: 48px;
      }
    }
  }

  @media (max-width: 704px) {
    
    .message {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0;
      .error-code {
        ${errorCodeFontMobile}; 
      }
      
      .message-user {
        align-self: auto;
        font-size: 32px;
      }
    }

    a {
      margin-top: 64px; 
      align-self: center;
    }
  }

  @media (max-width: 375px){
    .message {
    }
  }
`;
