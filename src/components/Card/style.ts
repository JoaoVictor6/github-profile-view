import styled, { keyframes } from "styled-components";

const appear = keyframes`
  to{   
    transform: translateX(-10px);
  }
  from {
    transform: translateX(0);
  }
`;

export const Container = styled.section`
  
  & > * {animation: ${appear} .45s;}
  .appear {
    visibility: visible;
    transition: all .45s;
  }
`;

export const Content = styled.div`
  visibility: hidden;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.grey};
  background: ${props => props.theme.background2};
  cursor: pointer;
  width: 669px;
  min-height: 122px;
  padding: 12px 16px;
  * {
    font-family: 'Open Sans', sans-serif;
    color: ${props => props.theme.white};
  }
  transition: box-shadow .45s;
  &:hover{ 
    box-shadow: 0px 0px 5px 2px rgba(229,229,229,0.1);
  }

  hgroup {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .name {
      display: flex;
      gap: 4px;
      align-items: center;
      font-size: 24px;
      span {
        color: ${props => props.theme.greyText};
        font-size: 16px;
      }
    }

    .repo-info {
      * {
        font-size: 16px;
        color: ${props => props.theme.greyText};
      }
      display: flex;
      gap: 12px;

      .stars {
        display: flex;
        align-items: center;

        &::nth-child(1){
          margin-right: 4px;
        }
      }
    }
  }

  .description {
    margin-top: 10px;
    padding-bottom: 10px;
    font-size: 16px;
    color: ${props => props.theme.white2};
  }

  @media (max-width: 670px) {
    width: auto;
    margin: 0 20px;
  }
`;
