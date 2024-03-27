import styled from 'styled-components';


export const Container = styled.div`
  color: black;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 765px){
    padding-top: 91px;
  }
/* 
  @media screen and (min-width: 375px) {
    width: 375px;
  } */

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 25px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;