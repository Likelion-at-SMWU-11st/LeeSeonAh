import "./App.css";
import Hello from "./Hello";
import Counter from "./Counter";
import MovieList from "./MovieList";
import BookList from "./BookList";

function App() {
  return (
    <>
      <h1>멋사 프론트 4주차 세미나</h1>
      <Hello name="선아" color="blue" />
      <Counter />
      <MovieList />
      <BookList month="7" week="4" />
    </>
  );
}

export default App;
