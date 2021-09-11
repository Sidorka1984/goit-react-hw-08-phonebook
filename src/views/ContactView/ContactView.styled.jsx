import styled from "@emotion/styled/macro";


export const TitleH1 = styled.h1`
  font-size: 40px;
  margin-bottom: 40px;
  @media screen and (max-width: 450px) {
    display: flex;
    font-weight: 500;
    font-size: 30px;
    text-align: center;  
    justify-content: center;
    margin-bottom: 20px;
  }
    
`;

export const TitleH2 = styled.h2`
  font-weight: normal;
  font-size: 32px;
  text-align: center;
  @media screen and (max-width: 450px) {
    font-weight: 500;
    font-size: 16px;
  }
    
`;