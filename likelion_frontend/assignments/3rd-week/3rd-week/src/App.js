import "./App.css";
import APage from "./APage";
import BPage from "./BPage";

function App() {
  const bool = true;
  return (
    <>
      <h3>프론트 3주차 과제</h3>
      {bool === true ? <APage /> : <BPage />}
    </>
  );
}

export default App;
