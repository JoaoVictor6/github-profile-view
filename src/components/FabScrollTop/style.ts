import styled from "styled-components";

export const Fab = styled.button`
  border: none;
  cursor: pointer;
  background: #4E54C8;
  display: grid;
  place-content: center;
  width: 58px;
  height: 58px;
  border-radius: 100%;

  position: fixed;
  bottom: 22px;
  right: 28px;

  box-shadow: 5px 4px 9px 0px rgba(0,0,0,0.25); 
  box-shadow: 0px 0px 5px 0px rgba(143,148,251,0.25);

  svg {
    g > path {
        box-shadow: inset 0px 1px 2px 0px rgba(0,0,0,0.42);
    }
  }

  transition: all .45s;
  transform: translateX(100px);

`;
