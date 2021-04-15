import styled from 'styled-components'


export const BackButtonContent = styled.div`
display:flex;
justify-content:flex-end;
margin-right:20px;
margin-top:30px;
`;

export const Button = styled.button`
padding:15px;
margin-top:15px;
border-radius:50px;
border:none;
background-color:#E6207E;
color:white;
font-size:14px;
font-family: 'Nunito', sans-serif;
font-weight:800;
cursor: pointer;
transition:300ms;
:hover{
 background-color:rgb(212,12, 126);
}`;

export const ButtonContent = styled.div`
display:flex;
justify-content:center;
margin-right:20px;
margin-top:30px;
`;

export const Title = styled.h2`

display:flex;
justify-content:center;
align-items:center;
font-family:'nunito', sans-serif;
font-size:28px;
color:#338899;
`;

export const Field = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content:center;
padding: 0 40px;
gap:10px;
@media(max-width:1044px){
   
}
`;

export const Input = styled.input`
/* display:flex; */
max-width: 600px;
width: 100%;
padding:20px 10px;
border-radius:10px;
border:1px solid #D3E2E5;
background-color:#F5F8FA;
text-align:left;
::-webkit-input-placeholder {
   color: #828282;
   font-size:16px;
   font-family:'nunito', sans-serif;
}
`;
