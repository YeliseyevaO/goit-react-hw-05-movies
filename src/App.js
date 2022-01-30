import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppBar from "./components/Navigation/AppBar";
import HomeView from "./views/HomeView";
import MovieDetailsPage from "./views/MovieDetailsPage";

const MoviesPage = () => {
  return <h1>Hello</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route path="/home" element={<HomeView />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
/*'/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
'/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
'/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
/movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
/movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.*/
