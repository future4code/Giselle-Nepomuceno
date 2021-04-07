import { useState } from "react";
import "./styles.css";
import Home from "./pages/Home";
import Match from "./pages/Match";

export default function App(props) {
  const [page, setPage] = useState("Home");

  const changePage = (newPage) => {
    setPage(newPage);
  };

  const renderPage = () => {
    if (page === "Home") {
      return <Home change={changePage} />;
    } else if (page === "Match") {
      return <Match change={changePage} />;
    }
  };

  return <div className="App">{renderPage()}</div>;
}
