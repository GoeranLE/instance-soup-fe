import React from "react";
import Detail from "./Detail.js";
import Jumbotron from "./Jumbotron";
import { Link } from "react-router-dom";



export default function Main({ formatted, level, topic, topics, match, setData }) {

  const randomColor = () => {
    const colors = ["#FFC634", "#FF5020", "#2B8CC1", "#E67192", "#00B349", "#00C654", "#A3585A"]
    return colors[Math.floor(Math.random()*colors.length)]
  }

  const vid = formatted
    .filter(el => el.id === Number(match.params.id)) // filter slugs instead
    .map(el => el.video)[0]

    const handleChange = (e) => {
      e.persist()
      if (e.target.value !== "Select spiceyness of your project") {
        setData(prevState => ({
          ...prevState,
          levelSelected: e.target.value
        }))
      }
    }

    const handleTopicSelection = (selectTopic) => {
      console.log(selectTopic)
      setData(prevState => ({
        ...prevState,
        topicSelected: selectTopic
      }))
      console.log("You selected topic:", topic )
  
    }

    for(let el of formatted) {
      console.log(el.image_url);
    }

  return (
    <>
    {!match.params.id && <Jumbotron/>}
    {/* CONDITIONAL RENDERING for main / detail page */}
    {match.params.id ? <Detail vid={vid} formatted={ formatted }/> :  <div className="container">
      <select className="custom-select custom-select-lg mb-5" onChange={(e) => handleChange(e)}>
        <option selected>Select spiceyness of your project</option>
        <option value="easy">🌶 (easy)</option>
        <option value="medium">🌶 🌶 (medium)</option>
        <option value="hard">🌶 🌶 🌶 (hard)</option>
      </select>

      <div className="row">
        <div className="col-sm-12 mb-5">
          {topics.map(el => <button onClick={() => handleTopicSelection(el)} className="btn ml-1 mr-1" style={{backgroundColor: randomColor()}}>{el}</button>)}
        </div>
      </div>

  {/* nested conditional rendering spicyness: */}
  <div class="row mb-3 mt-3">{formatted.filter(el => {
    if (level || topic ) {
      return el.level === level;
    } else if (topic) {
      return topic.includes(el.topic);
    } else {
      return el
    }
    }).map(el => {
      return (
        <div class="col-sm-3 mb-3">
          <div className="card">
            <img
              className="card-img-top"
              src={`http://localhost:3003/${el.image_url}`}
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">{el.title}</h5>
              <p className="card-text">{el.abstract}</p>
              <div className="d-flex justify-content-center">
                <Link to={`/projects/${el.id}`} className="btn btn-warning">
                  see project
                </Link>
              </div>

            </div>
          </div>
        </div>
      )
  })}</div> 
  

    </div>}
    </>
  );
}