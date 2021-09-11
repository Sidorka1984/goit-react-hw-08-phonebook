import styled from '@emotion/styled/macro';

export const Button = styled.button`
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    margin-top: 15px;
    padding: 10px 28px;
    max-width: 200px;
    font-weight: 700;
    font-size: 15px;
    text-align: center;
    letter-spacing: 0.06em;
    text-decoration: none;
    background-color: #d2ffff;
    border: solid 1.5px #848484;
    color: #848484;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      border:  solid 1.5px #09c3e4;
      box-shadow: 0px 0px 5px  rgba(0,0,0,0.5);
      color: black;
    }
@media screen and (min-width: 320px) {
    font-weight: 500;
    font-size: 10px;
    padding: 5px 5px;
    margin-left: 5px
    margin-top: 10px;
  }
`;

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    text-align: center;    
`;

export const Form = styled.form`
    width: 320;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h1`
    color: #424549;
`;
export const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    flex-direction: column;
    ${'' /* margin-bottom: 15px; */}
    margin-left: auto;
    margin-right: auto;
`;

