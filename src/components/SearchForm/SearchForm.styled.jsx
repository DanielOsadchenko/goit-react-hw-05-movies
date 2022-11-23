import styled from "@emotion/styled";

export const Form = styled.form`
display: flex;
justify-content: center;
margin-top: 20px;`;

export const Input = styled.input`
font-family: 'Montserrat', sans-serif;
border: 2px solid #000000; 
  border-radius: 3px; 
  background: #FB7756;
  outline: none; 
  height: 46px; 
  width: 600px;
  padding: 0 10px; 
  color: #000;
  font-size: 16px; `;

export const Button = styled.button`
font-family: 'Montserrat', sans-serif;
margin-left: 24px;
background-color: #FB7756;
    border: none;
    border-radius: 3px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    height: 50px;
    
    :hover, :focus {
      background-color: #000;
      color: #fff;

    }`;