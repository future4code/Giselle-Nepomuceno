import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostBox = styled.div`
  margin-top: 30px;
  border-radius: 3px;
  border: 2px solid #b3b2b2;
  box-sizing: border;
  margin-top: 30px;
  width: 600px;
  padding: 10px;
`;
export const PostsField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserContent = styled.div`
  border-bottom: 1px solid #b3b2b2;
  background-color: #fcfcfb;
  text-align: left;
`;

export const VoteContent = styled.div`
  border-top: 1px solid #b3b2b2;
  background-color: #fcfcfb;
  text-align: left;
`;

export const InputComment = styled.input`
  display: block;
  box-sizing: border-box;
  width: 800px;
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

export const Field = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  display: block;
  box-sizing: border-box;
  width: 600px;
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
  :disabled {
    background-color: rgb(204, 204, 204);
    box-shadow: 0 4px 0 rgb(156, 156, 156);
    cursor: auto;
  }
`;
