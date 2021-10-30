import styled from "styled-components";

export const Container = styled.form`
  position: absolute;
  right: 40px;
  top: 18px;
  
  display: inline-flex;
  background: ${props => props.theme.backgroundTransparent};
  border-radius: 100px;

  input {
    padding: 11px 0 11px 16px;
    outline: none;
    border: none;
    font-size: 18px;
    background: transparent;
    color: ${props => props.theme.weakGrey};

    &::placeholder{
      color: ${props => props.theme.grey};
    }
  }

  button {
    border: none;
    background: transparent;
    padding: 8px 12px;
    cursor: pointer
    svg > path {
      fill: ${props => props.theme.weakGrey};
    }
  }
`;