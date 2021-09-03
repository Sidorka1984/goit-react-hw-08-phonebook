import styled from "@emotion/styled";

export const Container = styled.div`
    min-height: calc(100vh - 50px);
    pading-left: auto;
    pading-right: auto;
    align-items: center;
    justify-content: center;
    text-aligan: center;
`;
export const Title = styled.h1`
   text-align: center;
    font-size: 26px;
   font-weight: 800;
   color:#75a0f0;
     
`;

export const Thumb = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: center;
  
    @media screen and (max-width: 450px) {
        width: 320px;
        height: auto;
        
}
`