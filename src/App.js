import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundView from "./views/NotFoundView";
import Container from "./components/Container/Container";

const AppBar = lazy(() => import("./components/Navigation/AppBar.js"));
const HomeView = lazy(() => import("./views/HomeView.js"));
const MoviesPage = lazy(() => import("./views/MoviesPage.js"));
const MovieDetailsPage = lazy(() => import("./views/MovieDetailsPage.js"));

function App() {
  return (
    <Container>
      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route path="/home" element={<HomeView />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
/*'/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
'/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
'/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
/movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
/movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.*/
