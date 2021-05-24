import "./App.css";
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { MainContent } from "./components/MainContent";
import { SearchResults } from "./components/SearchResults";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [gamedetails, setgamedetails] = useState([]);
  const [popularGame, setpopularGame] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    get_detail(search);
    setSearch("");
  };

  const get_popular = async (e) => {
    const temp = await fetch(
      `https://api.rawg.io/api/games?&key=8c6f3476990f47c3801d50d6e3d303df`
    )
      .then((res) => res.json())
      .then((result) => result.results);
    setpopularGame(temp);
    // console.log(temp);
  };
  useEffect(() => {
    get_popular();
  }, []);

  const get_detail = async (query) => {
    console.log("im running");
    const temp = await fetch(
      `https://api.rawg.io/api/games?page_size=15&search=${query}&key=8c6f3476990f47c3801d50d6e3d303df`
    )
      .then((res) => res.json())
      .then((result) => result.results);
    setgamedetails(temp);
    console.log(temp);
  };

  return (
    <Router>
      <div>
        <Navbar
          get_detail={get_detail}
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />

        <Switch>
          <Route exact path="/">
            <MainContent popularGame={popularGame} />
          </Route>
          <Route path="/search">
            <SearchResults gamedetails={gamedetails} search={search} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
