import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppBar from "./components/Navigation/AppBar";
import HomeView from "./views/HomeView";
import MovieDetailsPage from "./views/MovieDetailsPage";
import MoviesPage from "./views/MoviesPage";
import NotFoundView from "./views/NotFoundView";
import Container from "./components/Container/Container";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route path="/home" element={<HomeView />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
/*'/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
'/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
'/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
/movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
/movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.*/
