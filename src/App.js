import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/">
          <img
            className="logo"
            alt=""
            src="https://kharedobecho.com/images/kharedobecho.png"
          />
        </a>
        <Navbar />
      </div>
    </header>
  );
};
export default App;
