import styled from '@emotion/styled'

export const Contact = styled.ul`
width: 400px;
padding: 0;
`

export const ContactItem = styled.li`
 display: flex;
 align-items: center;
 font-style: normal;
 font-weight: normal;
 width: 100%;
 margin: 0 auto;
 padding: 5px 5px;
 font-size: 16px;
 text-transform: capitalize;
 justify-content: left;
 & span {
    display: inline-flex;
    align-items: center;
    font-weight: 600;   
    &:first-of-type {      
      margin-right: 10px;
    }
    & svg {
      margin-right: 10px;     
    }
  }

`

export const BtnDelete = styled.button`
display: block;
margin-left: auto;
padding: 5px;
background-color: #c8e7f9;
border: solid 2px #c8e7f9;
box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
border-radius: 10%;
&:hover{
    color: #79e000;
    border:  solid 2px #79e000;
    box-shadow: 1px 2px 2px 0 rgba(121, 224, 0, 0.5);
}
`
