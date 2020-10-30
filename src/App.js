import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const [data, setData] = useState({
    infos: [],
    levelSelected: "",
  });

  console.log("ALL", data.infos);

  const formatted = data.infos.map((el) => {
    return {
      id: el.fields.id,
      author: el.fields.author,
      title: el.fields.title,
      abstract: el.fields.abstract,
      date: el.fields.creationDate,
      level: el.fields.level,
      image: el.fields.image.fields.file.url,
      video: el.fields.video,
      info: el.fields.info,
    };
  });

  const levels = formatted.map((el) => el.level);

  const topics = data.infos
    .map((el) => [...el.fields.topics])
    .reduce((acc, val) => acc.concat(val), [])
    .filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el));

  useEffect(() => {
    fetch("http://localhost:3003")
      .then((res) => res.json())
      // .then((data) => console.log(data));

      .then((data) =>
        setData((prevState) => ({
          ...prevState,
          infos: [...data],
        }))
      )
      .catch((error) => console.log(error.message));
  }, []);


  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          path="/projects/:id?"
          render={(props) => (
            <Main
              formatted={formatted}
              level={data.levelSelected}
              topics={topics}
              setData={setData}
              {...props}
            />
          )}
        />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
