import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;

  .repos {
    margin-top: 32px;
    display: inline-flex;
    flex-direction: column;
    gap: 16px;
  }
`;
