import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const Button = styled.button`
  display: block;
    font-family: 'Montserrat',sans-serif;
    margin: 20px;
    background-color: #FB7756;
    border: none;
    border-radius: 3px;
    color: white;
    width: 100px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    height: 30px;
}`;

export const ButtonLink = styled(Link)`
  display: block;
    font-family: 'Montserrat',sans-serif;
    margin: 20px;
    background-color: #FB7756;
    border: none;
    border-radius: 3px;
    color: white;
    width: 100px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
}`;

export const InfoContainer = styled.div`
padding: 20px;
font-size: 20px;
`;

export const Container = styled.div`
padding-left: 20px;
padding-right: 20px;
display: flex`;
