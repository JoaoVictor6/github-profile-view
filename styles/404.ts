import styled, { css } from "styled-components";
const errorCodeFont = css`
  font-size: 164px;
  line-height: 164px;
  font-weight: 700;

  /* font-size: clamp(1.1rem, 0.7153rem + 1.6368vw, 1.5rem); */
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
`;
