import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
max-width: 1480px;
font-family: 'Montserrat', sans-serif;

`;

export const Header = styled.header`
width: 100%;
background-color: #FB7756;
box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
`;

export const Nav = styled.nav`
padding: 20px 60px;
`;

export const HeaderLink = styled(NavLink)`
color: #000;
font-size: 32px;
font-weight: 600;
text-decoration: none;

&+& {
  margin-left: 30px;
}

&.active {
  color: #fff;
}

:hover:not(.active),
:focus-visible:not(.active) {
  color: #fff;
}
`;