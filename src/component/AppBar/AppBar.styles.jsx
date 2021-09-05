import styled from '@emotion/styled/macro';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 30px;
  color: #fff;
  background-color: #a6ecf5;
  border-radius:5px;
  box-shadow: 0px 0px 5px  rgba(0,0,0,0.5);
  @media screen and (max-width: 670px) {
    width: 500px;
    display: flex;
    margin-bottom: 5px;
    font-size: 20px;
  }
`;
