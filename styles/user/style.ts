import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.background};
  display: flex;
  padding-top: 32px;
  justify-content: center;

  .repos {
    display: inline-flex;
    flex-direction: column;
    gap: 16px;
  }
`;
