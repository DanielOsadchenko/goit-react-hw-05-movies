import styled from "@emotion/styled";

export const Pagination = styled.div`
display: flex;
justify-content: center;
width: 100%;`;

export const Button = styled.button`
font-family: 'Montserrat', sans-serif;
background-color: #FB7756;
    border: none;
    border-radius: 3px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    height: 50px;
    margin: 10px;
    cursor: pointer;
    
    :hover {
      background-color: #000;
      color: #fff;

    }`;

export const Page = styled.p`
font-family: 'Montserrat', sans-serif;
background-color: #fff;
    border: 2px solid #000;
    color: #000;
    border-radius: 3px;
    padding: 5px;
    align-items: center;
    text-align: center;
    text-decoration: none;
    display: flex;
    font-size: 16px;
    width: 100px;
    justify-content: center;

  `;