import { NavLink, Outlet } from "react-router-dom"

export const HeaderLayout = () => {
  return <div>
    <header>
      <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/movies'>Movies</NavLink>
    </nav>
    </header>
    <Outlet/>
  </div>
}