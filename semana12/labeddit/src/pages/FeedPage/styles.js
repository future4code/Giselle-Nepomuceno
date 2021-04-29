import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  box-sizing: border;
`;

export const Field = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
`;

export const InputTitle = styled.input`
  display: block;
  box-sizing: border-box;
  max-width: 600px;
  width: 100%;
  padding: 15px 10px;
  border-radius: 4px 4px 0 0;
  border-bottom: none;
  border-top: 1px solid #b3b2b2;
  border-left: 1px solid #b3b2b2;
  border-right: 1px solid #b3b2b2;
  background-color: #fcfcfb;
  text-align: left;

  ::-webkit-input-placeholder {
    color: #b3b2b2;
    font-size: 16px;
    font-family: "Raleway", sans-serif;
  }
`;

export const InputText = styled.input`
  display: block;
  box-sizing: border-box;
  max-width: 600px;
  width: 100%;
  padding: 50px 10px;
  border-top: 1px solid #b3b2b2;
  border-bottom: none;
  border-left: 1px solid #b3b2b2;
  border-right: 1px solid #b3b2b2;
  background-color: #fcfcfb;
  text-align: left;

  ::-webkit-input-placeholder {
    color: #b3b2b2;
    font-size: 16px;
    font-family: "Raleway", sans-serif;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  display: block;
  box-sizing: border-box;
  max-width: 600px;
  width: 100%;
  border-radius: 0 0 4px 4px;
  border: none;
  background-color: #005fcc;
  color: white;
  font-size: 14px;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  cursor: pointer;
  transition: 300ms;
  :hover {
    background-color: #1272e1;
  }
`;
