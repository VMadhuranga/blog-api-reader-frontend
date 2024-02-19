import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Blog API</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>&copy; 2024 VMadhuranga</footer>
    </>
  );
}

export default App;
