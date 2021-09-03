import styled from '@emotion/styled/macro';

export const Container = styled.div`    
    display: flex;
    align-items: center;

`
export const Title = styled.h2`
    font-weight: 700;
    & svg:
    margin-right: 10px;
    & span:
    color: #dcdcdc;
    font-weight: 700;
    margin-right: 12px;
     @media screen and (max-width: 420px) {
        font-weight: 300;
        font-size: 20px;
        }
   
`