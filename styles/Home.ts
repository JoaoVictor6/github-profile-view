import styled, { keyframes } from "styled-components";

const gradient = keyframes`
  from {
    trans 0% {
		background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const slideup = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);;
  }
`;

const up = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 344px;
  }
`;

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${props => props.theme.background};
  color: ${props => props.theme.textColor1};
  footer {
    display: block;
    position: absolute;
    bottom: 0;
    text-align: center;
    margin: 16px;
  }
  .logo {
    position: absolute;
    top: 73px;
    left: 100px;
    user-select: none;
    color: ${props => props.theme.textColor2};
    
    font-size: 98px;
    font-weight: 600;

    animation: ${slideup} .15s ease-in-out;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      width: 344px;
      height:54px;
      background: linear-gradient(90deg, rgba(142,45,226,1) 0%, rgba(74,0,224,1) 100%);
      top: 75px;
      opacity: .5;
      animation: ${up} .45s ease-in-out;
      z-index: -1;
    }
  }

  form {
    animation: ${appear} .5s;
    margin-top: 116px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;  

    & > * {color: ${props => props.theme.textColor1};}
    input {
      border: none;
      background: transparent;
      outline: none;
      text-align: center;

      font-size: 20px;
      font-weight: 600;
      border-radius: 15px;
      border: 1px solid ${props => props.theme.blue};
      padding: 18px;
      width: 810px;
    }

    button {
      font-size: 22px;
      width: 502px;
      border:none;
      cursor: pointer;
      font-weight: 500;

      display: inline-block;
      background: linear-gradient(90deg, rgba(78,84,200,1) 0%, rgba(143,148,251,1) 100%);
      background-size: 400% 400%;
      animation: ${gradient} 15s ease infinite;
      
      border-radius: 15px;
      color: #fff;
      border: none;
      font-weight: 500;
      font-size: 18px;
      padding: 12px;
    }
  }

  @media (max-width: 834px) {
    .logo {
      left: 58px;
      top: 208px;
    }
    form {
      width: 100%;
      align-items: stretch;
      input { 
        margin: 0 54px;
        width: auto;
      }
      button {
        margin: 0 auto;
      }
    }
  }
  @media (max-width: 584px) {
    .logo {
      left: 40px;
      top: 60px;
      font-size: 64px;
      width: 235px;

      &::before {
        width: 118px;
        height: 45px;
        top: 47px;
        left: 0;
      }
    }
  }
`;

