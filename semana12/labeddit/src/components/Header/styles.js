import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #1272e1;
`;
export const Img = styled.img`
  width: 90px;
  cursor: pointer;
`;
export const Button = styled.button`
  padding: 10px 20px;
  display: block;
  box-sizing: border-box;
  max-width: 600px;
  width: 100%;
  border-radius: 4px;
  border: none;
  background-color: #ff4500;
  color: white;
  font-size: 14px;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  cursor: pointer;
  transition: 300ms;
  :hover {
    background-color: #ff0500;
  }
`;
export const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
