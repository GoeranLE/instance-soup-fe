import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import AddSoup from "./Components/AddSoup";
import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const [data, setData] = useState({
    infos: [],
    levelSelected: "",
    topicSelected: ""
  });

  const [newState, setNewState] = useState([]);

  console.log("ALL", data.infos);

  const formatted = data.infos.map((el) => {
/*     return {
      id: el.fields.id,
      author: el.fields.author,
      title: el.fields.title,
      abstract: el.fields.abstract,
      date: el.fields.creationDate,
      level: el.fields.level,
      image: el.fields.image.fields.file.url,
      video: el.fields.video,
      info: el.fields.info,
    }; */


/*     1:
    abstract: "Always hungry? Create a delicious recipe collection app with us!"
    author: "Goeran L."
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
    id: 2
    level: "easy"
    technologies: (4) ["Javascript", "HTML", "CSS", "Bootstrap"]
    title: "Cook Book"
    topics: (2) ["cooking", "programming basics"]
    video: "https://www.youtube.com/embed/wVvhqJBcmcg"
    __proto__: Object */


    return el;
  });

  console.log("Das ist es wirklich. So richtig...", formatted)

//  const levels = formatted.map((el) => el.level);



  const topics = formatted
    .map((el) => [...el.topics])
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
{/*         <Route
          path="/"
          render={(props) => (
            <Main
              formatted={formatted}
              level={data.levelSelected}
              topic={data.topicSelected}
              topics={topics}
              setData={setData}
              {...props}
            />
          )}
        /> */}
        <Route
          path="/projects/:id?"
          render={(props) => (
            <Main
              formatted={formatted}
              level={data.levelSelected}
              topic={data.topicSelected}
              topics={topics}
              setData={setData}
              {...props}
            />
          )}
        />
        <Route path="/add-soup" component={AddSoup} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
