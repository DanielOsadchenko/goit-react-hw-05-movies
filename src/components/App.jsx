import { Movies } from "pages/Movies/Movies";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { NotFound } from "pages/NotFound/NotFound";
import { HeaderLayout } from "./HeaderLayout/HeaderLayout";
import { MovieDetails } from "pages/MovieDetails/MovieDetails";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route/>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<Home/>}/>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails/>} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
};
