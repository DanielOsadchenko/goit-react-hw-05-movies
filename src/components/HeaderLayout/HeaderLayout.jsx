import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Container, Header, Nav, HeaderLink } from "./HeaderLayout.styled"

export const HeaderLayout = () => {
  return <Container>
    <Header>
      <Nav>
      <HeaderLink to='/'>Home</HeaderLink>
      <HeaderLink to='/movies'><span></span>Movies</HeaderLink>
    </Nav>
    </Header>
    <Suspense fallback={null}>
      <Outlet/>
    </Suspense>
    
  </Container>
}