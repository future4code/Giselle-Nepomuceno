import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  box-sizing: border;
`;

export const PostBox = styled.div`
  margin-top: 30px;
  border-radius: 3px;
  border: 2px solid #b3b2b2;
  box-sizing: border;
  margin-top: 30px;
  width: 600px;
  padding: 10px;
  cursor: pointer;
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
