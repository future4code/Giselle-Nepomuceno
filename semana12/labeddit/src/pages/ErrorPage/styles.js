import styled from "styled-components";

export const Button = styled.button`
  padding: 15px;
  margin-top: 15px;
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
    background-color: #1272e1;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 20px;
  margin-top: 30px;
  margin-bottom: 70px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Raleway", sans-serif;
  font-size: 48px;
  margin-top: 70px;
  color: #ff4500;
`;

export const TextContent = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h2`
  font-family: "Raleway", sans-serif;
  font-size: 26px;
  color: #ff4500;
  max-width: 500px;
`;

export const Img = styled.img`
  max-width: 250px;
`;
export const ImgContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
