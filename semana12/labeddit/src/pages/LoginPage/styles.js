import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  box-sizing: border;
`;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 600px;
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
