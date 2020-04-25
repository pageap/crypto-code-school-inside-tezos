import styled from '@emotion/styled';

export const ContractFile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: contractFile;
  background: #112425;
  height: 50px;

  span {
    margin-right: 10px;
    :hover {
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 768px) {
    width: calc(100vw - (100vw / 2.4));
  }

  > p {
    background: #1b3738;
    height: 50px;
    display: inline-block;
    margin-left: 1rem;
    color: #729e9f;
    padding-top: 14px;
    padding-right: 8px;
    padding-left: 8px;
  }
`;
export const Editor = styled.div`
  grid-area: editor;
  overflow-y: hidden;
  overflow-x: hidden;
`;
export const Option = styled.div`
  grid-area: option;
  background: #112425;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  @media only screen and (min-width: 768px) {
    width: calc(100vw - (100vw / 2.4));
  }
`;
export const CheckAnswerButton = styled.button`
  height: 60px;
  background-color: #18b77e;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #fff;
  padding: 1rem 0.5rem;
  margin: 0 15px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  outline: none;
  :hover {
    background: #66cca7;
    color: #fff;
  }

  @media only screen and (max-width: 767px) {
    span {
      display: none;
    }

    padding: 1rem 2rem;
  }
`;
export const ShowAnswerButton = styled.button`
  height: 60px;
  background-color: #162f30;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #fff;
  margin: 0 10px;
  padding: 1rem 0.5rem;
  border: none;
  transition: 0.3s;
  cursor: pointer;
  outline: none;
  :hover {
    background: #436061;
    color: #fff;
  }

  @media only screen and (max-width: 767px) {
    span {
      display: none;
    }
    padding: 1rem 2rem;
  }
`;