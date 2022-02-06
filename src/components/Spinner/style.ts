import styled, { keyframes } from "styled-components";

const roller = keyframes`
  100% {
    transform: rotate(315deg);
  }
`;

function delayAnimation(){
  const delays = Array.from({
    length: 7
  }, (_, index) => (
    `div:nth-child(${index}) { animation-delay: ${(index+1)*0.15}s; }`)
  );

  return delays.reduce((prev, curr) => prev+=curr, "");
}

export const SpinnerElement = styled.div`
  height: 22px;
  display: flex;
  justify-content: center;
  div {
    position:absolute;
    width: 22px;
    height: 22px;
    
    transform: rotate(-45deg);
    animation: ${roller} 2s ease-in-out infinite;
    &:before {
      content: "";
      position: absolute;
      width: 4px;
      height: 4px;
      background: #fff;
      bottom: -2px;
      left: -2px;
      border-radius: 100%;
    }
    
  }
  ${delayAnimation()}
`;
