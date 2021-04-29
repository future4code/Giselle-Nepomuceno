import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
