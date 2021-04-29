import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  box-sizing: border;
`;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  max-width: 600px;
  width: 100%;
  padding: 20px 10px;
  border-radius: 4px;
  border: 1px solid #b3b2b2;
  background-color: #fcfcfb;
  text-align: left;

  ::-webkit-input-placeholder {
    color: #b3b2b2;
    font-size: 16px;
    font-family: "Raleway", sans-serif;
  }
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  gap: 10px;
`;
export const Button = styled.button`
  padding: 10px 20px;
  display: block;
  box-sizing: border-box;
  max-width: 600px;
  width: 100%;
  border-radius: 4px;
  border: none;
  background-color: #005fcc;
  color: white;
  font-size: 14px;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  cursor: pointer;
  transition: 300ms;
  :hover {
    background-color: #ff4500;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;
