import { Routes, Route } from "react-router-dom";
import { HeaderLayout } from "./HeaderLayout/HeaderLayout";
import { lazy } from "react";

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'))
const Cast = lazy(() => import('../pages/Cast/Cast'))
const Reviews = lazy(() => import('../pages/Reviews/Reviews'))
export const App = () => {
  return (
    <div>
      <Routes>
        <Route/>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<Home/>}/>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="Cast" element={<Cast />} />
            <Route path="Reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
};
